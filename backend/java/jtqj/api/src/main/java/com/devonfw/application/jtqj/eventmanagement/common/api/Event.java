package com.devonfw.application.jtqj.eventmanagement.common.api;

import java.sql.Timestamp;

import com.devonfw.application.jtqj.general.common.api.ApplicationEntity;

public interface Event extends ApplicationEntity {

  /**
   * @return eventNameId
   */

  public String getEventName();

  /**
   * @param eventName setter for eventName attribute
   */

  public void setEventName(String eventName);

  /**
   * @return startDateId
   */

  public Timestamp getStartDate();

  /**
   * @param startDate setter for startDate attribute
   */

  public void setStartDate(Timestamp startDate);

  /**
   * @return endDateId
   */

  public Timestamp getEndDate();

  /**
   * @param endDate setter for endDate attribute
   */

  public void setEndDate(Timestamp endDate);

  /**
   * @return locationId
   */

  public String getLocation();

  /**
   * @param location setter for location attribute
   */

  public void setLocation(String location);

  /**
   * @return descriptionId
   */

  public String getDescription();

  /**
   * @param description setter for description attribute
   */

  public void setDescription(String description);

  /**
   * @return logoId
   */

  public String getLogo();

  /**
   * @param logo setter for logo attribute
   */

  public void setLogo(String logo);

  /**
   * @return attentionTimeId
   */

  public long getAttentionTime();

  /**
   * @param attentionTime setter for attentionTime attribute
   */

  public void setAttentionTime(long attentionTime);

  /**
   * @return visitorsCountId
   */

  public int getVisitorsCount();

  /**
   * @param visitorsCount setter for visitorsCount attribute
   */

  public void setVisitorsCount(int visitorsCount);

}
