package com.devonfw.application.jtqj.eventmanagement.logic.impl;

import javax.inject.Inject;
import javax.inject.Named;

import org.springframework.data.domain.Page;

import com.devonfw.application.jtqj.eventmanagement.logic.api.Eventmanagement;
import com.devonfw.application.jtqj.eventmanagement.logic.api.to.EventEto;
import com.devonfw.application.jtqj.eventmanagement.logic.api.to.EventSearchCriteriaTo;
import com.devonfw.application.jtqj.eventmanagement.logic.api.usecase.UcFindEvent;
import com.devonfw.application.jtqj.eventmanagement.logic.api.usecase.UcManageEvent;
import com.devonfw.application.jtqj.general.logic.base.AbstractComponentFacade;

/**
 * Implementation of component interface of eventmanagement
 */
@Named
public class EventmanagementImpl extends AbstractComponentFacade implements Eventmanagement {

  @Inject
  private UcFindEvent ucFindEvent;

  @Inject
  private UcManageEvent ucManageEvent;

  @Override
  public EventEto findEvent(long id) {

    return this.ucFindEvent.findEvent(id);
  }

  @Override
  public Page<EventEto> findEvents(EventSearchCriteriaTo criteria) {

    return this.ucFindEvent.findEvents(criteria);
  }

  @Override
  public EventEto saveEvent(EventEto event) {

    return this.ucManageEvent.saveEvent(event);
  }

  @Override
  public boolean deleteEvent(long id) {

    return this.ucManageEvent.deleteEvent(id);
  }
}
