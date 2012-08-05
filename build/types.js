// Generated by CoffeeScript 1.3.3
(function() {
  'use strict';

  var isArray, isFunction, isInstance, isObject, isString, isUnemptyString, quacksLike, verifyArray, verifyFunction, verifyInstance, verifyObject, verifyString, verifyUnemptyString,
    __hasProp = {}.hasOwnProperty;

  quacksLike = function(thing, duck) {
    var property;
    verifyObject(thing);
    verifyObject(duck);
    for (property in duck) {
      if (!__hasProp.call(duck, property)) continue;
      if (thing.hasOwnProperty(property) !== true) {
        return false;
      }
      if (typeof thing[property] !== typeof duck[property]) {
        return false;
      }
    }
    return true;
  };

  verifyInstance = function(thing, prototype, message) {
    if (isInstance(thing, prototype) === false) {
      throw new Error(message || 'Invalid type');
    }
  };

  isInstance = function(thing, prototype) {
    if (typeof thing === 'undefined' || thing === null) {
      return false;
    }
    if (isFunction(prototype) && thing instanceof prototype) {
      return true;
    }
    return false;
  };

  verifyObject = function(thing, message) {
    if (isObject(thing) === false) {
      throw new Error(message || 'Invalid object');
    }
  };

  isObject = function(thing) {
    if (typeof thing === 'object' && thing !== null && isArray(thing) === false) {
      return true;
    }
    return false;
  };

  verifyArray = function(thing, message) {
    if (isArray(thing) === false) {
      throw new Error(message || 'Invalid array');
    }
  };

  isArray = function(thing) {
    if (Object.prototype.toString.call(thing) === '[object Array]') {
      return true;
    }
    return false;
  };

  verifyFunction = function(thing, message) {
    if (isFunction(thing) === false) {
      throw new Error(message || 'Invalid function');
    }
  };

  isFunction = function(thing) {
    if (typeof thing === 'function') {
      return true;
    }
    return false;
  };

  verifyUnemptyString = function(thing, message) {
    if (isUnemptyString(thing) === false) {
      throw new Error(message || 'Invalid string');
    }
  };

  isUnemptyString = function(thing) {
    if (isString(thing) && thing !== '') {
      return true;
    }
    return false;
  };

  verifyString = function(thing, message) {
    if (isString(thing) === false) {
      throw new Error(message || 'Invalid string');
    }
  };

  isString = function(thing) {
    if (typeof thing === 'string') {
      return true;
    }
    return false;
  };

  module.exports = {
    quacksLike: quacksLike,
    verifyInstance: verifyInstance,
    isInstance: isInstance,
    verifyObject: verifyObject,
    isObject: isObject,
    verifyArray: verifyArray,
    isArray: isArray,
    verifyFunction: verifyFunction,
    isFunction: isFunction,
    verifyUnemptyString: verifyUnemptyString,
    isUnemptyString: isUnemptyString,
    verifyString: verifyString,
    isString: isString
  };

}).call(this);
