package com.devonfw.application.jtqj.queuedetailmanagement.logic.impl.usecase;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.ArrayList;
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
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailCto;
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
  public boolean deleteQueueDetail(long queueDetailId) {

    QueueDetailEntity queueDetail = getQueueDetailRepository().find(queueDetailId);
    EventEto event = this.eventManagement.findEvent(queueDetail.getEventId());
    int count = event.getVisitorsCount();
    if (count > 0) {
      count = count - 1;
    }
    event.setVisitorsCount(count);
    this.eventManagement.saveEvent(event);
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
  public QueueDetailCto joinTheQueue(QueueDetailSearchCriteriaTo criteria) {

    VisitorEto visitorEntity = this.visitorManagement.findVisitor(criteria.getVisitorId());
    EventEto event = this.eventManagement.findEvent(criteria.getEventId());

    Page<QueueDetailEntity> queueDetail = getQueueDetailRepository().findByCriteria(criteria);

    if (queueDetail.getContent().isEmpty()) {

      QueueDetailEntity newQueueDetail = new QueueDetailEntity();
      newQueueDetail.setQueueNumber(getQueueNumber(criteria.getEventId(), event));

      newQueueDetail.setCreationTime(Timestamp.from(Instant.now()));
      newQueueDetail.setStartTime(event.getStartDate());
      newQueueDetail.setEndTime(event.getEndDate());
      newQueueDetail.setEvent(getBeanMapper().map(event, EventEntity.class));
      newQueueDetail.setVisitor(getBeanMapper().map(visitorEntity, VisitorEntity.class));
      long time = Timestamp.from(Instant.now()).getTime();
      long minutes = event.getAttentionTime() * 60;
      newQueueDetail.setEstimatedTime(new Timestamp(time + (minutes)));
      newQueueDetail.setAttentionTime(new Timestamp(time + (minutes)));
      QueueDetailEntity queueDetailResult = getQueueDetailRepository().save(newQueueDetail);
      setEstimatedTime(event);
      QueueDetailCto queueCto = new QueueDetailCto();
      queueCto.setEvent(event);
      queueCto.setVisitor(visitorEntity);
      queueCto.setQueueDetail(
          getBeanMapper().map(getQueueDetailRepository().find(newQueueDetail.getId()), QueueDetailEto.class));
      return queueCto;
    }

    else {
      QueueDetailEntity entity = getQueueDetailRepository().find(queueDetail.getContent().get(0).getId());
      QueueDetailCto cto = new QueueDetailCto();
      cto.setQueueDetail(getBeanMapper().map(entity, QueueDetailEto.class));
      cto.setVisitor(getBeanMapper().map(entity.getVisitor(), VisitorEto.class));
      cto.setEvent(getBeanMapper().map(entity.getEvent(), EventEto.class));

      return cto;
    }
  }

  @Override
  public String getQueueNumber(long eventId, EventEto event) {

    QueueDetailSearchCriteriaTo criteria = new QueueDetailSearchCriteriaTo();
    criteria.setEventId(eventId);
    Page<QueueDetailEntity> queueDetails = getQueueDetailRepository().findByCriteria(criteria);
    event.setVisitorsCount(queueDetails.getNumberOfElements() + 1);
    this.eventManagement.saveEvent(event);

    String queueNumber;
    if (queueDetails.getContent().isEmpty()) {
      queueNumber = "Q" + eventId + "01";
      return queueNumber;
    } else {
      queueNumber = queueDetails.getContent().get(queueDetails.getNumberOfElements() - 1).getQueueNumber();
      char[] numbers = new char[queueNumber.length()];
      for (int i = 0; i < queueNumber.length(); i++) {
        numbers[i] = queueNumber.charAt(i);
      }

      int lastNumber = numbers[queueNumber.length() - 1];
      lastNumber = lastNumber + 1;
      numbers[queueNumber.length() - 1] = (char) lastNumber;
      String newQueueNumber = new String(numbers);
      return newQueueNumber;
    }

  }

  @Override
  public boolean setEstimatedTime(EventEto event) {

    long time = Timestamp.from(Instant.now()).getTime();
    Timestamp currentTime = Timestamp.from(Instant.now());
    int checkTime;
    long minutes;
    int count;
    minutes = event.getAttentionTime() * 60;// 55000......(minutes * 1000 * 60)
    count = 0;
    QueueDetailSearchCriteriaTo criteria = new QueueDetailSearchCriteriaTo();
    criteria.setEventId(event.getId());
    Page<QueueDetailEntity> queueDetails = getQueueDetailRepository().findByCriteria(criteria);
    List<QueueDetailEntity> queueDetailsList = new ArrayList<>();
    queueDetailsList = queueDetails.getContent();

    if (queueDetailsList != null) {
      for (QueueDetailEntity queueEntity : queueDetailsList) {
        if (count == 0) {
          queueEntity.setEstimatedTime(currentTime);
          getQueueDetailRepository().save(queueEntity);
          time = queueEntity.getAttentionTime().getTime();
        } else {
          checkTime = currentTime.compareTo(queueEntity.getAttentionTime());
          if (checkTime < 0) {
            queueEntity.setEstimatedTime(new Timestamp(time + (minutes * count - 1)));
            queueEntity.setAttentionTime(new Timestamp(time + (minutes * count - 1) + minutes));
            getQueueDetailRepository().save(queueEntity);
            count = count + 1;
          }
        }
      }
    }
    return true;
  }
}
