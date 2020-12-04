package com.devonfw.application.jtqj.queuedetailmanagement.dataaccess.api.repo;

import static com.querydsl.core.alias.Alias.$;

import java.sql.Timestamp;
import java.util.Iterator;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;

import com.devonfw.application.jtqj.queuedetailmanagement.dataaccess.api.QueueDetailEntity;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailSearchCriteriaTo;
import com.devonfw.module.jpa.dataaccess.api.QueryUtil;
import com.devonfw.module.jpa.dataaccess.api.data.DefaultRepository;
import com.querydsl.jpa.impl.JPAQuery;

/**
 * {@link DefaultRepository} for {@link QueueDetailEntity}
 */
public interface QueueDetailRepository extends DefaultRepository<QueueDetailEntity> {

  /**
   * @param criteria the {@link QueueDetailSearchCriteriaTo} with the criteria to search.
   * @return the {@link Page} of the {@link QueueDetailEntity} objects that matched the search. If no pageable is set,
   *         it will return a unique page with all the objects that matched the search.
   */
  default Page<QueueDetailEntity> findByCriteria(QueueDetailSearchCriteriaTo criteria) {

    QueueDetailEntity alias = newDslAlias();
    JPAQuery<QueueDetailEntity> query = newDslQuery(alias);

    String queueNumber = criteria.getQueueNumber();
    if (queueNumber != null && !queueNumber.isEmpty()) {
      QueryUtil.get().whereString(query, $(alias.getQueueNumber()), queueNumber, criteria.getQueueNumberOption());
    }
    Timestamp creationTime = criteria.getCreationTime();
    if (creationTime != null) {
      query.where($(alias.getCreationTime()).eq(creationTime));
    }
    Timestamp startTime = criteria.getStartTime();
    if (startTime != null) {
      query.where($(alias.getStartTime()).eq(startTime));
    }
    Timestamp endTime = criteria.getEndTime();
    if (endTime != null) {
      query.where($(alias.getEndTime()).eq(endTime));
    }
    Long visitor = criteria.getVisitorId();
    if (visitor != null) {
      query.where($(alias.getVisitor().getId()).eq(visitor));
    }
    Long Event = criteria.getEventId();
    if (Event != null) {
      query.where($(alias.getEvent().getId()).eq(Event));
    }
    Timestamp estimatedTime = criteria.getEstimatedTime();
    if (estimatedTime != null) {
      query.where($(alias.getEstimatedTime()).eq(estimatedTime));
    }
    Timestamp attentionTime = criteria.getAttentionTime();
    if (attentionTime != null) {
      query.where($(alias.getAttentionTime()).eq(attentionTime));
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
  public default void addOrderBy(JPAQuery<QueueDetailEntity> query, QueueDetailEntity alias, Sort sort) {

    if (sort != null && sort.isSorted()) {
      Iterator<Order> it = sort.iterator();
      while (it.hasNext()) {
        Order next = it.next();
        switch (next.getProperty()) {
          case "queueNumber":
            if (next.isAscending()) {
              query.orderBy($(alias.getQueueNumber()).asc());
            } else {
              query.orderBy($(alias.getQueueNumber()).desc());
            }
            break;
          case "creationTime":
            if (next.isAscending()) {
              query.orderBy($(alias.getCreationTime()).asc());
            } else {
              query.orderBy($(alias.getCreationTime()).desc());
            }
            break;
          case "startTime":
            if (next.isAscending()) {
              query.orderBy($(alias.getStartTime()).asc());
            } else {
              query.orderBy($(alias.getStartTime()).desc());
            }
            break;
          case "endTime":
            if (next.isAscending()) {
              query.orderBy($(alias.getEndTime()).asc());
            } else {
              query.orderBy($(alias.getEndTime()).desc());
            }
            break;
          case "visitor":
            if (next.isAscending()) {
              query.orderBy($(alias.getVisitor().getId().toString()).asc());
            } else {
              query.orderBy($(alias.getVisitor().getId().toString()).desc());
            }
            break;
          case "Event":
            if (next.isAscending()) {
              query.orderBy($(alias.getEvent().getId().toString()).asc());
            } else {
              query.orderBy($(alias.getEvent().getId().toString()).desc());
            }
            break;
          case "estimatedTime":
            if (next.isAscending()) {
              query.orderBy($(alias.getEstimatedTime()).asc());
            } else {
              query.orderBy($(alias.getEstimatedTime()).desc());
            }
            break;
          case "attentionTime":
            if (next.isAscending()) {
              query.orderBy($(alias.getAttentionTime()).asc());
            } else {
              query.orderBy($(alias.getAttentionTime()).desc());
            }
            break;
          default:
            throw new IllegalArgumentException("Sorted by the unknown property '" + next.getProperty() + "'");
        }
      }
    }
  }

}
