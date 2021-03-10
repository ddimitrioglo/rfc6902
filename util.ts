const cloneDeep = require('lodash.clonedeep');

export const hasOwnProperty = Object.prototype.hasOwnProperty

export function objectType(object: any) {
  if (object === undefined) {
    return 'undefined'
  }
  if (object === null) {
    return 'null'
  }
  if (Array.isArray(object)) {
    return 'array'
  }
  return typeof object
}

function isNonPrimitive(value: any): value is object {
  // loose-equality checking for null is faster than strict checking for each of null/undefined/true/false
  // checking null first, then calling typeof, is faster than vice-versa
  return value != null && typeof value == 'object'
}

export function clone<T extends any>(source: T): T {
  return cloneDeep(source);
}
