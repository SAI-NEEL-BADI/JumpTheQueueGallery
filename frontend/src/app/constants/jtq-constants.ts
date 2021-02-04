import { environment } from 'src/environments/environment';

export class JtqConstants {
  public static LOGIN_URL = environment.JTQ_WEB_URL + 'visitor/visitors/login';
  public static SIGN_UP_URL =
    environment.JTQ_WEB_URL + 'visitor/visitors/register';
  public static GET_ALL_EVENTS_URL =
    environment.JTQ_WEB_URL + 'event/events';
  public static GET_QUEUES_BY_VISITOR_ID_URL =
    environment.JTQ_WEB_URL + 'queuedetails/queuedetails/getQueueDetailsByVisitorId/';
  public static JOIN_THE_QUEUE_URL =
    environment.JTQ_WEB_URL + 'queuedetails/queuedetails/joinQueue';
  public static GET_ALL_QUEUE_DETAILS_URL =
    environment.JTQ_WEB_URL + 'queuedetails/queuedetails/getAllQueueDetails';
  public static LEAVE_QUEUE_URL =
    environment.JTQ_WEB_URL + 'queuedetails/queuedetails/';
}
