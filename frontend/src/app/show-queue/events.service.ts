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

  public getEvents(eventSearch: SearchCriteria): Observable<any> {
    return this.http.post(JtqConstants.GET_ALL_EVENTS_URL, eventSearch);
  }
  public getVisitorEventQueueDetails(
    visitorCriteria: VisitorCriteria
  ): Observable<any> {
    return this.http.post(
      JtqConstants.GET_QUEUES_BY_VISITOR_ID_URL,
      visitorCriteria
    );
  }
  public joinQueue(joinCriteria: JoinCriteria): Observable<any> {
    return this.http.post(JtqConstants.JOIN_THE_QUEUE_URL, joinCriteria);
  }
  public getAllQueueDetails(criteria: SearchCriteria): Observable<any> {
    return this.http.post(JtqConstants.GET_ALL_QUEUE_DETAILS_URL, criteria);
  }
}
