package com.devonfw.application.jtqj.eventmanagement.logic.api.to;

import java.sql.Timestamp;

import com.devonfw.application.jtqj.general.common.api.to.AbstractSearchCriteriaTo;
import com.devonfw.module.basic.common.api.query.StringSearchConfigTo;

/**
 * {@link SearchCriteriaTo} to find instances of {@link com.devonfw.application.jtqj.eventmanagement.common.api.Event}s.
 */
public class EventSearchCriteriaTo extends AbstractSearchCriteriaTo {

  private static final long serialVersionUID = 1L;

  private String eventName;

  private Timestamp startDate;

  private Timestamp endDate;

  private String location;

  private String description;

  private String logo;

  private Long attentionTime;

  private Integer visitorsCount;

  private StringSearchConfigTo eventNameOption;

  private StringSearchConfigTo locationOption;

  private StringSearchConfigTo descriptionOption;

  private StringSearchConfigTo logoOption;

  /**
   * @return eventNameId
   */

  public String getEventName() {

    return this.eventName;
  }

  /**
   * @param eventName setter for eventName attribute
   */

  public void setEventName(String eventName) {

    this.eventName = eventName;
  }

  /**
   * @return startDateId
   */

  public Timestamp getStartDate() {

    return this.startDate;
  }

  /**
   * @param startDate setter for startDate attribute
   */

  public void setStartDate(Timestamp startDate) {

    this.startDate = startDate;
  }

  /**
   * @return endDateId
   */

  public Timestamp getEndDate() {

    return this.endDate;
  }

  /**
   * @param endDate setter for endDate attribute
   */

  public void setEndDate(Timestamp endDate) {

    this.endDate = endDate;
  }

  /**
   * @return locationId
   */

  public String getLocation() {

    return this.location;
  }

  /**
   * @param location setter for location attribute
   */

  public void setLocation(String location) {

    this.location = location;
  }

  /**
   * @return descriptionId
   */

  public String getDescription() {

    return this.description;
  }

  /**
   * @param description setter for description attribute
   */

  public void setDescription(String description) {

    this.description = description;
  }

  /**
   * @return logoId
   */

  public String getLogo() {

    return this.logo;
  }

  /**
   * @param logo setter for logo attribute
   */

  public void setLogo(String logo) {

    this.logo = logo;
  }

  /**
   * @return attentionTimeId
   */

  public Long getAttentionTime() {

    return this.attentionTime;
  }

  /**
   * @param attentionTime setter for attentionTime attribute
   */

  public void setAttentionTime(Long attentionTime) {

    this.attentionTime = attentionTime;
  }

  /**
   * @return visitorsCountId
   */

  public Integer getVisitorsCount() {

    return this.visitorsCount;
  }

  /**
   * @param visitorsCount setter for visitorsCount attribute
   */

  public void setVisitorsCount(Integer visitorsCount) {

    this.visitorsCount = visitorsCount;
  }

  /**
   * @return the {@link StringSearchConfigTo} used to search for {@link #getEventName() eventName}.
   */
  public StringSearchConfigTo getEventNameOption() {

    return this.eventNameOption;
  }

  /**
   * @param eventNameOption new value of {@link #getEventNameOption()}.
   */
  public void setEventNameOption(StringSearchConfigTo eventNameOption) {

    this.eventNameOption = eventNameOption;
  }

  /**
   * @return the {@link StringSearchConfigTo} used to search for {@link #getLocation() location}.
   */
  public StringSearchConfigTo getLocationOption() {

    return this.locationOption;
  }

  /**
   * @param locationOption new value of {@link #getLocationOption()}.
   */
  public void setLocationOption(StringSearchConfigTo locationOption) {

    this.locationOption = locationOption;
  }

  /**
   * @return the {@link StringSearchConfigTo} used to search for {@link #getDescription() description}.
   */
  public StringSearchConfigTo getDescriptionOption() {

    return this.descriptionOption;
  }

  /**
   * @param descriptionOption new value of {@link #getDescriptionOption()}.
   */
  public void setDescriptionOption(StringSearchConfigTo descriptionOption) {

    this.descriptionOption = descriptionOption;
  }

  /**
   * @return the {@link StringSearchConfigTo} used to search for {@link #getLogo() logo}.
   */
  public StringSearchConfigTo getLogoOption() {

    return this.logoOption;
  }

  /**
   * @param logoOption new value of {@link #getLogoOption()}.
   */
  public void setLogoOption(StringSearchConfigTo logoOption) {

    this.logoOption = logoOption;
  }

}
