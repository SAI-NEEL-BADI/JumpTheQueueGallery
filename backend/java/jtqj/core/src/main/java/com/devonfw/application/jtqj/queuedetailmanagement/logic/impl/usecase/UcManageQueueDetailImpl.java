package com.devonfw.application.jtqj.queuedetailmanagement.logic.impl.usecase;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;
import java.util.Objects;

import javax.inject.Inject;
import javax.inject.Named;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;

import com.devonfw.application.jtqj.eventmanagement.dataaccess.api.EventEntity;
import com.devonfw.application.jtqj.eventmanagement.logic.api.Eventmanagement;
import com.devonfw.application.jtqj.eventmanagement.logic.api.to.EventEto;
import com.devonfw.application.jtqj.queuedetailmanagement.dataaccess.api.QueueDetailEntity;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailEto;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailSearchCriteriaTo;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.usecase.UcManageQueueDetail;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.base.usecase.AbstractQueueDetailUc;
import com.devonfw.application.jtqj.visitormanagement.dataaccess.api.VisitorEntity;
import com.devonfw.application.jtqj.visitormanagement.logic.api.Visitormanagement;
import com.devonfw.application.jtqj.visitormanagement.logic.api.to.VisitorEto;

/**
 * Use case implementation for modifying and deleting QueueDetails
 */
@Named
@Validated
@Transactional
public class UcManageQueueDetailImpl extends AbstractQueueDetailUc implements UcManageQueueDetail {

  @Inject
  Visitormanagement visitorManagement;

  @Inject
  Eventmanagement eventManagement;

  /**
   * Logger instance.
   */
  private static final Logger LOG = LoggerFactory.getLogger(UcManageQueueDetailImpl.class);

  @Override
  public boolean deleteQueueDetail(long queueDetailId) throws Exception {

    QueueDetailEntity queueDetail = getQueueDetailRepository().find(queueDetailId);
    EventEto event = getEvent(queueDetail.getEventId());
    decreaseCount(event);
    setEstimatedTime(event);
    getQueueDetailRepository().delete(queueDetail);

    LOG.debug("The queueDetail with id '{}' has been deleted.", queueDetailId);
    return true;
  }

  @Override
  public QueueDetailEto saveQueueDetail(QueueDetailEto queueDetail) {

    Objects.requireNonNull(queueDetail, "queueDetail");

    QueueDetailEntity queueDetailEntity = getBeanMapper().map(queueDetail, QueueDetailEntity.class);

    // initialize, validate queueDetailEntity here if necessary
    QueueDetailEntity resultEntity = getQueueDetailRepository().save(queueDetailEntity);
    LOG.debug("QueueDetail with id '{}' has been created.", resultEntity.getId());
    return getBeanMapper().map(resultEntity, QueueDetailEto.class);
  }

  @Override
  public QueueDetailEto joinTheQueue(QueueDetailSearchCriteriaTo criteria) throws Exception {

    VisitorEto visitorEntity = getVisitor(criteria.getVisitorId());
    EventEto event = getEvent(criteria.getEventId());

    Page<QueueDetailEntity> queueDetail = getQueueDetailRepository().findByCriteria(criteria);
    if (queueDetail.getContent().isEmpty()) {
      QueueDetailEntity newQueueDetail = createQueueDetail(visitorEntity, event);
      QueueDetailEntity queueDetailResult = getQueueDetailRepository().save(newQueueDetail);
      setEstimatedTime(event);
      return getBeanMapper().map(queueDetailResult, QueueDetailEto.class);
    } else {
      return getQueueDetail(queueDetail.getContent().get(0).getId());
    }
  }

  @Override
  public String getQueueNumber(EventEto event) {

    Page<QueueDetailEntity> queueDetails = getQueueDetails(event.getId());
    event.setVisitorsCount(queueDetails.getNumberOfElements() + 1);
    this.eventManagement.saveEvent(event);
    if (queueDetails.getContent().isEmpty()) {
      return "Q" + event.getId() + "01";
    } else {
      String queueNumber = queueDetails.getContent().get(queueDetails.getNumberOfElements() - 1).getQueueNumber();
      char[] numbers = new char[queueNumber.length()];
      for (int i = 0; i < queueNumber.length(); i++) {
        numbers[i] = queueNumber.charAt(i);
      }
      numbers[queueNumber.length() - 1] = (char) (numbers[queueNumber.length() - 1] + 1);
      String newQueueNumber = new String(numbers);

      // check logic again
      return newQueueNumber;
    }
  }

  // make it void
  @Override
  public void setEstimatedTime(EventEto event) {

    List<QueueDetailEntity> queueDetailsList = getQueueDetails(event.getId()).getContent();
    if (queueDetailsList == null) {
      return;
    }
    long time = 0;
    long minAttentionTime = event.getAttentionTime() * 60;
    int count = 0;
    for (QueueDetailEntity queueEntity : queueDetailsList) {
      if (count == 0) {
        queueEntity.setEstimatedTime(Timestamp.from(Instant.now()));
        getQueueDetailRepository().save(queueEntity);
        time = queueEntity.getAttentionTime().getTime();
      } else {
        if (Timestamp.from(Instant.now()).compareTo(queueEntity.getAttentionTime()) < 0) {
          queueEntity.setEstimatedTime(new Timestamp(time + (minAttentionTime * count - 1)));
          queueEntity.setAttentionTime(new Timestamp(time + (minAttentionTime * count - 1) + minAttentionTime));
          getQueueDetailRepository().save(queueEntity);
          count = count + 1;
        }
      }
    }
  }

  /**
   * @param event
   */
  public void decreaseCount(EventEto event) {

    int count = event.getVisitorsCount();
    if (count > 0) {
      count--;
    }
    event.setVisitorsCount(count);
    this.eventManagement.saveEvent(event);

  }

  @Override
  public VisitorEto getVisitor(long visitorId) throws Exception {

    VisitorEto visitorEntity = this.visitorManagement.findVisitor(visitorId);
    if (visitorEntity == null) {
      throw new Exception("Visitor not found");
    }
    return visitorEntity;

  }

  @Override
  public EventEto getEvent(long eventId) throws Exception {

    EventEto event = this.eventManagement.findEvent(eventId);
    if (event == null) {
      throw new Exception("Event not found");
    }
    return event;
  }

  @Override
  public QueueDetailEto getQueueDetail(long queueDetailId) throws Exception {

    QueueDetailEntity queueDetail = getQueueDetailRepository().find(queueDetailId);
    if (queueDetail == null) {
      throw new Exception("QueueDetail not found");
    }
    return getBeanMapper().map(queueDetail, QueueDetailEto.class);
  }

  /**
   * @param eventId
   * @return Page<QueueDetailEntity>
   */
  Page<QueueDetailEntity> getQueueDetails(long eventId) {

    QueueDetailSearchCriteriaTo criteria = new QueueDetailSearchCriteriaTo();
    criteria.setEventId(eventId);
    return getQueueDetailRepository().findByCriteria(criteria);

  }

  /**
   * @param visitor
   * @param event
   * @return QueueDetailEntity
   */
  public QueueDetailEntity createQueueDetail(VisitorEto visitor, EventEto event) {

    QueueDetailEntity newQueueDetail = new QueueDetailEntity();

    newQueueDetail.setQueueNumber(getQueueNumber(event));
    newQueueDetail.setCreationTime(Timestamp.from(Instant.now()));
    newQueueDetail.setStartTime(event.getStartDate());
    newQueueDetail.setEndTime(event.getEndDate());
    long time = Timestamp.from(Instant.now()).getTime();
    long minutes = event.getAttentionTime() * 60;
    newQueueDetail.setEstimatedTime(new Timestamp(time + (minutes)));
    newQueueDetail.setAttentionTime(new Timestamp(time + (minutes)));
    newQueueDetail.setEvent(getBeanMapper().map(event, EventEntity.class));
    newQueueDetail.setVisitor(getBeanMapper().map(visitor, VisitorEntity.class));
    return newQueueDetail;
  }

}
