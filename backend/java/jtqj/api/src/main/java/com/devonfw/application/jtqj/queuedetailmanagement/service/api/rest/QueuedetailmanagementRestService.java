package com.devonfw.application.jtqj.queuedetailmanagement.service.api.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.data.domain.Page;

import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.Queuedetailmanagement;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailCto;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailEto;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailSearchCriteriaTo;

/**
 * The service interface for REST calls in order to execute the logic of component {@link Queuedetailmanagement}.
 */
@Path("/queuedetailmanagement/v1")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public interface QueuedetailmanagementRestService {

  /**
   * Delegates to {@link Queuedetailmanagement#findQueueDetail}.
   *
   * @param id the ID of the {@link QueueDetailEto}
   * @return the {@link QueueDetailEto}
   */
  @GET
  @Path("/queuedetail/{id}/")
  public QueueDetailEto getQueueDetail(@PathParam("id") long id);

  /**
   * Delegates to {@link Queuedetailmanagement#saveQueueDetail}.
   *
   * @param queuedetail the {@link QueueDetailEto} to be saved
   * @return the recently created {@link QueueDetailEto}
   */
  @POST
  @Path("/queuedetail/")
  public QueueDetailEto saveQueueDetail(QueueDetailEto queuedetail);

  /**
   * Delegates to {@link Queuedetailmanagement#deleteQueueDetail}.
   *
   * @param id ID of the {@link QueueDetailEto} to be deleted
   * @throws Exception
   */
  @DELETE
  @Path("/queuedetail/{id}/")
  public void deleteQueueDetail(@PathParam("id") long id) throws Exception;

  /**
   * Delegates to {@link Queuedetailmanagement#findQueueDetailEtos}.
   *
   * @param searchCriteriaTo the pagination and search criteria to be used for finding queuedetails.
   * @return the {@link Page list} of matching {@link QueueDetailEto}s.
   */
  @Path("/queuedetail/search")
  @POST
  public Page<QueueDetailEto> findQueueDetails(QueueDetailSearchCriteriaTo searchCriteriaTo);

  /**
   * Delegates to {@link Queuedetailmanagement#findQueueDetailCto}.
   *
   * @param id the ID of the {@link QueueDetailCto}
   * @return the {@link QueueDetailCto}
   */
  @GET
  @Path("/queuedetail/cto/{id}/")
  public QueueDetailCto getQueueDetailCto(@PathParam("id") long id);

  /**
   * Delegates to {@link Queuedetailmanagement#findQueueDetailCtos}.
   *
   * @param searchCriteriaTo the pagination and search criteria to be used for finding queuedetails.
   * @return the {@link Page list} of matching {@link QueueDetailCto}s.
   */
  @Path("/queuedetail/cto/search")
  @POST
  public Page<QueueDetailCto> findQueueDetailCtos(QueueDetailSearchCriteriaTo searchCriteriaTo);

  /**
   * @param searchCriteriaTo
   * @return
   */
  /**
   * Delegates to {@link Queuedetailmanagement#joinTheQueue}.
   *
   * @param searchCriteriaTo the pagination and search criteria to be used for finding queuedetails.
   * @return the {@link Page list} of matching {@link QueueDetailCto}s.
   * @throws Exception
   */
  @Path("/queuedetail/jointhequeue")
  @POST
  public QueueDetailEto joinTheQueue(QueueDetailSearchCriteriaTo searchCriteriaTo) throws Exception;
}
