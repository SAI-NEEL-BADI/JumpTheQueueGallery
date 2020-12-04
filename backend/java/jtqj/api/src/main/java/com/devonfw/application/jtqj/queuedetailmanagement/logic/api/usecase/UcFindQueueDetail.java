package com.devonfw.application.jtqj.queuedetailmanagement.logic.api.usecase;

import java.util.List;

import org.springframework.data.domain.Page;

import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailCto;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailEto;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailSearchCriteriaTo;

public interface UcFindQueueDetail {

  /**
   * Returns a QueueDetail by its id 'id'.
   *
   * @param id The id 'id' of the QueueDetail.
   * @return The {@link QueueDetailEto} with id 'id'
   */
  QueueDetailEto findQueueDetail(long id);

  /**
   * Returns a paginated list of QueueDetails matching the search criteria.
   *
   * @param criteria the {@link QueueDetailSearchCriteriaTo}.
   * @return the {@link List} of matching {@link QueueDetailEto}s.
   */
  Page<QueueDetailEto> findQueueDetails(QueueDetailSearchCriteriaTo criteria);

  /**
   * Returns a composite QueueDetail by its id 'id'.
   *
   * @param id The id 'id' of the QueueDetail.
   * @return The {@link QueueDetailCto} with id 'id'
   */
  QueueDetailCto findQueueDetailCto(long id);

  /**
   * Returns a paginated list of composite QueueDetails matching the search criteria.
   *
   * @param criteria the {@link QueueDetailSearchCriteriaTo}.
   * @return the {@link List} of matching {@link QueueDetailCto}s.
   */
  Page<QueueDetailCto> findQueueDetailCtos(QueueDetailSearchCriteriaTo criteria);

}
