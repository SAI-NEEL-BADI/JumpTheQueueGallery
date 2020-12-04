package com.devonfw.application.jtqj.eventmanagement.logic.api.to;

import java.sql.Timestamp;

import com.devonfw.application.jtqj.eventmanagement.common.api.Event;
import com.devonfw.module.basic.common.api.to.AbstractEto;

/**
 * Entity transport object of Event
 */
public class EventEto extends AbstractEto implements Event {

  private static final long serialVersionUID = 1L;

  private String eventName;

  private Timestamp startDate;

  private Timestamp endDate;

  private String location;

  private String description;

  private String logo;

  private long attentionTime;

  private int visitorsCount;

  @Override
  public String getEventName() {

    return this.eventName;
  }

  @Override
  public void setEventName(String eventName) {

    this.eventName = eventName;
  }

  @Override
  public Timestamp getStartDate() {

    return this.startDate;
  }

  @Override
  public void setStartDate(Timestamp startDate) {

    this.startDate = startDate;
  }

  @Override
  public Timestamp getEndDate() {

    return this.endDate;
  }

  @Override
  public void setEndDate(Timestamp endDate) {

    this.endDate = endDate;
  }

  @Override
  public String getLocation() {

    return this.location;
  }

  @Override
  public void setLocation(String location) {

    this.location = location;
  }

  @Override
  public String getDescription() {

    return this.description;
  }

  @Override
  public void setDescription(String description) {

    this.description = description;
  }

  @Override
  public String getLogo() {

    return this.logo;
  }

  @Override
  public void setLogo(String logo) {

    this.logo = logo;
  }

  @Override
  public long getAttentionTime() {

    return this.attentionTime;
  }

  @Override
  public void setAttentionTime(long attentionTime) {

    this.attentionTime = attentionTime;
  }

  @Override
  public int getVisitorsCount() {

    return this.visitorsCount;
  }

  @Override
  public void setVisitorsCount(int visitorsCount) {

    this.visitorsCount = visitorsCount;
  }

  @Override
  public int hashCode() {

    final int prime = 31;
    int result = super.hashCode();
    result = prime * result + ((this.eventName == null) ? 0 : this.eventName.hashCode());
    result = prime * result + ((this.startDate == null) ? 0 : this.startDate.hashCode());
    result = prime * result + ((this.endDate == null) ? 0 : this.endDate.hashCode());
    result = prime * result + ((this.location == null) ? 0 : this.location.hashCode());
    result = prime * result + ((this.description == null) ? 0 : this.description.hashCode());
    result = prime * result + ((this.logo == null) ? 0 : this.logo.hashCode());
    result = prime * result + ((Long) this.attentionTime).hashCode();
    result = prime * result + ((Integer) this.visitorsCount).hashCode();
    return result;
  }

  @Override
  public boolean equals(Object obj) {

    if (this == obj) {
      return true;
    }
    if (obj == null) {
      return false;
    }
    // class check will be done by super type EntityTo!
    if (!super.equals(obj)) {
      return false;
    }
    EventEto other = (EventEto) obj;
    if (this.eventName == null) {
      if (other.eventName != null) {
        return false;
      }
    } else if (!this.eventName.equals(other.eventName)) {
      return false;
    }
    if (this.startDate == null) {
      if (other.startDate != null) {
        return false;
      }
    } else if (!this.startDate.equals(other.startDate)) {
      return false;
    }
    if (this.endDate == null) {
      if (other.endDate != null) {
        return false;
      }
    } else if (!this.endDate.equals(other.endDate)) {
      return false;
    }
    if (this.location == null) {
      if (other.location != null) {
        return false;
      }
    } else if (!this.location.equals(other.location)) {
      return false;
    }
    if (this.description == null) {
      if (other.description != null) {
        return false;
      }
    } else if (!this.description.equals(other.description)) {
      return false;
    }
    if (this.logo == null) {
      if (other.logo != null) {
        return false;
      }
    } else if (!this.logo.equals(other.logo)) {
      return false;
    }
    if (this.attentionTime != other.attentionTime) {
      return false;
    }
    if (this.visitorsCount != other.visitorsCount) {
      return false;
    }
    return true;
  }
}
