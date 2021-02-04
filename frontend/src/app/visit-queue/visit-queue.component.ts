import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalEvents } from '../models/local-events';
import { LocalVisitor } from '../models/local-visitor';
import { QueueDetails } from '../models/queue-details';
import { LeaveQueueService } from './leave-queue.service';

@Component({
  selector: 'app-visit-queue',
  templateUrl: './visit-queue.component.html',
  styleUrls: ['./visit-queue.component.scss'],
})
export class VisitQueueComponent implements OnInit {
  countDownDate: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private queueService: LeaveQueueService
  ) {}

  events: LocalEvents[] = [];
  demo: any;
  visitor: LocalVisitor = new LocalVisitor();
  eventId: number;
  eventName: string;
  queueDetails: QueueDetails[] = [];
  queuDetail: QueueDetails = new QueueDetails();
  msg: string;
  errorMsg: string;
  currentFlag: boolean;

  currentlyBeingAttended: string;
  x = setInterval(() => {
    const now = new Date().getTime();
    this.currentFlag = false;
    this.queuDetail = JSON.parse(localStorage.getItem('currentQueue'));
    this.countDownDate = new Date(this.queuDetail.estimatedTime).getTime();
    let distance = this.countDownDate - now;
    if (distance < 0) {
      this.currentFlag = true;
      this.countDownDate = new Date(this.queuDetail.attentionTime).getTime();
      distance = this.countDownDate - now;
      if (distance < 0) {
        distance = 0;
        clearInterval(this.x);
      }
    }
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    this.demo = hours + ' : ' + minutes + ' : ' + seconds;
  });

  ngOnInit(): void {
    this.visitor = JSON.parse(localStorage.getItem('visitor'));
    if (this.visitor === null) {
      this.router.navigateByUrl('/jumpthequeue/login');
    } else {
      this.queuDetail = JSON.parse(localStorage.getItem('currentQueue'));
      this.route.paramMap.subscribe((params) => {
        this.eventName = params.get('eventName');
      });
    }
  }

  // tslint:disable-next-line: typedef
  async leaveQueue() {
    try {
      clearInterval(this.x);
      const data = await this.queueService.leaveQueue(this.queuDetail.id);
      this.msg = JSON.parse(data);
      clearInterval(this.x);
      this.router.navigateByUrl('/jumpthequeue/join-leave');
    } catch {
      window.alert('Something went wrong. Try again');
      this.router.navigateByUrl('/jumpthequeue/visit-queue/' + this.eventName);
    }
  }
  // tslint:disable-next-line: typedef
  logOut() {
    clearInterval(this.x);
    localStorage.removeItem('currentQueue');
    localStorage.removeItem('visitor');
    this.router.navigateByUrl('/jumpthequeue/login');
  }
  // tslint:disable-next-line: typedef
  goToEvents() {
    this.router.navigateByUrl('/jumpthequeue/join-leave');
  }
}
