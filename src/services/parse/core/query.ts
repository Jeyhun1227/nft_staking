import Parse from 'parse'
import { queryDateHelper } from '../../parse/helpers/queryHelpers'
import Const from '../../parse/contants'
import { IQuery } from "@/props/IQuery"

export const queryMaxLimit = 10000

export const basicQuery = (className : string, params : IQuery) : Parse.Query => {
  const { filters } = params

  const obj = Parse
    .Object
    .extend(className)
  const query = new Parse.Query(obj)

  if (filters) {
    filters.forEach(filter => {
      const { name, type, value } = filter
      if (type) {
        if (type === Const.filterTypes.dateRange) {
          query.greaterThan(name, queryDateHelper(value.startDate.utc().format()))
          query.lessThan(name, queryDateHelper(value.endDate.utc().format()))
        }
      } else if (value) {
        query.equalTo(name, value)
      }
    })
  }

  return query
}

export const countQuery = (className : string, params : IQuery) : Parse.Query => {
  return basicQuery(className, params)
}

export function fetchQuery (className : string, params : IQuery) {
  const { sorting, pagination, includes } = params
  const query = basicQuery(className, params)
  
  if (sorting) {
    sorting.forEach(sort => {
      const { name, order } = sort
      if (order === Const.orders.asc) {
        query.ascending(name)
      } else {
        query.descending(name)
      }
    })
  }
  
  if (pagination) {
    const { page, limit, itemsOnPage } = pagination

    query.limit(limit)
    query.skip((page - 1) * itemsOnPage)
  }

  if (includes) {
    includes.forEach(include =>
      query.include(include)
    )
  }

  return query
}
