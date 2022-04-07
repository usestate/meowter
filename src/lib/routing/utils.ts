import { stringify as stringifyQuery } from 'query-string'

const empty = Symbol('empty')
type Empty = typeof empty

/**
 *
 * example
 * stringifyRoute(
 *  ROUTES.TASKS,
 *  {id: 123},
 *  {search: 'text'}
 * )
 * */

export const stringifyRoute = <P extends string | Empty, Q extends string | Empty>(
  route: string,
  params?: P extends string ? Record<P, string> : undefined,
  query?: Q extends string ? Partial<Record<Q, string>> : undefined
): string =>
  Object.keys(params ?? {}).reduce((res, param) => {
    return res.replace(`:${param}`, params ? params[param] : '')
  }, route) + (query ? `?${stringifyQuery(query)}` : '')
