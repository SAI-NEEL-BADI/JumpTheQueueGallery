import { environment } from 'src/environments/environment';

export class JtqConstants {
  public static LOGIN_URL =
    environment.SPRING_WEB_URL + 'visitormanagement/v1/visitor/search';
  public static SIGN_UP_URL =
    environment.SPRING_WEB_URL + 'visitormanagement/v1/visitor/';
  public static GET_ALL_EVENTS_URL =
    environment.SPRING_WEB_URL + 'eventmanagement/v1/event/search';
  public static GET_QUEUES_BY_VISITOR_ID_URL =
    environment.SPRING_WEB_URL + 'queuedetailmanagement/v1/queuedetail/search';
  public static JOIN_THE_QUEUE_URL =
    environment.SPRING_WEB_URL + 'queuedetailmanagement/v1/queuedetail/jointhequeue';
  public static GET_ALL_QUEUE_DETAILS_URL =
    environment.SPRING_WEB_URL + 'queuedetailmanagement/v1/queuedetail/search';
  public static LEAVE_QUEUE_URL =
    environment.SPRING_WEB_URL + 'queuedetailmanagement/v1/queuedetail/';
}
