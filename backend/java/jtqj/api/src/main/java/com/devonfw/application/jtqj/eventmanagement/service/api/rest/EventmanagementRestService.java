package com.devonfw.application.jtqj.eventmanagement.service.api.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.data.domain.Page;

import com.devonfw.application.jtqj.eventmanagement.logic.api.Eventmanagement;
import com.devonfw.application.jtqj.eventmanagement.logic.api.to.EventEto;
import com.devonfw.application.jtqj.eventmanagement.logic.api.to.EventSearchCriteriaTo;

/**
 * The service interface for REST calls in order to execute the logic of component {@link Eventmanagement}.
 */
@Path("/eventmanagement/v1")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public interface EventmanagementRestService {

  /**
   * Delegates to {@link Eventmanagement#findEvent}.
   *
   * @param id the ID of the {@link EventEto}
   * @return the {@link EventEto}
   */
  @GET
  @Path("/event/{id}/")
  public EventEto getEvent(@PathParam("id") long id);

  /**
   * Delegates to {@link Eventmanagement#saveEvent}.
   *
   * @param event the {@link EventEto} to be saved
   * @return the recently created {@link EventEto}
   */
  @POST
  @Path("/event/")
  public EventEto saveEvent(EventEto event);

  /**
   * Delegates to {@link Eventmanagement#deleteEvent}.
   *
   * @param id ID of the {@link EventEto} to be deleted
   */
  @DELETE
  @Path("/event/{id}/")
  public void deleteEvent(@PathParam("id") long id);

  /**
   * Delegates to {@link Eventmanagement#findEventEtos}.
   *
   * @param searchCriteriaTo the pagination and search criteria to be used for finding events.
   * @return the {@link Page list} of matching {@link EventEto}s.
   */
  @Path("/event/search")
  @POST
  public Page<EventEto> findEvents(EventSearchCriteriaTo searchCriteriaTo);

}