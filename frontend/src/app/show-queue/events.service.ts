import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JoinCriteria } from '../models/join-criteria';
import { SearchCriteria } from '../models/search-criteria';
import { VisitorCriteria } from '../models/visitor-criteria';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

 public getEvents(eventSearch: SearchCriteria): Observable<any>{
     return this.http.post('http://localhost:8081/jumpthequeue/services/rest/eventmanagement/v1/event/search', eventSearch);
  }
  public getVisitorEventQueueDetails(visitorCriteria: VisitorCriteria): Observable<any>{
    return this.http.post('http://localhost:8081/jumpthequeue/services/rest/queuedetailmanagement/v1/queuedetail/search', visitorCriteria);
  }
  public joinQueue(joinCriteria: JoinCriteria): Observable<any>{
    // tslint:disable-next-line: max-line-length
    return this.http.post('http://localhost:8081/jumpthequeue/services/rest/queuedetailmanagement/v1/queuedetail/jointhequeue', joinCriteria);
  }
  public getAllQueueDetails(criteria: SearchCriteria): Observable<any>{
    return this.http.post('http://localhost:8081/jumpthequeue/services/rest/queuedetailmanagement/v1/queuedetail/search', criteria);
  }
}
