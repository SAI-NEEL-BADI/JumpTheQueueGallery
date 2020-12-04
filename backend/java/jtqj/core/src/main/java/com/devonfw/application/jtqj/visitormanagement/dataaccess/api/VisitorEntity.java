package com.devonfw.application.jtqj.visitormanagement.dataaccess.api;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.devonfw.application.jtqj.general.dataaccess.api.ApplicationPersistenceEntity;
import com.devonfw.application.jtqj.visitormanagement.common.api.Visitor;

/**
 * @author sabadi
 */
@Entity
@Table(name = "Visitor")
public class VisitorEntity extends ApplicationPersistenceEntity implements Visitor {

  private String username;

  private String name;

  private String phoneNumber;

  private String password;

  private Boolean acceptedCommercial;

  private Boolean acceptedTerms;

  private Boolean userType;

  private static final long serialVersionUID = 1L;

  /**
   * @return username
   */
  public String getUsername() {

    return this.username;
  }

  /**
   * @param username new value of {@link #getusername}.
   */
  public void setUsername(String username) {

    this.username = username;
  }

  /**
   * @return name
   */
  public String getName() {

    return this.name;
  }

  /**
   * @param name new value of {@link #getname}.
   */
  public void setName(String name) {

    this.name = name;
  }

  /**
   * @return phoneNumber
   */
  public String getPhoneNumber() {

    return this.phoneNumber;
  }

  /**
   * @param phoneNumber new value of {@link #getphoneNumber}.
   */
  public void setPhoneNumber(String phoneNumber) {

    this.phoneNumber = phoneNumber;
  }

  /**
   * @return password
   */
  public String getPassword() {

    return this.password;
  }

  /**
   * @param password new value of {@link #getpassword}.
   */
  public void setPassword(String password) {

    this.password = password;
  }

  /**
   * @return acceptedCommercial
   */
  public Boolean getAcceptedCommercial() {

    return this.acceptedCommercial;
  }

  /**
   * @param acceptedCommercial new value of {@link #getacceptedCommercial}.
   */
  public void setAcceptedCommercial(Boolean acceptedCommercial) {

    this.acceptedCommercial = acceptedCommercial;
  }

  /**
   * @return acceptedTerms
   */
  public Boolean getAcceptedTerms() {

    return this.acceptedTerms;
  }

  /**
   * @param acceptedTerms new value of {@link #getacceptedTerms}.
   */
  public void setAcceptedTerms(Boolean acceptedTerms) {

    this.acceptedTerms = acceptedTerms;
  }

  /**
   * @return userType
   */
  public Boolean getUserType() {

    return this.userType;
  }

  /**
   * @param userType new value of {@link #getuserType}.
   */
  public void setUserType(Boolean userType) {

    this.userType = userType;
  }

}
