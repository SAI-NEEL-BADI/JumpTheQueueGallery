package com.devonfw.application.jtqj.eventmanagement.dataaccess.api.repo;

import static com.querydsl.core.alias.Alias.$;

import java.sql.Timestamp;
import java.util.Iterator;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;

import com.devonfw.application.jtqj.eventmanagement.dataaccess.api.EventEntity;
import com.devonfw.application.jtqj.eventmanagement.logic.api.to.EventSearchCriteriaTo;
import com.devonfw.module.jpa.dataaccess.api.QueryUtil;
import com.devonfw.module.jpa.dataaccess.api.data.DefaultRepository;
import com.querydsl.jpa.impl.JPAQuery;

/**
 * {@link DefaultRepository} for {@link EventEntity}
 */
public interface EventRepository extends DefaultRepository<EventEntity> {

  /**
   * @param criteria the {@link EventSearchCriteriaTo} with the criteria to search.
   * @return the {@link Page} of the {@link EventEntity} objects that matched the search. If no pageable is set, it will
   *         return a unique page with all the objects that matched the search.
   */
  default Page<EventEntity> findByCriteria(EventSearchCriteriaTo criteria) {

    EventEntity alias = newDslAlias();
    JPAQuery<EventEntity> query = newDslQuery(alias);

    String eventName = criteria.getEventName();
    if (eventName != null && !eventName.isEmpty()) {
      QueryUtil.get().whereString(query, $(alias.getEventName()), eventName, criteria.getEventNameOption());
    }
    Timestamp startDate = criteria.getStartDate();
    if (startDate != null) {
      query.where($(alias.getStartDate()).eq(startDate));
    }
    Timestamp endDate = criteria.getEndDate();
    if (endDate != null) {
      query.where($(alias.getEndDate()).eq(endDate));
    }
    String location = criteria.getLocation();
    if (location != null && !location.isEmpty()) {
      QueryUtil.get().whereString(query, $(alias.getLocation()), location, criteria.getLocationOption());
    }
    String description = criteria.getDescription();
    if (description != null && !description.isEmpty()) {
      QueryUtil.get().whereString(query, $(alias.getDescription()), description, criteria.getDescriptionOption());
    }
    String logo = criteria.getLogo();
    if (logo != null && !logo.isEmpty()) {
      QueryUtil.get().whereString(query, $(alias.getLogo()), logo, criteria.getLogoOption());
    }
    Long attentionTime = criteria.getAttentionTime();
    if (attentionTime != null) {
      query.where($(alias.getAttentionTime()).eq(attentionTime));
    }
    Integer visitorsCount = criteria.getVisitorsCount();
    if (visitorsCount != null) {
      query.where($(alias.getVisitorsCount()).eq(visitorsCount));
    }
    if (criteria.getPageable() == null) {
      criteria.setPageable(PageRequest.of(0, Integer.MAX_VALUE));
    } else {
      addOrderBy(query, alias, criteria.getPageable().getSort());
    }

    return QueryUtil.get().findPaginated(criteria.getPageable(), query, true);
  }

  /**
   * Add sorting to the given query on the given alias
   *
   * @param query to add sorting to
   * @param alias to retrieve columns from for sorting
   * @param sort specification of sorting
   */
  public default void addOrderBy(JPAQuery<EventEntity> query, EventEntity alias, Sort sort) {

    if (sort != null && sort.isSorted()) {
      Iterator<Order> it = sort.iterator();
      while (it.hasNext()) {
        Order next = it.next();
        switch (next.getProperty()) {
          case "eventName":
            if (next.isAscending()) {
              query.orderBy($(alias.getEventName()).asc());
            } else {
              query.orderBy($(alias.getEventName()).desc());
            }
            break;
          case "startDate":
            if (next.isAscending()) {
              query.orderBy($(alias.getStartDate()).asc());
            } else {
              query.orderBy($(alias.getStartDate()).desc());
            }
            break;
          case "endDate":
            if (next.isAscending()) {
              query.orderBy($(alias.getEndDate()).asc());
            } else {
              query.orderBy($(alias.getEndDate()).desc());
            }
            break;
          case "location":
            if (next.isAscending()) {
              query.orderBy($(alias.getLocation()).asc());
            } else {
              query.orderBy($(alias.getLocation()).desc());
            }
            break;
          case "description":
            if (next.isAscending()) {
              query.orderBy($(alias.getDescription()).asc());
            } else {
              query.orderBy($(alias.getDescription()).desc());
            }
            break;
          case "logo":
            if (next.isAscending()) {
              query.orderBy($(alias.getLogo()).asc());
            } else {
              query.orderBy($(alias.getLogo()).desc());
            }
            break;
          case "attentionTime":
            if (next.isAscending()) {
              query.orderBy($(alias.getAttentionTime()).asc());
            } else {
              query.orderBy($(alias.getAttentionTime()).desc());
            }
            break;
          case "visitorsCount":
            if (next.isAscending()) {
              query.orderBy($(alias.getVisitorsCount()).asc());
            } else {
              query.orderBy($(alias.getVisitorsCount()).desc());
            }
            break;
          default:
            throw new IllegalArgumentException("Sorted by the unknown property '" + next.getProperty() + "'");
        }
      }
    }
  }

}