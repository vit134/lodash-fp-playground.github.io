import React from 'react';
import { Template } from '../../core/template';

export default { title: 'Array' };

export const chunk = () => {
  const lodashSource = `// lodash source here`;
  const fpSource = `// fp source here`;

  return (
    <Template
      method="chunk"
      title="chunk"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["chunk"]}
      description="Creates an array of elements split into groups the length of size. If array can&#39;t be split evenly, the final chunk will be the remaining elements."
      args={["array (Array): The array to process.","[size=1] (number): The length of each chunk"]}
      returns="(Array): Returns the new array of chunks."
    />
  );
};

export const compact = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="compact"
      title="compact"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["compact"]}
      description="Creates an array with all falsey values removed. The values false, null, 0, &quot;&quot;, undefined, and NaN are falsey."
      args={["array (Array): The array to compact."]}
      returns="(Array): Returns the new array of filtered values."
    />
  );
};

export const concat = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="concat"
      title="concat"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["concat"]}
      description="Creates a new array concatenating array with any additional arrays and/or values."
      args={["array (Array): The array to concatenate.","[values] (...*): The values to concatenate."]}
      returns="(Array): Returns the new concatenated array."
    />
  );
};

export const difference = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="difference"
      title="difference"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["difference"]}
      description="Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

Note: Unlike _.pullAll, this method returns a new array."
      args={["array (Array): The array to inspect.","[values] (...Array): The values to exclude."]}
      returns="(Array): Returns the new array of filtered values."
    />
  );
};

export const differenceBy = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="differenceBy"
      title="differenceBy"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["differenceBy"]}
      description="This method is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they&#39;re compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument:
(value).

Note: Unlike _.pullAllBy, this method returns a new array."
      args={["array (Array): The array to inspect.","[values] (...Array): The values to exclude.","[iteratee=_.identity] (Function): The iteratee invoked per element."]}
      returns="(Array): Returns the new array of filtered values."
    />
  );
};

export const differenceWith = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="differenceWith"
      title="differenceWith"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["differenceWith"]}
      description="This method is like _.difference except that it accepts comparator which is invoked to compare elements of array to values. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).

Note: Unlike _.pullAllWith, this method returns a new array."
      args={["array (Array): The array to inspect.","[values] (...Array): The values to exclude.","[comparator] (Function): The comparator invoked per element."]}
      returns="(Array): Returns the new array of filtered values."
    />
  );
};

export const drop = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="drop"
      title="drop"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["drop"]}
      description="Creates a slice of array with n elements dropped from the beginning."
      args={["array (Array): The array to query.","[n=1] (number): The number of elements to drop."]}
      returns="(Array): Returns the slice of array."
    />
  );
};

export const dropRight = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="dropRight"
      title="dropRight"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["dropRight"]}
      description="Creates a slice of array with n elements dropped from the end."
      args={["array (Array): The array to query.","[n=1] (number): The number of elements to drop."]}
      returns="(Array): Returns the slice of array."
    />
  );
};

export const dropRightWhile = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="dropRightWhile"
      title="dropRightWhile"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["dropRightWhile"]}
      description="Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array)."
      args={["array (Array): The array to query.","[predicate=_.identity] (Function): The function invoked per iteration."]}
      returns="(Array): Returns the slice of array."
    />
  );
};

export const dropWhile = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="dropWhile"
      title="dropWhile"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["dropWhile"]}
      description="Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array)."
      args={["array (Array): The array to query.","[predicate=_.identity] (Function): The function invoked per iteration."]}
      returns="(Array): Returns the slice of array."
    />
  );
};

export const fill = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="fill"
      title="fill"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["fill"]}
      description="Fills elements of array with value from start up to, but not including, end.

Note: This method mutates array."
      args={["array (Array): The array to fill.","value (*): The value to fill array with.","[start=0] (number): The start position.","[end=array.length] (number): The end position."]}
      returns="(Array): Returns array."
    />
  );
};

export const findIndex = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="findIndex"
      title="findIndex"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["findIndex"]}
      description="This method is like _.find except that it returns the index of the first element predicate returns truthy for instead of the element itself."
      args={["array (Array): The array to inspect.","[predicate=_.identity] (Function): The function invoked per iteration.","[fromIndex=0] (number): The index to search from."]}
      returns="(number): Returns the index of the found element, else -1."
    />
  );
};

export const findLastIndex = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="findLastIndex"
      title="findLastIndex"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["findLastIndex"]}
      description="This method is like _.findIndex except that it iterates over elements of collection from right to left."
      args={["array (Array): The array to inspect.","[predicate=_.identity] (Function): The function invoked per iteration.","[fromIndex=array.length-1] (number): The index to search from."]}
      returns="(number): Returns the index of the found element, else -1."
    />
  );
};

export const head = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="head"
      title="head"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["head"]}
      description="Gets the first element of array."
      args={["array (Array): The array to query."]}
      returns="(*): Returns the first element of array."
    />
  );
};

export const flatten = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="flatten"
      title="flatten"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["flatten"]}
      description="Flattens array a single level deep."
      args={["array (Array): The array to flatten."]}
      returns="(Array): Returns the new flattened array."
    />
  );
};

export const flattenDeep = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="flattenDeep"
      title="flattenDeep"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["flattenDeep"]}
      description="Recursively flattens array."
      args={["array (Array): The array to flatten."]}
      returns="(Array): Returns the new flattened array."
    />
  );
};

export const flattenDepth = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="flattenDepth"
      title="flattenDepth"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["flattenDepth"]}
      description="Recursively flatten array up to depth times."
      args={["array (Array): The array to flatten.","[depth=1] (number): The maximum recursion depth."]}
      returns="(Array): Returns the new flattened array."
    />
  );
};

export const fromPairs = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="fromPairs"
      title="fromPairs"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["fromPairs"]}
      description="The inverse of _.toPairs; this method returns an object composed from key-value pairs."
      args={["pairs (Array): The key-value pairs."]}
      returns="(Object): Returns the new object."
    />
  );
};

export const indexOf = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="indexOf"
      title="indexOf"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["indexOf"]}
      description="Gets the index at which the first occurrence of value is found in array using SameValueZero for equality comparisons. If fromIndex is negative, it&#39;s used as the offset from the end of array."
      args={["array (Array): The array to inspect.","value (*): The value to search for.","[fromIndex=0] (number): The index to search from."]}
      returns="(number): Returns the index of the matched value, else -1."
    />
  );
};

export const initial = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="initial"
      title="initial"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["initial"]}
      description="Gets all but the last element of array."
      args={["array (Array): The array to query."]}
      returns="(Array): Returns the slice of array."
    />
  );
};

export const intersection = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="intersection"
      title="intersection"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["intersection"]}
      description="Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array."
      args={["[arrays] (...Array): The arrays to inspect."]}
      returns="(Array): Returns the new array of intersecting values."
    />
  );
};

export const intersectionBy = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="intersectionBy"
      title="intersectionBy"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["intersectionBy"]}
      description="This method is like _.intersection except that it accepts iteratee which is invoked for each element of each arrays to generate the criterion by which they&#39;re compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument:
(value)."
      args={["[arrays] (...Array): The arrays to inspect.","[iteratee=_.identity] (Function): The iteratee invoked per element."]}
      returns="(Array): Returns the new array of intersecting values."
    />
  );
};

export const intersectionWith = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="intersectionWith"
      title="intersectionWith"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["intersectionWith"]}
      description="This method is like _.intersection except that it accepts comparator which is invoked to compare elements of arrays. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal)."
      args={["[arrays] (...Array): The arrays to inspect.","[comparator] (Function): The comparator invoked per element."]}
      returns="(Array): Returns the new array of intersecting values."
    />
  );
};

export const join = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="join"
      title="join"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["join"]}
      description="Converts all elements in array into a string separated by separator."
      args={["array (Array): The array to convert.","[separator=','] (string): The element separator."]}
      returns="(string): Returns the joined string."
    />
  );
};

export const last = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="last"
      title="last"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["last"]}
      description="Gets the last element of array."
      args={["array (Array): The array to query."]}
      returns="(*): Returns the last element of array."
    />
  );
};

export const lastIndexOf = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="lastIndexOf"
      title="lastIndexOf"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["lastIndexOf"]}
      description="This method is like _.indexOf except that it iterates over elements of array from right to left."
      args={["array (Array): The array to inspect.","value (*): The value to search for.","[fromIndex=array.length-1] (number): The index to search from."]}
      returns="(number): Returns the index of the matched value, else -1."
    />
  );
};

export const nth = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="nth"
      title="nth"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["nth"]}
      description="Gets the element at index n of array. If n is negative, the nth element from the end is returned."
      args={["array (Array): The array to query.","[n=0] (number): The index of the element to return."]}
      returns="(*): Returns the nth element of array."
    />
  );
};

export const pull = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="pull"
      title="pull"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["pull"]}
      description="Removes all given values from array using SameValueZero for equality comparisons.

Note: Unlike _.without, this method mutates array. Use _.remove to remove elements from an array by predicate."
      args={["array (Array): The array to modify.","[values] (...*): The values to remove."]}
      returns="(Array): Returns array."
    />
  );
};

export const pullAll = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="pullAll"
      title="pullAll"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["pullAll"]}
      description="This method is like _.pull except that it accepts an array of values to remove.

Note: Unlike _.difference, this method mutates array."
      args={["array (Array): The array to modify.","values (Array): The values to remove."]}
      returns="(Array): Returns array."
    />
  );
};

export const pullAllBy = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="pullAllBy"
      title="pullAllBy"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["pullAllBy"]}
      description="This method is like _.pullAll except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they&#39;re compared. The iteratee is invoked with one argument: (value).

Note: Unlike _.differenceBy, this method mutates array."
      args={["array (Array): The array to modify.","values (Array): The values to remove.","[iteratee=_.identity] (Function): The iteratee invoked per element."]}
      returns="(Array): Returns array."
    />
  );
};

export const pullAllWith = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="pullAllWith"
      title="pullAllWith"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["pullAllWith"]}
      description="This method is like _.pullAll except that it accepts comparator which is invoked to compare elements of array to values. The comparator is invoked with two arguments: (arrVal, othVal).

Note: Unlike _.differenceWith, this method mutates array."
      args={["array (Array): The array to modify.","values (Array): The values to remove.","[comparator] (Function): The comparator invoked per element."]}
      returns="(Array): Returns array."
    />
  );
};

export const pullAt = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="pullAt"
      title="pullAt"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["pullAt"]}
      description="Removes elements from array corresponding to indexes and returns an array of removed elements.

Note: Unlike _.at, this method mutates array."
      args={["array (Array): The array to modify.","[indexes] (...(number|number[])): The indexes of elements to remove."]}
      returns="(Array): Returns the new array of removed elements."
    />
  );
};

export const remove = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="remove"
      title="remove"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["remove"]}
      description="Removes all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with three arguments: (value, index, array).

Note: Unlike _.filter, this method mutates array. Use _.pull to pull elements from an array by value."
      args={["array (Array): The array to modify.","[predicate=_.identity] (Function): The function invoked per iteration."]}
      returns="(Array): Returns the new array of removed elements."
    />
  );
};

export const reverse = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="reverse"
      title="reverse"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["reverse"]}
      description="Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.

Note: This method mutates array and is based on Array#reverse."
      args={["array (Array): The array to modify."]}
      returns="(Array): Returns array."
    />
  );
};

export const slice = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="slice"
      title="slice"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["slice"]}
      description="Creates a slice of array from start up to, but not including, end.

Note: This method is used instead of Array#slice to ensure dense arrays are returned."
      args={["array (Array): The array to slice.","[start=0] (number): The start position.","[end=array.length] (number): The end position."]}
      returns="(Array): Returns the slice of array."
    />
  );
};

export const sortedIndex = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="sortedIndex"
      title="sortedIndex"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["sortedIndex"]}
      description="Uses a binary search to determine the lowest index at which value should be inserted into array in order to maintain its sort order."
      args={["array (Array): The sorted array to inspect.","value (*): The value to evaluate."]}
      returns="(number): Returns the index at which value should be inserted into array."
    />
  );
};

export const sortedIndexBy = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="sortedIndexBy"
      title="sortedIndexBy"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["sortedIndexBy"]}
      description="This method is like _.sortedIndex except that it accepts iteratee which is invoked for value and each element of array to compute their sort ranking. The iteratee is invoked with one argument: (value)."
      args={["array (Array): The sorted array to inspect.","value (*): The value to evaluate.","[iteratee=_.identity] (Function): The iteratee invoked per element."]}
      returns="(number): Returns the index at which value should be inserted into array."
    />
  );
};

export const sortedIndexOf = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="sortedIndexOf"
      title="sortedIndexOf"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["sortedIndexOf"]}
      description="This method is like _.indexOf except that it performs a binary search on a sorted array."
      args={["array (Array): The array to inspect.","value (*): The value to search for."]}
      returns="(number): Returns the index of the matched value, else -1."
    />
  );
};

export const sortedLastIndex = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="sortedLastIndex"
      title="sortedLastIndex"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["sortedLastIndex"]}
      description="This method is like _.sortedIndex except that it returns the highest index at which value should be inserted into array in order to maintain its sort order."
      args={["array (Array): The sorted array to inspect.","value (*): The value to evaluate."]}
      returns="(number): Returns the index at which value should be inserted into array."
    />
  );
};

export const sortedLastIndexBy = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="sortedLastIndexBy"
      title="sortedLastIndexBy"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["sortedLastIndexBy"]}
      description="This method is like _.sortedLastIndex except that it accepts iteratee which is invoked for value and each element of array to compute their sort ranking. The iteratee is invoked with one argument: (value)."
      args={["array (Array): The sorted array to inspect.","value (*): The value to evaluate.","[iteratee=_.identity] (Function): The iteratee invoked per element."]}
      returns="(number): Returns the index at which value should be inserted into array."
    />
  );
};

export const sortedLastIndexOf = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="sortedLastIndexOf"
      title="sortedLastIndexOf"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["sortedLastIndexOf"]}
      description="This method is like _.lastIndexOf except that it performs a binary search on a sorted array."
      args={["array (Array): The array to inspect.","value (*): The value to search for."]}
      returns="(number): Returns the index of the matched value, else -1."
    />
  );
};

export const sortedUniq = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="sortedUniq"
      title="sortedUniq"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["sortedUniq"]}
      description="This method is like _.uniq except that it&#39;s designed and optimized for sorted arrays."
      args={["array (Array): The array to inspect."]}
      returns="(Array): Returns the new duplicate free array."
    />
  );
};

export const sortedUniqBy = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="sortedUniqBy"
      title="sortedUniqBy"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["sortedUniqBy"]}
      description="This method is like _.uniqBy except that it&#39;s designed and optimized for sorted arrays."
      args={["array (Array): The array to inspect.","[iteratee] (Function): The iteratee invoked per element."]}
      returns="(Array): Returns the new duplicate free array."
    />
  );
};

export const tail = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="tail"
      title="tail"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["tail"]}
      description="Gets all but the first element of array."
      args={["array (Array): The array to query."]}
      returns="(Array): Returns the slice of array."
    />
  );
};

export const take = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="take"
      title="take"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["take"]}
      description="Creates a slice of array with n elements taken from the beginning."
      args={["array (Array): The array to query.","[n=1] (number): The number of elements to take."]}
      returns="(Array): Returns the slice of array."
    />
  );
};

export const takeRight = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="takeRight"
      title="takeRight"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["takeRight"]}
      description="Creates a slice of array with n elements taken from the end."
      args={["array (Array): The array to query.","[n=1] (number): The number of elements to take."]}
      returns="(Array): Returns the slice of array."
    />
  );
};

export const takeRightWhile = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="takeRightWhile"
      title="takeRightWhile"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["takeRightWhile"]}
      description="Creates a slice of array with elements taken from the end. Elements are taken until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array)."
      args={["array (Array): The array to query.","[predicate=_.identity] (Function): The function invoked per iteration."]}
      returns="(Array): Returns the slice of array."
    />
  );
};

export const takeWhile = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="takeWhile"
      title="takeWhile"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["takeWhile"]}
      description="Creates a slice of array with elements taken from the beginning. Elements are taken until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array)."
      args={["array (Array): The array to query.","[predicate=_.identity] (Function): The function invoked per iteration."]}
      returns="(Array): Returns the slice of array."
    />
  );
};

export const union = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="union"
      title="union"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["union"]}
      description="Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons."
      args={["[arrays] (...Array): The arrays to inspect."]}
      returns="(Array): Returns the new array of combined values."
    />
  );
};

export const unionBy = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="unionBy"
      title="unionBy"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["unionBy"]}
      description="This method is like _.union except that it accepts iteratee which is invoked for each element of each arrays to generate the criterion by which uniqueness is computed. Result values are chosen from the first array in which the value occurs. The iteratee is invoked with one argument:
(value)."
      args={["[arrays] (...Array): The arrays to inspect.","[iteratee=_.identity] (Function): The iteratee invoked per element."]}
      returns="(Array): Returns the new array of combined values."
    />
  );
};

export const unionWith = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="unionWith"
      title="unionWith"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["unionWith"]}
      description="This method is like _.union except that it accepts comparator which is invoked to compare elements of arrays. Result values are chosen from the first array in which the value occurs. The comparator is invoked with two arguments: (arrVal, othVal)."
      args={["[arrays] (...Array): The arrays to inspect.","[comparator] (Function): The comparator invoked per element."]}
      returns="(Array): Returns the new array of combined values."
    />
  );
};

export const uniq = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="uniq"
      title="uniq"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["uniq"]}
      description="Creates a duplicate-free version of an array, using SameValueZero for equality comparisons, in which only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array."
      args={["array (Array): The array to inspect."]}
      returns="(Array): Returns the new duplicate free array."
    />
  );
};

export const uniqBy = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="uniqBy"
      title="uniqBy"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["uniqBy"]}
      description="This method is like _.uniq except that it accepts iteratee which is invoked for each element in array to generate the criterion by which uniqueness is computed. The order of result values is determined by the order they occur in the array. The iteratee is invoked with one argument:
(value)."
      args={["array (Array): The array to inspect.","[iteratee=_.identity] (Function): The iteratee invoked per element."]}
      returns="(Array): Returns the new duplicate free array."
    />
  );
};

export const uniqWith = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="uniqWith"
      title="uniqWith"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["uniqWith"]}
      description="This method is like _.uniq except that it accepts comparator which is invoked to compare elements of array. The order of result values is determined by the order they occur in the array.The comparator is invoked with two arguments: (arrVal, othVal)."
      args={["array (Array): The array to inspect.","[comparator] (Function): The comparator invoked per element."]}
      returns="(Array): Returns the new duplicate free array."
    />
  );
};

export const unzip = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="unzip"
      title="unzip"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["unzip"]}
      description="This method is like _.zip except that it accepts an array of grouped elements and creates an array regrouping the elements to their pre-zip configuration."
      args={["array (Array): The array of grouped elements to process."]}
      returns="(Array): Returns the new array of regrouped elements."
    />
  );
};

export const unzipWith = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="unzipWith"
      title="unzipWith"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["unzipWith"]}
      description="This method is like _.unzip except that it accepts iteratee to specify how regrouped values should be combined. The iteratee is invoked with the elements of each group: (...group)."
      args={["array (Array): The array of grouped elements to process.","[iteratee=_.identity] (Function): The function to combine regrouped values."]}
      returns="(Array): Returns the new array of regrouped elements."
    />
  );
};

export const without = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="without"
      title="without"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["without"]}
      description="Creates an array excluding all given values using SameValueZero for equality comparisons.

Note: Unlike _.pull, this method returns a new array."
      args={["array (Array): The array to inspect.","[values] (...*): The values to exclude."]}
      returns="(Array): Returns the new array of filtered values."
    />
  );
};

export const xor = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="xor"
      title="xor"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["xor"]}
      description="Creates an array of unique values that is the symmetric difference of the given arrays. The order of result values is determined by the order they occur in the arrays."
      args={["[arrays] (...Array): The arrays to inspect."]}
      returns="(Array): Returns the new array of filtered values."
    />
  );
};

export const xorBy = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="xorBy"
      title="xorBy"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["xorBy"]}
      description="This method is like _.xor except that it accepts iteratee which is invoked for each element of each arrays to generate the criterion by which by which they&#39;re compared. The order of result values is determined by the order they occur in the arrays. The iteratee is invoked with one argument: (value)."
      args={["[arrays] (...Array): The arrays to inspect.","[iteratee=_.identity] (Function): The iteratee invoked per element."]}
      returns="(Array): Returns the new array of filtered values."
    />
  );
};

export const xorWith = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="xorWith"
      title="xorWith"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["xorWith"]}
      description="This method is like _.xor except that it accepts comparator which is invoked to compare elements of arrays. The order of result values is determined by the order they occur in the arrays. The comparator is invoked with two arguments: (arrVal, othVal)."
      args={["[arrays] (...Array): The arrays to inspect.","[comparator] (Function): The comparator invoked per element."]}
      returns="(Array): Returns the new array of filtered values."
    />
  );
};

export const zip = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="zip"
      title="zip"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["zip"]}
      description="Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on."
      args={["[arrays] (...Array): The arrays to process."]}
      returns="(Array): Returns the new array of grouped elements."
    />
  );
};

export const zipObject = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="zipObject"
      title="zipObject"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["zipObject"]}
      description="This method is like _.fromPairs except that it accepts two arrays, one of property identifiers and one of corresponding values."
      args={["[props=[]] (Array): The property identifiers.","[values=[]] (Array): The property values."]}
      returns="(Object): Returns the new object."
    />
  );
};

export const zipObjectDeep = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="zipObjectDeep"
      title="zipObjectDeep"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["zipObjectDeep"]}
      description="This method is like _.zipObject except that it supports property paths."
      args={["[props=[]] (Array): The property identifiers.","[values=[]] (Array): The property values."]}
      returns="(Object): Returns the new object."
    />
  );
};

export const zipWith = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;
  return (
    <Template
      method="zipWith"
      title="zipWith"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["zipWith"]}
      description="This method is like _.zip except that it accepts iteratee to specify how grouped values should be combined. The iteratee is invoked with the elements of each group: (...group)."
      args={["[arrays] (...Array): The arrays to process.","[iteratee=_.identity] (Function): The function to combine grouped values."]}
      returns="(Array): Returns the new array of grouped elements."
    />
  );
};