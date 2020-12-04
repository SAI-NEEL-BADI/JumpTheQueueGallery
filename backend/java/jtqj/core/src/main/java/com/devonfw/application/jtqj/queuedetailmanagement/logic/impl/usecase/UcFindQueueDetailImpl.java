package com.devonfw.application.jtqj.queuedetailmanagement.logic.impl.usecase;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.inject.Named;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;

import com.devonfw.application.jtqj.eventmanagement.logic.api.to.EventEto;
import com.devonfw.application.jtqj.queuedetailmanagement.dataaccess.api.QueueDetailEntity;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailCto;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailEto;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailSearchCriteriaTo;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.usecase.UcFindQueueDetail;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.base.usecase.AbstractQueueDetailUc;
import com.devonfw.application.jtqj.visitormanagement.logic.api.to.VisitorEto;

/**
 * Use case implementation for searching, filtering and getting QueueDetails
 */
@Named
@Validated
@Transactional
public class UcFindQueueDetailImpl extends AbstractQueueDetailUc implements UcFindQueueDetail {

  /**
   * Logger instance.
   */
  private static final Logger LOG = LoggerFactory.getLogger(UcFindQueueDetailImpl.class);

  @Override
  public QueueDetailEto findQueueDetail(long id) {

    LOG.debug("Get QueueDetail with id {} from database.", id);
    Optional<QueueDetailEntity> foundEntity = getQueueDetailRepository().findById(id);
    if (foundEntity.isPresent())
      return getBeanMapper().map(foundEntity.get(), QueueDetailEto.class);
    else
      return null;
  }

  @Override
  public Page<QueueDetailEto> findQueueDetails(QueueDetailSearchCriteriaTo criteria) {

    Page<QueueDetailEntity> queuedetails = getQueueDetailRepository().findByCriteria(criteria);
    return mapPaginatedEntityList(queuedetails, QueueDetailEto.class);
  }

  @Override
  public QueueDetailCto findQueueDetailCto(long id) {

    LOG.debug("Get QueueDetailCto with id {} from database.", id);
    QueueDetailEntity entity = getQueueDetailRepository().find(id);
    QueueDetailCto cto = new QueueDetailCto();
    cto.setQueueDetail(getBeanMapper().map(entity, QueueDetailEto.class));
    cto.setVisitor(getBeanMapper().map(entity.getVisitor(), VisitorEto.class));
    cto.setEvent(getBeanMapper().map(entity.getEvent(), EventEto.class));

    return cto;
  }

  @Override
  public Page<QueueDetailCto> findQueueDetailCtos(QueueDetailSearchCriteriaTo criteria) {

    Page<QueueDetailEntity> queuedetails = getQueueDetailRepository().findByCriteria(criteria);
    List<QueueDetailCto> ctos = new ArrayList<>();
    for (QueueDetailEntity entity : queuedetails.getContent()) {
      QueueDetailCto cto = new QueueDetailCto();
      cto.setQueueDetail(getBeanMapper().map(entity, QueueDetailEto.class));
      cto.setVisitor(getBeanMapper().map(entity.getVisitor(), VisitorEto.class));
      cto.setEvent(getBeanMapper().map(entity.getEvent(), EventEto.class));
      ctos.add(cto);
    }
    Pageable pagResultTo = PageRequest.of(criteria.getPageable().getPageNumber(), criteria.getPageable().getPageSize());

    return new PageImpl<>(ctos, pagResultTo, queuedetails.getTotalElements());
  }

}
