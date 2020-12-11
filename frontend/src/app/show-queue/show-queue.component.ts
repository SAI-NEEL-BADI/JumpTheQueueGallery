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
      this.visitorCriteria.visitorId = this.visitor.id;
      this.joinEvent.visitorId = this.visitor.id;
      this.eventService.getEvents(this.criteria).subscribe((data) => {
        this.events = data.content;
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
  logOut() {
    localStorage.removeItem('visitor');
    this.router.navigateByUrl('/jumpthequeue/login');
  }
  goToQueue(eventName: string, eventId: number) {
    this.setLocalQueueDetails(eventId);
    this.router.navigateByUrl('/jumpthequeue/visit-queue/' + eventName);
  }
  joinQueue(eventName: string, eventId: number) {
    this.joinEvent.eventId = eventId;
    this.eventService.joinQueue(this.joinEvent).subscribe(
      (data) => {
        this.eventService
          .getVisitorEventQueueDetails(this.visitorCriteria)
          .subscribe((queueData) => {
            this.queueDetails = queueData.content;
            this.localEvents = JSON.parse(localStorage.getItem('events'));
            for (const item of this.localEvents) {
              item.isJoined = false;
            }

            for (const item of this.localEvents) {
              for (const queueDetail of this.queueDetails) {
                if (queueDetail.eventId === item.id) {
                  item.isJoined = true;
                }
              }
            }
            localStorage.setItem('events', JSON.stringify(this.localEvents));
            localStorage.setItem(
              'queueDetails',
              JSON.stringify(this.queueDetails)
            );

            this.getAllQueueDetails();
            this.setLocalQueueDetails(eventId);
            this.router.navigateByUrl('/jumpthequeue/visit-queue/' + eventName);
          });
      },
      (error) => {
        window.alert('Something went wrong. Try again');
        this.router.navigateByUrl('/');
      }
    );
  }

  setLocalQueueDetails(eventId: number) {
    this.queueDetails = JSON.parse(localStorage.getItem('queueDetails'));
    this.localEvents = JSON.parse(localStorage.getItem('events'));
    for (const queueItem of this.queueDetails) {
      if (queueItem.eventId === eventId) {
        this.queueDetail = queueItem;
        for (const item of this.localEvents) {
          if (this.queueDetail.eventId === item.id) {
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

  updateVisitorQueueDetails() {
    this.eventService
      .getVisitorEventQueueDetails(this.visitorCriteria)
      .subscribe((queueData) => {
        this.queueDetails = queueData.content;
        this.localEvents = JSON.parse(localStorage.getItem('events'));
        for (const item of this.localEvents) {
          item.isJoined = false;
        }
        for (const item of this.localEvents) {
          for (const queueDetail of this.queueDetails) {
            if (queueDetail.eventId === item.id) {
              item.isJoined = true;
            }
          }
        }
        localStorage.setItem('events', JSON.stringify(this.localEvents));
        localStorage.setItem('queueDetails', JSON.stringify(this.queueDetails));
      });
  }

  getAllQueueDetails() {
    this.localEvents = JSON.parse(localStorage.getItem('events'));
    this.eventService.getAllQueueDetails(this.criteria).subscribe((data) => {
      this.allQueueDetails = data.content;
      this.allQueueDetails.reverse();
      for (const queueDetail of this.allQueueDetails) {
        for (const item of this.localEvents) {
          if (item.id === queueDetail.eventId) {
            item.currentlyBeingAttended = queueDetail.queueNumber;
          }
        }
      }
      localStorage.setItem('events', JSON.stringify(this.localEvents));
    });
  }
}
