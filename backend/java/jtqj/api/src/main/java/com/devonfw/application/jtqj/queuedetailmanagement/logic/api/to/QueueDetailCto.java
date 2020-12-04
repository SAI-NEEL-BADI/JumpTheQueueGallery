package com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to;

import com.devonfw.application.jtqj.eventmanagement.logic.api.to.EventEto;
import com.devonfw.application.jtqj.visitormanagement.logic.api.to.VisitorEto;
import com.devonfw.module.basic.common.api.to.AbstractCto;

/**
 * Composite transport object of QueueDetail
 */
public class QueueDetailCto extends AbstractCto {

  private static final long serialVersionUID = 1L;

  private QueueDetailEto queueDetail;

  private VisitorEto visitor;

  private EventEto Event;

  public QueueDetailEto getQueueDetail() {

    return queueDetail;
  }

  public void setQueueDetail(QueueDetailEto queueDetail) {

    this.queueDetail = queueDetail;
  }

  public VisitorEto getVisitor() {

    return visitor;
  }

  public void setVisitor(VisitorEto visitor) {

    this.visitor = visitor;
  }

  public EventEto getEvent() {

    return Event;
  }

  public void setEvent(EventEto Event) {

    this.Event = Event;
  }

}
