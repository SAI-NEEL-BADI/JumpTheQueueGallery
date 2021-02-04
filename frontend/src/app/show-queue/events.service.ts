import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JtqConstants } from '../constants/jtq-constants';
import { JoinCriteria } from '../models/join-criteria';
import { SearchCriteria } from '../models/search-criteria';
import { VisitorCriteria } from '../models/visitor-criteria';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}

  // tslint:disable-next-line: typedef
  public async getEvents()
  {
    const promise =  await this.http.get(JtqConstants.GET_ALL_EVENTS_URL).toPromise();
    return JSON.stringify(promise);
  }
  // tslint:disable-next-line: typedef
  public async getVisitorEventQueueDetails(visitorCriteria: VisitorCriteria) {
    const promise = await this.http.get(JtqConstants.GET_QUEUES_BY_VISITOR_ID_URL + visitorCriteria.idVisitor).toPromise();
    return JSON.stringify(promise);
  }
  // tslint:disable-next-line: typedef
  public async joinQueue(joinCriteria: JoinCriteria) {
    const promise = await this.http.post(JtqConstants.JOIN_THE_QUEUE_URL, joinCriteria).toPromise();
    return JSON.stringify(promise);
  }
  // tslint:disable-next-line: typedef
  public async getAllQueueDetails() {
    const promise = await this.http.get(JtqConstants.GET_ALL_QUEUE_DETAILS_URL).toPromise();
    return JSON.stringify(promise);
  }
}
