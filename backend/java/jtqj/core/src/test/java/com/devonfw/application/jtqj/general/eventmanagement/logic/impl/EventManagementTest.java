package com.devonfw.application.jtqj.general.eventmanagement.logic.impl;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.sql.Timestamp;
import java.time.Instant;

import javax.inject.Inject;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import com.devonfw.application.jtqj.SpringBootApp;
import com.devonfw.application.jtqj.eventmanagement.logic.api.Eventmanagement;
import com.devonfw.application.jtqj.eventmanagement.logic.api.to.EventEto;
import com.devonfw.application.jtqj.eventmanagement.logic.api.to.EventSearchCriteriaTo;
import com.devonfw.module.test.common.base.ComponentTest;

/**
 * @author sabadi
 *
 */
@SpringBootTest(classes = SpringBootApp.class)
public class EventManagementTest extends ComponentTest {

  @Inject
  private Eventmanagement eventmanagement;

  @Test
  public void saveEventTest() {

    EventEto eventEto = new EventEto();
    eventEto.setEventName("Snacks");
    eventEto.setStartDate(Timestamp.from(Instant.now()));
    eventEto.setEndDate(Timestamp.from(Instant.now()));
    eventEto.setLocation("bangalore");
    eventEto.setDescription("food festival");
    eventEto.setLogo(null);
    eventEto.setAttentionTime(50000);
    eventEto.setVisitorsCount(1);

    EventEto eventEtoResult = this.eventmanagement.saveEvent(eventEto);

    assertThat(eventEtoResult.getId()).isNotNull();
    assertThat(eventEtoResult.getEventName()).isEqualTo("Snacks");

  }

  @Test
  public void findEventsTest() {

    EventSearchCriteriaTo criteria = new EventSearchCriteriaTo();
    Pageable pageable = PageRequest.of(0, 100);
    criteria.setPageable(pageable);
    Page<EventEto> result = this.eventmanagement.findEvents(criteria);

    assertThat(result).isNotNull();
  }

  @Test
  public void findEventTest() {

    long id = 1;
    EventEto result = this.eventmanagement.findEvent(id);
    assertEquals(result.getId(), id);
    assertThat(result.getId()).isNotNull();
  }
}
