import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveQueueService {

  constructor(private http: HttpClient) { }

  public leaveQueue(queueDetailId: number): Observable<any>{
      return this.http.delete('http://localhost:8081/jumpthequeue/services/rest/queuedetailmanagement/v1/queuedetail/' + queueDetailId);
   }
}
