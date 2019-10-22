import React from 'react';
import { Template } from '../../core/template';

export default { title: 'Collection' };


export const countBy = () => {
  const source = `// source here`;
  return (
    <Template
      method='countBy'
      title='countBy'
      codeSource={source}
      dependencies={["countBy"]}
      description="Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The corresponding value of each key is the number of times the key was returned by iteratee. The iteratee is invoked with one argument: (value)."
      args={["collection (Array|Object): The collection to iterate over.","[iteratee=_.identity] (Function): The iteratee to transform keys."]}
      returns="(Object): Returns the composed aggregate object."
    />
  );
};

export const every = () => {
  const source = `// source here`;
  return (
    <Template
      method='every'
      title='every'
      codeSource={source}
      dependencies={["every"]}
      description="Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).

Note: This method returns true for empty collections because everything is true of elements of empty collections."
      args={["collection (Array|Object): The collection to iterate over.","[predicate=_.identity] (Function): The function invoked per iteration."]}
      returns="(boolean): Returns true if all elements pass the predicate check, else false."
    />
  );
};

export const filter = () => {
  const source = `// source here`;
  return (
    <Template
      method='filter'
      title='filter'
      codeSource={source}
      dependencies={["filter"]}
      description="Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).

Note: Unlike _.remove, this method returns a new array."
      args={["collection (Array|Object): The collection to iterate over.","[predicate=_.identity] (Function): The function invoked per iteration."]}
      returns="(Array): Returns the new filtered array."
    />
  );
};

export const find = () => {
  const source = `// source here`;
  return (
    <Template
      method='find'
      title='find'
      codeSource={source}
      dependencies={["find"]}
      description="Iterates over elements of collection, returning the first element predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection)."
      args={["collection (Array|Object): The collection to inspect.","[predicate=_.identity] (Function): The function invoked per iteration.","[fromIndex=0] (number): The index to search from."]}
      returns="(*): Returns the matched element, else undefined."
    />
  );
};

export const findLast = () => {
  const source = `// source here`;
  return (
    <Template
      method='findLast'
      title='findLast'
      codeSource={source}
      dependencies={["findLast"]}
      description="This method is like _.find except that it iterates over elements of collection from right to left."
      args={["collection (Array|Object): The collection to inspect.","[predicate=_.identity] (Function): The function invoked per iteration.","[fromIndex=collection.length-1] (number): The index to search from."]}
      returns="(*): Returns the matched element, else undefined."
    />
  );
};

export const flatMap = () => {
  const source = `// source here`;
  return (
    <Template
      method='flatMap'
      title='flatMap'
      codeSource={source}
      dependencies={["flatMap"]}
      description="Creates a flattened array of values by running each element in collection thru iteratee and flattening the mapped results. The iteratee is invoked with three arguments: (value, index|key, collection)."
      args={["collection (Array|Object): The collection to iterate over.","[iteratee=_.identity] (Function): The function invoked per iteration."]}
      returns="(Array): Returns the new flattened array."
    />
  );
};

export const flatMapDeep = () => {
  const source = `// source here`;
  return (
    <Template
      method='flatMapDeep'
      title='flatMapDeep'
      codeSource={source}
      dependencies={["flatMapDeep"]}
      description="This method is like _.flatMap except that it recursively flattens the mapped results."
      args={["collection (Array|Object): The collection to iterate over.","[iteratee=_.identity] (Function): The function invoked per iteration."]}
      returns="(Array): Returns the new flattened array."
    />
  );
};

export const flatMapDepth = () => {
  const source = `// source here`;
  return (
    <Template
      method='flatMapDepth'
      title='flatMapDepth'
      codeSource={source}
      dependencies={["flatMapDepth"]}
      description="This method is like _.flatMap except that it recursively flattens the mapped results up to depth times."
      args={["collection (Array|Object): The collection to iterate over.","[iteratee=_.identity] (Function): The function invoked per iteration.","[depth=1] (number): The maximum recursion depth."]}
      returns="(Array): Returns the new flattened array."
    />
  );
};

export const forEach = () => {
  const source = `// source here`;
  return (
    <Template
      method='forEach'
      title='forEach'
      codeSource={source}
      dependencies={["forEach"]}
      description="Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.

Note: As with other &quot;Collections&quot; methods, objects with a &quot;length&quot; property are iterated like arrays. To avoid this behavior use _.forIn or _.forOwn for object iteration."
      args={["collection (Array|Object): The collection to iterate over.","[iteratee=_.identity] (Function): The function invoked per iteration."]}
      returns="(*): Returns collection."
    />
  );
};

export const forEachRight = () => {
  const source = `// source here`;
  return (
    <Template
      method='forEachRight'
      title='forEachRight'
      codeSource={source}
      dependencies={["forEachRight"]}
      description="This method is like _.forEach except that it iterates over elements of collection from right to left."
      args={["collection (Array|Object): The collection to iterate over.","[iteratee=_.identity] (Function): The function invoked per iteration."]}
      returns="(*): Returns collection."
    />
  );
};

export const groupBy = () => {
  const source = `// source here`;
  return (
    <Template
      method='groupBy'
      title='groupBy'
      codeSource={source}
      dependencies={["groupBy"]}
      description="Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The order of grouped values is determined by the order they occur in collection. The corresponding value of each key is an array of elements responsible for generating the key. The iteratee is invoked with one argument: (value)."
      args={["collection (Array|Object): The collection to iterate over.","[iteratee=_.identity] (Function): The iteratee to transform keys."]}
      returns="(Object): Returns the composed aggregate object."
    />
  );
};

export const includes = () => {
  const source = `// source here`;
  return (
    <Template
      method='includes'
      title='includes'
      codeSource={source}
      dependencies={["includes"]}
      description="Checks if value is in collection. If collection is a string, it&#39;s checked for a substring of value, otherwise SameValueZero is used for equality comparisons. If fromIndex is negative, it&#39;s used as the offset from the end of collection."
      args={["collection (Array|Object|string): The collection to inspect.","value (*): The value to search for.","[fromIndex=0] (number): The index to search from."]}
      returns="(boolean): Returns true if value is found, else false."
    />
  );
};

export const invokeMap = () => {
  const source = `// source here`;
  return (
    <Template
      method='invokeMap'
      title='invokeMap'
      codeSource={source}
      dependencies={["invokeMap"]}
      description="Invokes the method at path of each element in collection, returning an array of the results of each invoked method. Any additional arguments are provided to each invoked method. If path is a function, it&#39;s invoked for, and this bound to, each element in collection."
      args={["collection (Array|Object): The collection to iterate over.","path (Array|Function|string): The path of the method to invoke or the function invoked per iteration.","[args] (...*): The arguments to invoke each method with."]}
      returns="(Array): Returns the array of results."
    />
  );
};

export const keyBy = () => {
  const source = `// source here`;
  return (
    <Template
      method='keyBy'
      title='keyBy'
      codeSource={source}
      dependencies={["keyBy"]}
      description="Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The corresponding value of each key is the last element responsible for generating the key. The iteratee is invoked with one argument: (value)."
      args={["collection (Array|Object): The collection to iterate over.","[iteratee=_.identity] (Function): The iteratee to transform keys."]}
      returns="(Object): Returns the composed aggregate object."
    />
  );
};

export const map = () => {
  const source = `// source here`;
  return (
    <Template
      method='map'
      title='map'
      codeSource={source}
      dependencies={["map"]}
      description="Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with three arguments:
(value, index|key, collection).

Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues, _.reject, and _.some.

The guarded methods are:
ary, chunk, curry, curryRight, drop, dropRight, every, fill, invert, parseInt, random, range, rangeRight, repeat, sampleSize, slice, some, sortBy, split, take, takeRight, template, trim, trimEnd, trimStart, and words"
      args={["collection (Array|Object): The collection to iterate over.","[iteratee=_.identity] (Function): The function invoked per iteration."]}
      returns="(Array): Returns the new mapped array."
    />
  );
};

export const orderBy = () => {
  const source = `// source here`;
  return (
    <Template
      method='orderBy'
      title='orderBy'
      codeSource={source}
      dependencies={["orderBy"]}
      description="This method is like _.sortBy except that it allows specifying the sort orders of the iteratees to sort by. If orders is unspecified, all values are sorted in ascending order. Otherwise, specify an order of &quot;desc&quot; for descending or &quot;asc&quot; for ascending sort order of corresponding values."
      args={["collection (Array|Object): The collection to iterate over.","[iteratees=[_.identity]] (Array[]|Function[]|Object[]|string[]): The iteratees to sort by.","[orders] (string[]): The sort orders of iteratees."]}
      returns="(Array): Returns the new sorted array."
    />
  );
};

export const partition = () => {
  const source = `// source here`;
  return (
    <Template
      method='partition'
      title='partition'
      codeSource={source}
      dependencies={["partition"]}
      description="Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for, the second of which contains elements predicate returns falsey for. The predicate is invoked with one argument: (value)."
      args={["collection (Array|Object): The collection to iterate over.","[predicate=_.identity] (Function): The function invoked per iteration."]}
      returns="(Array): Returns the array of grouped elements."
    />
  );
};

export const reduce = () => {
  const source = `// source here`;
  return (
    <Template
      method='reduce'
      title='reduce'
      codeSource={source}
      dependencies={["reduce"]}
      description="Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not given, the first element of collection is used as the initial value. The iteratee is invoked with four arguments:
(accumulator, value, index|key, collection).

Many lodash methods are guarded to work as iteratees for methods like _.reduce, _.reduceRight, and _.transform.

The guarded methods are:
assign, defaults, defaultsDeep, includes, merge, orderBy, and sortBy"
      args={["collection (Array|Object): The collection to iterate over.","[iteratee=_.identity] (Function): The function invoked per iteration.","[accumulator] (*): The initial value."]}
      returns="(*): Returns the accumulated value."
    />
  );
};

export const reduceRight = () => {
  const source = `// source here`;
  return (
    <Template
      method='reduceRight'
      title='reduceRight'
      codeSource={source}
      dependencies={["reduceRight"]}
      description="This method is like _.reduce except that it iterates over elements of collection from right to left."
      args={["collection (Array|Object): The collection to iterate over.","[iteratee=_.identity] (Function): The function invoked per iteration.","[accumulator] (*): The initial value."]}
      returns="(*): Returns the accumulated value."
    />
  );
};

export const reject = () => {
  const source = `// source here`;
  return (
    <Template
      method='reject'
      title='reject'
      codeSource={source}
      dependencies={["reject"]}
      description="The opposite of _.filter; this method returns the elements of collection that predicate does not return truthy for."
      args={["collection (Array|Object): The collection to iterate over.","[predicate=_.identity] (Function): The function invoked per iteration."]}
      returns="(Array): Returns the new filtered array."
    />
  );
};

export const sample = () => {
  const source = `// source here`;
  return (
    <Template
      method='sample'
      title='sample'
      codeSource={source}
      dependencies={["sample"]}
      description="Gets a random element from collection."
      args={["collection (Array|Object): The collection to sample."]}
      returns="(*): Returns the random element."
    />
  );
};

export const sampleSize = () => {
  const source = `// source here`;
  return (
    <Template
      method='sampleSize'
      title='sampleSize'
      codeSource={source}
      dependencies={["sampleSize"]}
      description="Gets n random elements at unique keys from collection up to the size of collection."
      args={["collection (Array|Object): The collection to sample.","[n=1] (number): The number of elements to sample."]}
      returns="(Array): Returns the random elements."
    />
  );
};

export const shuffle = () => {
  const source = `// source here`;
  return (
    <Template
      method='shuffle'
      title='shuffle'
      codeSource={source}
      dependencies={["shuffle"]}
      description="Creates an array of shuffled values, using a version of the Fisher-Yates shuffle."
      args={["collection (Array|Object): The collection to shuffle."]}
      returns="(Array): Returns the new shuffled array."
    />
  );
};

export const size = () => {
  const source = `// source here`;
  return (
    <Template
      method='size'
      title='size'
      codeSource={source}
      dependencies={["size"]}
      description="Gets the size of collection by returning its length for array-like values or the number of own enumerable string keyed properties for objects."
      args={["collection (Array|Object|string): The collection to inspect."]}
      returns="(number): Returns the collection size."
    />
  );
};

export const some = () => {
  const source = `// source here`;
  return (
    <Template
      method='some'
      title='some'
      codeSource={source}
      dependencies={["some"]}
      description="Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate returns truthy. The predicate is invoked with three arguments: (value, index|key, collection)."
      args={["collection (Array|Object): The collection to iterate over.","[predicate=_.identity] (Function): The function invoked per iteration."]}
      returns="(boolean): Returns true if any element passes the predicate check, else false."
    />
  );
};

export const sortBy = () => {
  const source = `// source here`;
  return (
    <Template
      method='sortBy'
      title='sortBy'
      codeSource={source}
      dependencies={["sortBy"]}
      description="Creates an array of elements, sorted in ascending order by the results of running each element in a collection thru each iteratee. This method performs a stable sort, that is, it preserves the original sort order of equal elements. The iteratees are invoked with one argument: (value)."
      args={["collection (Array|Object): The collection to iterate over.","[iteratees=[_.identity]] (...(Function|Function[])): The iteratees to sort by."]}
      returns="(Array): Returns the new sorted array."
    />
  );
};