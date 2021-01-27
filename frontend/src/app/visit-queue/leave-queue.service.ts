import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JtqConstants } from '../constants/jtq-constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveQueueService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  public async leaveQueue(queueDetailId: number) {
      const promise = await this.http.delete(JtqConstants.LEAVE_QUEUE_URL + queueDetailId).toPromise();
      return JSON.stringify(promise);
   }
}
