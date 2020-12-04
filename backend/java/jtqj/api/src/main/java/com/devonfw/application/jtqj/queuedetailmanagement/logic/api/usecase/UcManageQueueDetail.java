package com.devonfw.application.jtqj.queuedetailmanagement.logic.api.usecase;

import com.devonfw.application.jtqj.eventmanagement.logic.api.to.EventEto;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailCto;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailEto;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailSearchCriteriaTo;

/**
 * Interface of UcManageQueueDetail to centralize documentation and signatures of methods.
 */
public interface UcManageQueueDetail {

  /**
   * Deletes a queueDetail from the database by its id 'queueDetailId'.
   *
   * @param queueDetailId Id of the queueDetail to delete
   * @return boolean <code>true</code> if the queueDetail can be deleted, <code>false</code> otherwise
   */
  boolean deleteQueueDetail(long queueDetailId);

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
   */
  QueueDetailCto joinTheQueue(QueueDetailSearchCriteriaTo criteria);

  /**
   * @param eventId
   * @param event
   * @return String
   */
  String getQueueNumber(long eventId, EventEto event);

  /**
   * @return
   *
   */
  boolean setEstimatedTime(EventEto event);

}
