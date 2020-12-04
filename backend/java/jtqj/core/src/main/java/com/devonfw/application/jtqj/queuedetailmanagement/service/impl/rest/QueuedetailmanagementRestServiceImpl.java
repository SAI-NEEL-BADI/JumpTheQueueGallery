package com.devonfw.application.jtqj.queuedetailmanagement.service.impl.rest;

import javax.inject.Inject;
import javax.inject.Named;

import org.springframework.data.domain.Page;

import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.Queuedetailmanagement;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailCto;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailEto;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailSearchCriteriaTo;
import com.devonfw.application.jtqj.queuedetailmanagement.service.api.rest.QueuedetailmanagementRestService;

/**
 * The service implementation for REST calls in order to execute the logic of component {@link Queuedetailmanagement}.
 */
@Named("QueuedetailmanagementRestService")
public class QueuedetailmanagementRestServiceImpl implements QueuedetailmanagementRestService {

  @Inject
  private Queuedetailmanagement queuedetailmanagement;

  @Override
  public QueueDetailEto getQueueDetail(long id) {

    return this.queuedetailmanagement.findQueueDetail(id);
  }

  @Override
  public QueueDetailEto saveQueueDetail(QueueDetailEto queuedetail) {

    return this.queuedetailmanagement.saveQueueDetail(queuedetail);
  }

  @Override
  public void deleteQueueDetail(long id) {

    this.queuedetailmanagement.deleteQueueDetail(id);
  }

  @Override
  public Page<QueueDetailEto> findQueueDetails(QueueDetailSearchCriteriaTo searchCriteriaTo) {

    return this.queuedetailmanagement.findQueueDetails(searchCriteriaTo);
  }

  @Override
  public QueueDetailCto getQueueDetailCto(long id) {

    System.out.println("QueueDetailRestService");
    return this.queuedetailmanagement.findQueueDetailCto(id);
  }

  @Override
  public Page<QueueDetailCto> findQueueDetailCtos(QueueDetailSearchCriteriaTo searchCriteriaTo) {

    return this.queuedetailmanagement.findQueueDetailCtos(searchCriteriaTo);
  }

  @Override
  public QueueDetailCto joinTheQueue(QueueDetailSearchCriteriaTo searchCriteriaTo) {

    return this.queuedetailmanagement.joinTheQueue(searchCriteriaTo);
  }

}
