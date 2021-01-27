import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JoinCriteria } from '../models/join-criteria';
import { LocalEvents } from '../models/local-events';
import { LocalVisitor } from '../models/local-visitor';
import { QueueDetails } from '../models/queue-details';
import { SearchCriteria } from '../models/search-criteria';
import { VisitorCriteria } from '../models/visitor-criteria';
import { Queue } from '../queue';
import { EventsService } from './events.service';

@Component({
  selector: 'app-show-queue',
  templateUrl: './show-queue.component.html',
  styleUrls: ['./show-queue.component.scss'],
})
export class ShowQueueComponent implements OnInit {
  constructor(private router: Router, private eventService: EventsService) {}
  allQueueDetails: QueueDetails[] = [];
  queueDetail: QueueDetails = new QueueDetails();
  joinEvent: JoinCriteria = new JoinCriteria();
  queueDetails: QueueDetails[] = [];
  visitorCriteria: VisitorCriteria = new VisitorCriteria();
  visitor: LocalVisitor = new LocalVisitor();
  criteria: SearchCriteria = new SearchCriteria();
  events: LocalEvents[] = [];
  localEvents: LocalEvents[] = [];
  localJoinedEvent: Queue;
  localUSername: string;
  localPassword: string;
  msg: string;
  errorMsg: string;

  ngOnInit(): void {
    this.visitor = JSON.parse(localStorage.getItem('visitor'));
    if (this.visitor === null) {
      this.router.navigateByUrl('/jumpthequeue/login');
    } else {
      this.visitorCriteria.idVisitor = this.visitor.id;
      this.joinEvent.idVisitor = this.visitor.id;
      this.eventService.getEvents().then((data) => {
        this.events = JSON.parse(data);
        for (const item of this.events) {
          item.isJoined = false;
          item.currentlyBeingAttended = '- -';
        }
        localStorage.setItem('events', JSON.stringify(this.events));
        this.updateVisitorQueueDetails();
        this.getAllQueueDetails();
      });
    }
    this.localEvents = JSON.parse(localStorage.getItem('events'));
  }
  // tslint:disable-next-line: typedef
  logOut() {
    localStorage.removeItem('visitor');
    this.router.navigateByUrl('/jumpthequeue/login');
  }
  // tslint:disable-next-line: typedef
  goToQueue(eventName: string, eventId: number) {
    this.setLocalQueueDetails(eventId);
    this.router.navigateByUrl('/jumpthequeue/visit-queue/' + eventName);
  }
  // tslint:disable-next-line: typedef
  joinQueue(eventName: string, eventId: number) {
    this.joinEvent.idEvent = eventId;
    this.eventService.joinQueue(this.joinEvent).then(
      (data) => {

            this.updateVisitorQueueDetails();
            localStorage.setItem('events', JSON.stringify(this.localEvents));
            localStorage.setItem('queueDetails', JSON.stringify(this.queueDetails));
            localStorage.setItem('currentQueue', JSON.stringify(JSON.parse(data)));
            this.getAllQueueDetails();
            this.setLocalQueueDetails(eventId);
            this.router.navigateByUrl('/jumpthequeue/visit-queue/' + eventName);
      },
      (error) => {
        window.alert('Something went wrong. Try again');
        this.router.navigateByUrl('/');
      }
    );
  }

  // tslint:disable-next-line: typedef
  setLocalQueueDetails(eventId: number) {
    this.queueDetails = JSON.parse(localStorage.getItem('queueDetails'));
    this.localEvents = JSON.parse(localStorage.getItem('events'));
    for (const queueItem of this.queueDetails) {
      if (queueItem.idEvent === eventId) {
        this.queueDetail = queueItem;
        for (const item of this.localEvents) {
          if (this.queueDetail.idEvent === item.id) {
            this.queueDetail.currentlyBeingAttended =
              item.currentlyBeingAttended;
          }
          localStorage.setItem(
            'currentQueue',
            JSON.stringify(this.queueDetail)
          );
        }
      }
    }
  }

  // tslint:disable-next-line: typedef
  updateVisitorQueueDetails() {
    this.eventService
      .getVisitorEventQueueDetails(this.visitorCriteria)
      .then((queueData) => {
        const queues = JSON.parse(queueData);
        this.queueDetails = JSON.parse(queueData);
        let i = 0;
        for (const queue of queues) {
          this.queueDetails[i].id = queue.id;
          this.queueDetails[i].queueNumber = queue.queueNumber;
          this.queueDetails[i].creationTime = queue.creationTime;
          this.queueDetails[i].startTime = queue.startTime;
          this.queueDetails[i].endTime = queue.endTime;
          this.queueDetails[i].estimatedTime = queue.estimatedTime;
          this.queueDetails[i].attentionTime = queue.attentionTime;
          this.queueDetails[i].idEvent = queue.idEvent.id;
          this.queueDetails[i].idVisitor = queue.idVisitor.id;
          i++;
      }
        this.localEvents = JSON.parse(localStorage.getItem('events'));
        for (const item of this.localEvents) {
          item.isJoined = false;
        }
        for (const item of this.localEvents) {
          for (const queueDetail of this.queueDetails) {
            if (queueDetail.idEvent === item.id) {
              item.isJoined = true;
            }
          }
        }
        localStorage.setItem('events', JSON.stringify(this.localEvents));
        localStorage.setItem('queueDetails', JSON.stringify(this.queueDetails));
      });
  }

  // tslint:disable-next-line: typedef
  getAllQueueDetails() {
    this.localEvents = JSON.parse(localStorage.getItem('events'));
    this.eventService.getAllQueueDetails().then((data) => {
      this.allQueueDetails = JSON.parse(data);
      this.allQueueDetails.reverse();
      for (const queueDetail of this.allQueueDetails) {
        for (const item of this.localEvents) {
          if (item.id === queueDetail.idEvent) {
            item.currentlyBeingAttended = queueDetail.queueNumber;
          }
        }
      }
      localStorage.setItem('events', JSON.stringify(this.localEvents));
    });
  }
}
