import React from 'react';
import { Template } from '../../core/template';

export default { title: 'Seq' };


export const lodash = () => {
  const source = `// source here`;
  return (
    <Template
      method='lodash'
      title='lodash'
      codeSource={source}
      dependencies={["lodash"]}
      description="Creates a lodash object which wraps value to enable implicit method chain sequences. Methods that operate on and return arrays, collections, and functions can be chained together. Methods that retrieve a single value or may return a primitive value will automatically end the chain sequence and return the unwrapped value. Otherwise, the value must be unwrapped with _#value.

Explicit chain sequences, which must be unwrapped with _#value, may be enabled using _.chain.

The execution of chained methods is lazy, that is, it&#39;s deferred until _#value is implicitly or explicitly called.

Lazy evaluation allows several methods to support shortcut fusion. Shortcut fusion is an optimization to merge iteratee calls; this avoids the creation of intermediate arrays and can greatly reduce the number of iteratee executions. Sections of a chain sequence qualify for shortcut fusion if the section is applied to an array and iteratees accept only one argument. The heuristic for whether a section qualifies for shortcut fusion is subject to change.

Chaining is supported in custom builds as long as the _#value method is directly or indirectly included in the build.

In addition to lodash methods, wrappers have Array and String methods.

The wrapper Array methods are:
concat, join, pop, push, shift, sort, splice, and unshift

The wrapper String methods are:
replace and split

The wrapper methods that support shortcut fusion are:
at, compact, drop, dropRight, dropWhile, filter, find, findLast, head, initial, last, map, reject, reverse, slice, tail, take, takeRight, takeRightWhile, takeWhile, and toArray

The chainable wrapper methods are:
after, ary, assign, assignIn, assignInWith, assignWith, at, before, bind, bindAll, bindKey, castArray, chain, chunk, commit, compact, concat, conforms, constant, countBy, create, curry, debounce, defaults, defaultsDeep, defer, delay, difference, differenceBy, differenceWith, drop, dropRight, dropRightWhile, dropWhile, extend, extendWith, fill, filter, flatMap, flatMapDeep, flatMapDepth, flatten, flattenDeep, flattenDepth, flip, flow, flowRight, fromPairs, functions, functionsIn, groupBy, initial, intersection, intersectionBy, intersectionWith, invert, invertBy, invokeMap, iteratee, keyBy, keys, keysIn, map, mapKeys, mapValues, matches, matchesProperty, memoize, merge, mergeWith, method, methodOf, mixin, negate, nthArg, omit, omitBy, once, orderBy, over, overArgs, overEvery, overSome, partial, partialRight, partition, pick, pickBy, plant, property, propertyOf, pull, pullAll, pullAllBy, pullAllWith, pullAt, push, range, rangeRight, rearg, reject, remove, rest, reverse, sampleSize, set, setWith, shuffle, slice, sort, sortBy, splice, spread, tail, take, takeRight, takeRightWhile, takeWhile, tap, throttle, thru, toArray, toPairs, toPairsIn, toPath, toPlainObject, transform, unary, union, unionBy, unionWith, uniq, uniqBy, uniqWith, unset, unshift, unzip, unzipWith, update, updateWith, values, valuesIn, without, wrap, xor, xorBy, xorWith, zip, zipObject, zipObjectDeep, and zipWith

The wrapper methods that are not chainable by default are:
add, attempt, camelCase, capitalize, ceil, clamp, clone, cloneDeep, cloneDeepWith, cloneWith, conformsTo, deburr, defaultTo, divide, each, eachRight, endsWith, eq, escape, escapeRegExp, every, find, findIndex, findKey, findLast, findLastIndex, findLastKey, first, floor, forEach, forEachRight, forIn, forInRight, forOwn, forOwnRight, get, gt, gte, has, hasIn, head, identity, includes, indexOf, inRange, invoke, isArguments, isArray, isArrayBuffer, isArrayLike, isArrayLikeObject, isBoolean, isBuffer, isDate, isElement, isEmpty, isEqual, isEqualWith, isError, isFinite, isFunction, isInteger, isLength, isMap, isMatch, isMatchWith, isNaN, isNative, isNil, isNull, isNumber, isObject, isObjectLike, isPlainObject, isRegExp, isSafeInteger, isSet, isString, isUndefined, isTypedArray, isWeakMap, isWeakSet, join, kebabCase, last, lastIndexOf, lowerCase, lowerFirst, lt, lte, max, maxBy, mean, meanBy, min, minBy, multiply, noConflict, noop, now, nth, pad, padEnd, padStart, parseInt, pop, random, reduce, reduceRight, repeat, result, round, runInContext, sample, shift, size, snakeCase, some, sortedIndex, sortedIndexBy, sortedLastIndex, sortedLastIndexBy, startCase, startsWith, stubArray, stubFalse, stubObject, stubString, stubTrue, subtract, sum, sumBy, template, times, toFinite, toInteger, toJSON, toLength, toLower, toNumber, toSafeInteger, toString, toUpper, trim, trimEnd, trimStart, truncate, unescape, uniqueId, upperCase, upperFirst, value, and words"
      args={["value (*): The value to wrap in a lodash instance."]}
      returns="(Object): Returns the new lodash wrapper instance."
    />
  );
};

export const chain = () => {
  const source = `// source here`;
  return (
    <Template
      method='chain'
      title='chain'
      codeSource={source}
      dependencies={["chain"]}
      description="Creates a lodash wrapper instance that wraps value with explicit method chain sequences enabled. The result of such sequences must be unwrapped with _#value."
      args={["value (*): The value to wrap."]}
      returns="(Object): Returns the new lodash wrapper instance."
    />
  );
};

export const tap = () => {
  const source = `// source here`;
  return (
    <Template
      method='tap'
      title='tap'
      codeSource={source}
      dependencies={["tap"]}
      description="This method invokes interceptor and returns value. The interceptor is invoked with one argument; (value). The purpose of this method is to &quot;tap into&quot; a method chain sequence in order to modify intermediate results."
      args={["value (*): The value to provide to interceptor.","interceptor (Function): The function to invoke."]}
      returns="(*): Returns value."
    />
  );
};

export const thru = () => {
  const source = `// source here`;
  return (
    <Template
      method='thru'
      title='thru'
      codeSource={source}
      dependencies={["thru"]}
      description="This method is like _.tap except that it returns the result of interceptor. The purpose of this method is to &quot;pass thru&quot; values replacing intermediate results in a method chain sequence."
      args={["value (*): The value to provide to interceptor.","interceptor (Function): The function to invoke."]}
      returns="(*): Returns the result of interceptor."
    />
  );
};

export const prototypeSymbolIterator = () => {
  const source = `// source here`;
  return (
    <Template
      method='prototype-Symbol-iterator'
      title='prototype-Symbol-iterator'
      codeSource={source}
      dependencies={["prototype-Symbol-iterator"]}
      description="Enables the wrapper to be iterable."
      args={[]}
      returns="(Object): Returns the wrapper object."
    />
  );
};

export const prototypeAt = () => {
  const source = `// source here`;
  return (
    <Template
      method='prototype-at'
      title='prototype-at'
      codeSource={source}
      dependencies={["prototype-at"]}
      description="This method is the wrapper version of _.at."
      args={["[paths] (...(string|string[])): The property paths to pick."]}
      returns="(Object): Returns the new lodash wrapper instance."
    />
  );
};

export const prototypeChain = () => {
  const source = `// source here`;
  return (
    <Template
      method='prototype-chain'
      title='prototype-chain'
      codeSource={source}
      dependencies={["prototype-chain"]}
      description="Creates a lodash wrapper instance with explicit method chain sequences enabled."
      args={[]}
      returns="(Object): Returns the new lodash wrapper instance."
    />
  );
};

export const prototypeCommit = () => {
  const source = `// source here`;
  return (
    <Template
      method='prototype-commit'
      title='prototype-commit'
      codeSource={source}
      dependencies={["prototype-commit"]}
      description="Executes the chain sequence and returns the wrapped result."
      args={[]}
      returns="(Object): Returns the new lodash wrapper instance."
    />
  );
};

export const prototypeNext = () => {
  const source = `// source here`;
  return (
    <Template
      method='prototype-next'
      title='prototype-next'
      codeSource={source}
      dependencies={["prototype-next"]}
      description="Gets the next value on a wrapped object following the iterator protocol."
      args={[]}
      returns="(Object): Returns the next iterator value."
    />
  );
};

export const prototypePlant = () => {
  const source = `// source here`;
  return (
    <Template
      method='prototype-plant'
      title='prototype-plant'
      codeSource={source}
      dependencies={["prototype-plant"]}
      description="Creates a clone of the chain sequence planting value as the wrapped value."
      args={["value (*): The value to plant."]}
      returns="(Object): Returns the new lodash wrapper instance."
    />
  );
};

export const prototypeReverse = () => {
  const source = `// source here`;
  return (
    <Template
      method='prototype-reverse'
      title='prototype-reverse'
      codeSource={source}
      dependencies={["prototype-reverse"]}
      description="This method is the wrapper version of _.reverse.

Note: This method mutates the wrapped array."
      args={[]}
      returns="(Object): Returns the new lodash wrapper instance."
    />
  );
};

export const prototypeValue = () => {
  const source = `// source here`;
  return (
    <Template
      method='prototype-value'
      title='prototype-value'
      codeSource={source}
      dependencies={["prototype-value"]}
      description="Executes the chain sequence to resolve the unwrapped value."
      args={[]}
      returns="(*): Returns the resolved unwrapped value."
    />
  );
};