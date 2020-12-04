package com.devonfw.application.jtqj.eventmanagement.service.impl.rest;

import javax.inject.Inject;
import javax.inject.Named;

import org.springframework.data.domain.Page;

import com.devonfw.application.jtqj.eventmanagement.logic.api.Eventmanagement;
import com.devonfw.application.jtqj.eventmanagement.logic.api.to.EventEto;
import com.devonfw.application.jtqj.eventmanagement.logic.api.to.EventSearchCriteriaTo;
import com.devonfw.application.jtqj.eventmanagement.service.api.rest.EventmanagementRestService;

/**
 * The service implementation for REST calls in order to execute the logic of component {@link Eventmanagement}.
 */
@Named("EventmanagementRestService")
public class EventmanagementRestServiceImpl implements EventmanagementRestService {

  @Inject
  private Eventmanagement eventmanagement;

  @Override
  public EventEto getEvent(long id) {

    return this.eventmanagement.findEvent(id);
  }

  @Override
  public EventEto saveEvent(EventEto event) {

    return this.eventmanagement.saveEvent(event);
  }

  @Override
  public void deleteEvent(long id) {

    this.eventmanagement.deleteEvent(id);
  }

  @Override
  public Page<EventEto> findEvents(EventSearchCriteriaTo searchCriteriaTo) {

    return this.eventmanagement.findEvents(searchCriteriaTo);
  }
}