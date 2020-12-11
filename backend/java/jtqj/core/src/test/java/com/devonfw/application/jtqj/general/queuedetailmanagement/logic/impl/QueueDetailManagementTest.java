package com.devonfw.application.jtqj.general.queuedetailmanagement.logic.impl;

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
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.Queuedetailmanagement;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailEto;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailSearchCriteriaTo;
import com.devonfw.module.test.common.base.ComponentTest;

/**
 * @author sabadi
 *
 */
@SpringBootTest(classes = SpringBootApp.class)
public class QueueDetailManagementTest extends ComponentTest {

  @Inject
  private Queuedetailmanagement queuedetailmanagement;

  @Test
  public void saveQueuedetailTest() {

    QueueDetailEto queuedetailEto = new QueueDetailEto();
    queuedetailEto.setQueueNumber("Q002");
    queuedetailEto.setCreationTime(Timestamp.from(Instant.now()));
    queuedetailEto.setStartTime(Timestamp.from(Instant.now()));
    queuedetailEto.setEndTime(Timestamp.from(Instant.now()));
    queuedetailEto.setVisitorId((long) 2);
    queuedetailEto.setEventId((long) 1);
    queuedetailEto.setEstimatedTime(Timestamp.from(Instant.now()));
    queuedetailEto.setAttentionTime(Timestamp.from(Instant.now()));
    QueueDetailEto queuedetailEtoResult = this.queuedetailmanagement.saveQueueDetail(queuedetailEto);

    assertThat(queuedetailEtoResult.getId()).isNotNull();
    assertThat(queuedetailEtoResult.getQueueNumber()).isEqualTo("Q002");

  }

  @Test
  public void findQueueDetailsTest() {

    QueueDetailSearchCriteriaTo criteria = new QueueDetailSearchCriteriaTo();
    Pageable pageable = PageRequest.of(0, 100);
    criteria.setPageable(pageable);
    Page<QueueDetailEto> result = this.queuedetailmanagement.findQueueDetails(criteria);

    assertThat(result).isNotNull();
  }

  @Test
  public void joinTheQueueTest() throws Exception {

    long id = 1;
    QueueDetailSearchCriteriaTo criteria = new QueueDetailSearchCriteriaTo();
    criteria.setVisitorId(id);
    criteria.setEventId(id);
    QueueDetailEto result = this.queuedetailmanagement.joinTheQueue(criteria);
    assertEquals(result.getVisitorId(), criteria.getVisitorId());
    assertEquals(result.getEventId(), criteria.getEventId());
    assertThat(result.getId()).isNotNull();
  }

  /**
   * #assertThat(queueDetail.getId()).isNotNull(); #assertEquals(queueDetail.getId(), 1);
   */
  @Test
  public void findQueueDetailTest() {

    long id = 1;
    QueueDetailEto queueDetail = new QueueDetailEto();
    queueDetail = this.queuedetailmanagement.findQueueDetail(id);
    assertThat(queueDetail.getId()).isNotNull();
    assertEquals(queueDetail.getId(), id);
  }
}
