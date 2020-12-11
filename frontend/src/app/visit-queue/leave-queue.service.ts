import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JtqConstants } from '../constants/jtq-constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveQueueService {

  constructor(private http: HttpClient) { }

  public leaveQueue(queueDetailId: number): Observable<any>{
      return this.http.delete(JtqConstants.LEAVE_QUEUE_URL + queueDetailId);
   }
}
