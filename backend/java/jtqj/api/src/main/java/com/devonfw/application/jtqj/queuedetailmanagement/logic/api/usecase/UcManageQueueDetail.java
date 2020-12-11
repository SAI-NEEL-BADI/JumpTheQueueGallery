package com.devonfw.application.jtqj.queuedetailmanagement.logic.api.usecase;

import com.devonfw.application.jtqj.eventmanagement.logic.api.to.EventEto;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailEto;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailSearchCriteriaTo;
import com.devonfw.application.jtqj.visitormanagement.logic.api.to.VisitorEto;

/**
 * Interface of UcManageQueueDetail to centralize documentation and signatures of methods.
 */
public interface UcManageQueueDetail {

  /**
   * Deletes a queueDetail from the database by its id 'queueDetailId'.
   *
   * @param queueDetailId Id of the queueDetail to delete
   * @return boolean <code>true</code> if the queueDetail can be deleted, <code>false</code> otherwise
   * @throws Exception
   */
  boolean deleteQueueDetail(long queueDetailId) throws Exception;

  /**
   * Saves a queueDetail and store it in the database.
   *
   * @param queueDetail the {@link QueueDetailEto} to create.
   * @return the new {@link QueueDetailEto} that has been saved with ID and version.
   */
  QueueDetailEto saveQueueDetail(QueueDetailEto queueDetail);

  /**
   * @param criteria
   * @return QueueDetailCto
   * @throws Exception
   */
  QueueDetailEto joinTheQueue(QueueDetailSearchCriteriaTo criteria) throws Exception;

  /**
   * @param event
   * @return String
   */
  String getQueueNumber(EventEto event);

  /**
   * @param event
   * @return boolean
   *
   */
  void setEstimatedTime(EventEto event);

  /**
   * @param visitorId
   * @return VisitorEto
   * @throws Exception
   */
  VisitorEto getVisitor(long visitorId) throws Exception;

  /**
   * @param eventId
   * @return EventEto
   * @throws Exception
   */
  EventEto getEvent(long eventId) throws Exception;

  /**
   * @param queueDetailId
   * @return
   * @throws Exception
   */
  QueueDetailEto getQueueDetail(long queueDetailId) throws Exception;

}
