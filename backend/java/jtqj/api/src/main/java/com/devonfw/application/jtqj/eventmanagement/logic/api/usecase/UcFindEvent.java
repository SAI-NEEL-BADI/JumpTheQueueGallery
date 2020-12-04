package com.devonfw.application.jtqj.eventmanagement.logic.api.usecase;

import java.util.List;

import org.springframework.data.domain.Page;

import com.devonfw.application.jtqj.eventmanagement.logic.api.to.EventEto;
import com.devonfw.application.jtqj.eventmanagement.logic.api.to.EventSearchCriteriaTo;

public interface UcFindEvent {

  /**
   * Returns a Event by its id 'id'.
   *
   * @param id The id 'id' of the Event.
   * @return The {@link EventEto} with id 'id'
   */
  EventEto findEvent(long id);

  /**
   * Returns a paginated list of Events matching the search criteria.
   *
   * @param criteria the {@link EventSearchCriteriaTo}.
   * @return the {@link List} of matching {@link EventEto}s.
   */
  Page<EventEto> findEvents(EventSearchCriteriaTo criteria);

}
