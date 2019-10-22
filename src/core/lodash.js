export default [
  {
    "title": "Array",
    "methods": [
      {
        "title": "_.chunk",
        "id": "chunk",
        "descr": "Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.compact",
        "id": "compact",
        "descr": "Creates an array with all falsey values removed. The values false, null, 0, \"\", undefined, and NaN are falsey.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.concat",
        "id": "concat",
        "descr": "Creates a new array concatenating array with any additional arrays and/or values.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.difference",
        "id": "difference",
        "descr": "Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.\n\nNote: Unlike _.pullAll, this method returns a new array.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.differenceBy",
        "id": "differenceBy",
        "descr": "This method is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument:\n(value).\n\nNote: Unlike _.pullAllBy, this method returns a new array.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.differenceWith",
        "id": "differenceWith",
        "descr": "This method is like _.difference except that it accepts comparator which is invoked to compare elements of array to values. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).\n\nNote: Unlike _.pullAllWith, this method returns a new array.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.drop",
        "id": "drop",
        "descr": "Creates a slice of array with n elements dropped from the beginning.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.dropRight",
        "id": "dropRight",
        "descr": "Creates a slice of array with n elements dropped from the end.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.dropRightWhile",
        "id": "dropRightWhile",
        "descr": "Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.dropWhile",
        "id": "dropWhile",
        "descr": "Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.fill",
        "id": "fill",
        "descr": "Fills elements of array with value from start up to, but not including, end.\n\nNote: This method mutates array.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.findIndex",
        "id": "findIndex",
        "descr": "This method is like _.find except that it returns the index of the first element predicate returns truthy for instead of the element itself.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.findLastIndex",
        "id": "findLastIndex",
        "descr": "This method is like _.findIndex except that it iterates over elements of collection from right to left.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.first -> head",
        "id": "head",
        "descr": "Gets the first element of array.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.flatten",
        "id": "flatten",
        "descr": "Flattens array a single level deep.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.flattenDeep",
        "id": "flattenDeep",
        "descr": "Recursively flattens array.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.flattenDepth",
        "id": "flattenDepth",
        "descr": "Recursively flatten array up to depth times.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.fromPairs",
        "id": "fromPairs",
        "descr": "The inverse of _.toPairs; this method returns an object composed from key-value pairs.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.head",
        "id": "head",
        "descr": "Gets the first element of array.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.indexOf",
        "id": "indexOf",
        "descr": "Gets the index at which the first occurrence of value is found in array using SameValueZero for equality comparisons. If fromIndex is negative, it's used as the offset from the end of array.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.initial",
        "id": "initial",
        "descr": "Gets all but the last element of array.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.intersection",
        "id": "intersection",
        "descr": "Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.intersectionBy",
        "id": "intersectionBy",
        "descr": "This method is like _.intersection except that it accepts iteratee which is invoked for each element of each arrays to generate the criterion by which they're compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument:\n(value).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.intersectionWith",
        "id": "intersectionWith",
        "descr": "This method is like _.intersection except that it accepts comparator which is invoked to compare elements of arrays. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.join",
        "id": "join",
        "descr": "Converts all elements in array into a string separated by separator.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.last",
        "id": "last",
        "descr": "Gets the last element of array.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.lastIndexOf",
        "id": "lastIndexOf",
        "descr": "This method is like _.indexOf except that it iterates over elements of array from right to left.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.nth",
        "id": "nth",
        "descr": "Gets the element at index n of array. If n is negative, the nth element from the end is returned.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.pull",
        "id": "pull",
        "descr": "Removes all given values from array using SameValueZero for equality comparisons.\n\nNote: Unlike _.without, this method mutates array. Use _.remove to remove elements from an array by predicate.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.pullAll",
        "id": "pullAll",
        "descr": "This method is like _.pull except that it accepts an array of values to remove.\n\nNote: Unlike _.difference, this method mutates array.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.pullAllBy",
        "id": "pullAllBy",
        "descr": "This method is like _.pullAll except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The iteratee is invoked with one argument: (value).\n\nNote: Unlike _.differenceBy, this method mutates array.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.pullAllWith",
        "id": "pullAllWith",
        "descr": "This method is like _.pullAll except that it accepts comparator which is invoked to compare elements of array to values. The comparator is invoked with two arguments: (arrVal, othVal).\n\nNote: Unlike _.differenceWith, this method mutates array.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.pullAt",
        "id": "pullAt",
        "descr": "Removes elements from array corresponding to indexes and returns an array of removed elements.\n\nNote: Unlike _.at, this method mutates array.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.remove",
        "id": "remove",
        "descr": "Removes all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with three arguments: (value, index, array).\n\nNote: Unlike _.filter, this method mutates array. Use _.pull to pull elements from an array by value.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.reverse",
        "id": "reverse",
        "descr": "Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.\n\nNote: This method mutates array and is based on Array#reverse.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.slice",
        "id": "slice",
        "descr": "Creates a slice of array from start up to, but not including, end.\n\nNote: This method is used instead of Array#slice to ensure dense arrays are returned.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.sortedIndex",
        "id": "sortedIndex",
        "descr": "Uses a binary search to determine the lowest index at which value should be inserted into array in order to maintain its sort order.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.sortedIndexBy",
        "id": "sortedIndexBy",
        "descr": "This method is like _.sortedIndex except that it accepts iteratee which is invoked for value and each element of array to compute their sort ranking. The iteratee is invoked with one argument: (value).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.sortedIndexOf",
        "id": "sortedIndexOf",
        "descr": "This method is like _.indexOf except that it performs a binary search on a sorted array.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.sortedLastIndex",
        "id": "sortedLastIndex",
        "descr": "This method is like _.sortedIndex except that it returns the highest index at which value should be inserted into array in order to maintain its sort order.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.sortedLastIndexBy",
        "id": "sortedLastIndexBy",
        "descr": "This method is like _.sortedLastIndex except that it accepts iteratee which is invoked for value and each element of array to compute their sort ranking. The iteratee is invoked with one argument: (value).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.sortedLastIndexOf",
        "id": "sortedLastIndexOf",
        "descr": "This method is like _.lastIndexOf except that it performs a binary search on a sorted array.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.sortedUniq",
        "id": "sortedUniq",
        "descr": "This method is like _.uniq except that it's designed and optimized for sorted arrays.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.sortedUniqBy",
        "id": "sortedUniqBy",
        "descr": "This method is like _.uniqBy except that it's designed and optimized for sorted arrays.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.tail",
        "id": "tail",
        "descr": "Gets all but the first element of array.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.take",
        "id": "take",
        "descr": "Creates a slice of array with n elements taken from the beginning.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.takeRight",
        "id": "takeRight",
        "descr": "Creates a slice of array with n elements taken from the end.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.takeRightWhile",
        "id": "takeRightWhile",
        "descr": "Creates a slice of array with elements taken from the end. Elements are taken until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.takeWhile",
        "id": "takeWhile",
        "descr": "Creates a slice of array with elements taken from the beginning. Elements are taken until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.union",
        "id": "union",
        "descr": "Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.unionBy",
        "id": "unionBy",
        "descr": "This method is like _.union except that it accepts iteratee which is invoked for each element of each arrays to generate the criterion by which uniqueness is computed. Result values are chosen from the first array in which the value occurs. The iteratee is invoked with one argument:\n(value).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.unionWith",
        "id": "unionWith",
        "descr": "This method is like _.union except that it accepts comparator which is invoked to compare elements of arrays. Result values are chosen from the first array in which the value occurs. The comparator is invoked with two arguments: (arrVal, othVal).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.uniq",
        "id": "uniq",
        "descr": "Creates a duplicate-free version of an array, using SameValueZero for equality comparisons, in which only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.uniqBy",
        "id": "uniqBy",
        "descr": "This method is like _.uniq except that it accepts iteratee which is invoked for each element in array to generate the criterion by which uniqueness is computed. The order of result values is determined by the order they occur in the array. The iteratee is invoked with one argument:\n(value).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.uniqWith",
        "id": "uniqWith",
        "descr": "This method is like _.uniq except that it accepts comparator which is invoked to compare elements of array. The order of result values is determined by the order they occur in the array.The comparator is invoked with two arguments: (arrVal, othVal).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.unzip",
        "id": "unzip",
        "descr": "This method is like _.zip except that it accepts an array of grouped elements and creates an array regrouping the elements to their pre-zip configuration.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.unzipWith",
        "id": "unzipWith",
        "descr": "This method is like _.unzip except that it accepts iteratee to specify how regrouped values should be combined. The iteratee is invoked with the elements of each group: (...group).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.without",
        "id": "without",
        "descr": "Creates an array excluding all given values using SameValueZero for equality comparisons.\n\nNote: Unlike _.pull, this method returns a new array.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.xor",
        "id": "xor",
        "descr": "Creates an array of unique values that is the symmetric difference of the given arrays. The order of result values is determined by the order they occur in the arrays.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.xorBy",
        "id": "xorBy",
        "descr": "This method is like _.xor except that it accepts iteratee which is invoked for each element of each arrays to generate the criterion by which by which they're compared. The order of result values is determined by the order they occur in the arrays. The iteratee is invoked with one argument: (value).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.xorWith",
        "id": "xorWith",
        "descr": "This method is like _.xor except that it accepts comparator which is invoked to compare elements of arrays. The order of result values is determined by the order they occur in the arrays. The comparator is invoked with two arguments: (arrVal, othVal).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.zip",
        "id": "zip",
        "descr": "Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.zipObject",
        "id": "zipObject",
        "descr": "This method is like _.fromPairs except that it accepts two arrays, one of property identifiers and one of corresponding values.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.zipObjectDeep",
        "id": "zipObjectDeep",
        "descr": "This method is like _.zipObject except that it supports property paths.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.zipWith",
        "id": "zipWith",
        "descr": "This method is like _.zip except that it accepts iteratee to specify how grouped values should be combined. The iteratee is invoked with the elements of each group: (...group).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      }
    ]
  },
  {
    "title": "Collection",
    "methods": [
      {
        "title": "_.countBy",
        "id": "countBy",
        "descr": "Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The corresponding value of each key is the number of times the key was returned by iteratee. The iteratee is invoked with one argument: (value).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.each -> forEach",
        "id": "forEach",
        "descr": "Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.\n\nNote: As with other \"Collections\" methods, objects with a \"length\" property are iterated like arrays. To avoid this behavior use _.forIn or _.forOwn for object iteration.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.eachRight -> forEachRight",
        "id": "forEachRight",
        "descr": "This method is like _.forEach except that it iterates over elements of collection from right to left.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.every",
        "id": "every",
        "descr": "Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).\n\nNote: This method returns true for empty collections because everything is true of elements of empty collections.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.filter",
        "id": "filter",
        "descr": "Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).\n\nNote: Unlike _.remove, this method returns a new array.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.find",
        "id": "find",
        "descr": "Iterates over elements of collection, returning the first element predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.findLast",
        "id": "findLast",
        "descr": "This method is like _.find except that it iterates over elements of collection from right to left.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.flatMap",
        "id": "flatMap",
        "descr": "Creates a flattened array of values by running each element in collection thru iteratee and flattening the mapped results. The iteratee is invoked with three arguments: (value, index|key, collection).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.flatMapDeep",
        "id": "flatMapDeep",
        "descr": "This method is like _.flatMap except that it recursively flattens the mapped results.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.flatMapDepth",
        "id": "flatMapDepth",
        "descr": "This method is like _.flatMap except that it recursively flattens the mapped results up to depth times.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.forEach",
        "id": "forEach",
        "descr": "Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.\n\nNote: As with other \"Collections\" methods, objects with a \"length\" property are iterated like arrays. To avoid this behavior use _.forIn or _.forOwn for object iteration.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.forEachRight",
        "id": "forEachRight",
        "descr": "This method is like _.forEach except that it iterates over elements of collection from right to left.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.groupBy",
        "id": "groupBy",
        "descr": "Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The order of grouped values is determined by the order they occur in collection. The corresponding value of each key is an array of elements responsible for generating the key. The iteratee is invoked with one argument: (value).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.includes",
        "id": "includes",
        "descr": "Checks if value is in collection. If collection is a string, it's checked for a substring of value, otherwise SameValueZero is used for equality comparisons. If fromIndex is negative, it's used as the offset from the end of collection.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.invokeMap",
        "id": "invokeMap",
        "descr": "Invokes the method at path of each element in collection, returning an array of the results of each invoked method. Any additional arguments are provided to each invoked method. If path is a function, it's invoked for, and this bound to, each element in collection.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.keyBy",
        "id": "keyBy",
        "descr": "Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The corresponding value of each key is the last element responsible for generating the key. The iteratee is invoked with one argument: (value).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.map",
        "id": "map",
        "descr": "Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with three arguments:\n(value, index|key, collection).\n\nMany lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues, _.reject, and _.some.\n\nThe guarded methods are:\nary, chunk, curry, curryRight, drop, dropRight, every, fill, invert, parseInt, random, range, rangeRight, repeat, sampleSize, slice, some, sortBy, split, take, takeRight, template, trim, trimEnd, trimStart, and words",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.orderBy",
        "id": "orderBy",
        "descr": "This method is like _.sortBy except that it allows specifying the sort orders of the iteratees to sort by. If orders is unspecified, all values are sorted in ascending order. Otherwise, specify an order of \"desc\" for descending or \"asc\" for ascending sort order of corresponding values.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.partition",
        "id": "partition",
        "descr": "Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for, the second of which contains elements predicate returns falsey for. The predicate is invoked with one argument: (value).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.reduce",
        "id": "reduce",
        "descr": "Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not given, the first element of collection is used as the initial value. The iteratee is invoked with four arguments:\n(accumulator, value, index|key, collection).\n\nMany lodash methods are guarded to work as iteratees for methods like _.reduce, _.reduceRight, and _.transform.\n\nThe guarded methods are:\nassign, defaults, defaultsDeep, includes, merge, orderBy, and sortBy",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.reduceRight",
        "id": "reduceRight",
        "descr": "This method is like _.reduce except that it iterates over elements of collection from right to left.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.reject",
        "id": "reject",
        "descr": "The opposite of _.filter; this method returns the elements of collection that predicate does not return truthy for.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.sample",
        "id": "sample",
        "descr": "Gets a random element from collection.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.sampleSize",
        "id": "sampleSize",
        "descr": "Gets n random elements at unique keys from collection up to the size of collection.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.shuffle",
        "id": "shuffle",
        "descr": "Creates an array of shuffled values, using a version of the Fisher-Yates shuffle.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.size",
        "id": "size",
        "descr": "Gets the size of collection by returning its length for array-like values or the number of own enumerable string keyed properties for objects.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.some",
        "id": "some",
        "descr": "Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate returns truthy. The predicate is invoked with three arguments: (value, index|key, collection).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.sortBy",
        "id": "sortBy",
        "descr": "Creates an array of elements, sorted in ascending order by the results of running each element in a collection thru each iteratee. This method performs a stable sort, that is, it preserves the original sort order of equal elements. The iteratees are invoked with one argument: (value).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      }
    ]
  },
  {
    "title": "Date",
    "methods": [
      {
        "title": "_.now",
        "id": "now",
        "descr": "Gets the timestamp of the number of milliseconds that have elapsed since the Unix epoch (1 January 1970 00:00:00 UTC).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      }
    ]
  },
  {
    "title": "Function",
    "methods": [
      {
        "title": "_.after",
        "id": "after",
        "descr": "The opposite of _.before; this method creates a function that invokes func once it's called n or more times.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.ary",
        "id": "ary",
        "descr": "Creates a function that invokes func, with up to n arguments, ignoring any additional arguments.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.before",
        "id": "before",
        "descr": "Creates a function that invokes func, with the this binding and arguments of the created function, while it's called less than n times. Subsequent calls to the created function return the result of the last func invocation.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.bind",
        "id": "bind",
        "descr": "Creates a function that invokes func with the this binding of thisArg and partials prepended to the arguments it receives.\n\nThe _.bind.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for partially applied arguments.\n\nNote: Unlike native Function#bind, this method doesn't set the \"length\" property of bound functions.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.bindKey",
        "id": "bindKey",
        "descr": "Creates a function that invokes the method at object[key] with partials prepended to the arguments it receives.\n\nThis method differs from _.bind by allowing bound functions to reference methods that may be redefined or don't yet exist. See Peter Michaux's article for more details.\n\nThe _.bindKey.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for partially applied arguments.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.curry",
        "id": "curry",
        "descr": "Creates a function that accepts arguments of func and either invokes func returning its result, if at least arity number of arguments have been provided, or returns a function that accepts the remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.\n\nThe _.curry.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for provided arguments.\n\nNote: This method doesn't set the \"length\" property of curried functions.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.curryRight",
        "id": "curryRight",
        "descr": "This method is like _.curry except that arguments are applied to func in the manner of _.partialRight instead of _.partial.\n\nThe _.curryRight.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for provided arguments.\n\nNote: This method doesn't set the \"length\" property of curried functions.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.debounce",
        "id": "debounce",
        "descr": "Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked. The debounced function comes with a cancel method to cancel delayed func invocations and a flush method to immediately invoke them. Provide options to indicate whether func should be invoked on the leading and/or trailing edge of the wait timeout. The func is invoked with the last arguments provided to the debounced function. Subsequent calls to the debounced function return the result of the last func invocation.\n\nNote: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only if the debounced function is invoked more than once during the wait timeout.\n\nIf wait is 0 and leading is false, func invocation is deferred until to the next tick, similar to setTimeout with a timeout of 0.\n\nSee David Corbacho's article for details over the differences between _.debounce and _.throttle.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.defer",
        "id": "defer",
        "descr": "Defers invoking the func until the current call stack has cleared. Any additional arguments are provided to func when it's invoked.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.delay",
        "id": "delay",
        "descr": "Invokes func after wait milliseconds. Any additional arguments are provided to func when it's invoked.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.flip",
        "id": "flip",
        "descr": "Creates a function that invokes func with arguments reversed.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.memoize",
        "id": "memoize",
        "descr": "Creates a function that memoizes the result of func. If resolver is provided, it determines the cache key for storing the result based on the arguments provided to the memoized function. By default, the first argument provided to the memoized function is used as the map cache key. The func is invoked with the this binding of the memoized function.\n\nNote: The cache is exposed as the cache property on the memoized function. Its creation may be customized by replacing the _.memoize.Cache constructor with one whose instances implement the Map method interface of clear, delete, get, has, and set.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.negate",
        "id": "negate",
        "descr": "Creates a function that negates the result of the predicate func. The func predicate is invoked with the this binding and arguments of the created function.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.once",
        "id": "once",
        "descr": "Creates a function that is restricted to invoking func once. Repeat calls to the function return the value of the first invocation. The func is invoked with the this binding and arguments of the created function.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.overArgs",
        "id": "overArgs",
        "descr": "Creates a function that invokes func with its arguments transformed.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.partial",
        "id": "partial",
        "descr": "Creates a function that invokes func with partials prepended to the arguments it receives. This method is like _.bind except it does not alter the this binding.\n\nThe _.partial.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for partially applied arguments.\n\nNote: This method doesn't set the \"length\" property of partially applied functions.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.partialRight",
        "id": "partialRight",
        "descr": "This method is like _.partial except that partially applied arguments are appended to the arguments it receives.\n\nThe _.partialRight.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for partially applied arguments.\n\nNote: This method doesn't set the \"length\" property of partially applied functions.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.rearg",
        "id": "rearg",
        "descr": "Creates a function that invokes func with arguments arranged according to the specified indexes where the argument value at the first index is provided as the first argument, the argument value at the second index is provided as the second argument, and so on.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.rest",
        "id": "rest",
        "descr": "Creates a function that invokes func with the this binding of the created function and arguments from start and beyond provided as an array.\n\nNote: This method is based on the rest parameter.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.spread",
        "id": "spread",
        "descr": "Creates a function that invokes func with the this binding of the create function and an array of arguments much like Function#apply.\n\nNote: This method is based on the spread operator.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.throttle",
        "id": "throttle",
        "descr": "Creates a throttled function that only invokes func at most once per every wait milliseconds. The throttled function comes with a cancel method to cancel delayed func invocations and a flush method to immediately invoke them. Provide options to indicate whether func should be invoked on the leading and/or trailing edge of the wait timeout. The func is invoked with the last arguments provided to the throttled function. Subsequent calls to the throttled function return the result of the last func invocation.\n\nNote: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only if the throttled function is invoked more than once during the wait timeout.\n\nIf wait is 0 and leading is false, func invocation is deferred until to the next tick, similar to setTimeout with a timeout of 0.\n\nSee David Corbacho's article for details over the differences between _.throttle and _.debounce.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.unary",
        "id": "unary",
        "descr": "Creates a function that accepts up to one argument, ignoring any additional arguments.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.wrap",
        "id": "wrap",
        "descr": "Creates a function that provides value to wrapper as its first argument. Any additional arguments provided to the function are appended to those provided to the wrapper. The wrapper is invoked with the this binding of the created function.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      }
    ]
  },
  {
    "title": "Lang",
    "methods": [
      {
        "title": "_.castArray",
        "id": "castArray",
        "descr": "Casts value as an array if it's not one.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.clone",
        "id": "clone",
        "descr": "Creates a shallow clone of value.\n\nNote: This method is loosely based on the structured clone algorithm and supports cloning arrays, array buffers, booleans, date objects, maps, numbers, Object objects, regexes, sets, strings, symbols, and typed arrays. The own enumerable properties of arguments objects are cloned as plain objects. An empty object is returned for uncloneable values such as error objects, functions, DOM nodes, and WeakMaps.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.cloneDeep",
        "id": "cloneDeep",
        "descr": "This method is like _.clone except that it recursively clones value.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.cloneDeepWith",
        "id": "cloneDeepWith",
        "descr": "This method is like _.cloneWith except that it recursively clones value.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.cloneWith",
        "id": "cloneWith",
        "descr": "This method is like _.clone except that it accepts customizer which is invoked to produce the cloned value. If customizer returns undefined, cloning is handled by the method instead. The customizer is invoked with up to four arguments; (value [, index|key, object, stack]).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.conformsTo",
        "id": "conformsTo",
        "descr": "Checks if object conforms to source by invoking the predicate properties of source with the corresponding property values of object.\n\nNote: This method is equivalent to _.conforms when source is partially applied.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.eq",
        "id": "eq",
        "descr": "Performs a SameValueZero comparison between two values to determine if they are equivalent.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.gt",
        "id": "gt",
        "descr": "Checks if value is greater than other.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.gte",
        "id": "gte",
        "descr": "Checks if value is greater than or equal to other.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isArguments",
        "id": "isArguments",
        "descr": "Checks if value is likely an arguments object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isArray",
        "id": "isArray",
        "descr": "Checks if value is classified as an Array object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isArrayBuffer",
        "id": "isArrayBuffer",
        "descr": "Checks if value is classified as an ArrayBuffer object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isArrayLike",
        "id": "isArrayLike",
        "descr": "Checks if value is array-like. A value is considered array-like if it's not a function and has a value.length that's an integer greater than or equal to 0 and less than or equal to Number.MAX_SAFE_INTEGER.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isArrayLikeObject",
        "id": "isArrayLikeObject",
        "descr": "This method is like _.isArrayLike except that it also checks if value is an object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isBoolean",
        "id": "isBoolean",
        "descr": "Checks if value is classified as a boolean primitive or object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isBuffer",
        "id": "isBuffer",
        "descr": "Checks if value is a buffer.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isDate",
        "id": "isDate",
        "descr": "Checks if value is classified as a Date object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isElement",
        "id": "isElement",
        "descr": "Checks if value is likely a DOM element.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isEmpty",
        "id": "isEmpty",
        "descr": "Checks if value is an empty object, collection, map, or set.\n\nObjects are considered empty if they have no own enumerable string keyed properties.\n\nArray-like values such as arguments objects, arrays, buffers, strings, or jQuery-like collections are considered empty if they have a length of 0. Similarly, maps and sets are considered empty if they have a size of 0.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isEqual",
        "id": "isEqual",
        "descr": "Performs a deep comparison between two values to determine if they are equivalent.\n\nNote: This method supports comparing arrays, array buffers, booleans, date objects, error objects, maps, numbers, Object objects, regexes, sets, strings, symbols, and typed arrays. Object objects are compared by their own, not inherited, enumerable properties. Functions and DOM nodes are compared by strict equality, i.e. ===.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isEqualWith",
        "id": "isEqualWith",
        "descr": "This method is like _.isEqual except that it accepts customizer which is invoked to compare values. If customizer returns undefined, comparisons are handled by the method instead. The customizer is invoked with up to six arguments: (objValue, othValue [, index|key, object, other, stack]).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isError",
        "id": "isError",
        "descr": "Checks if value is an Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, or URIError object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isFinite",
        "id": "isFinite",
        "descr": "Checks if value is a finite primitive number.\n\nNote: This method is based on Number.isFinite.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isFunction",
        "id": "isFunction",
        "descr": "Checks if value is classified as a Function object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isInteger",
        "id": "isInteger",
        "descr": "Checks if value is an integer.\n\nNote: This method is based on Number.isInteger.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isLength",
        "id": "isLength",
        "descr": "Checks if value is a valid array-like length.\n\nNote: This method is loosely based on ToLength.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isMap",
        "id": "isMap",
        "descr": "Checks if value is classified as a Map object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isMatch",
        "id": "isMatch",
        "descr": "Performs a partial deep comparison between object and source to determine if object contains equivalent property values.\n\nNote: This method is equivalent to _.matches when source is partially applied.\n\nPartial comparisons will match empty array and empty object source values against any array or object value, respectively. See _.isEqual for a list of supported value comparisons.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isMatchWith",
        "id": "isMatchWith",
        "descr": "This method is like _.isMatch except that it accepts customizer which is invoked to compare values. If customizer returns undefined, comparisons are handled by the method instead. The customizer is invoked with five arguments: (objValue, srcValue, index|key, object, source).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isNaN",
        "id": "isNaN",
        "descr": "Checks if value is NaN.\n\nNote: This method is based on Number.isNaN and is not the same as global isNaN which returns true for undefined and other non-number values.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isNative",
        "id": "isNative",
        "descr": "Checks if value is a pristine native function.\n\nNote: This method can't reliably detect native functions in the presence of the core-js package because core-js circumvents this kind of detection. Despite multiple requests, the core-js maintainer has made it clear: any attempt to fix the detection will be obstructed. As a result, we're left with little choice but to throw an error. Unfortunately, this also affects packages, like babel-polyfill, which rely on core-js.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isNil",
        "id": "isNil",
        "descr": "Checks if value is null or undefined.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isNull",
        "id": "isNull",
        "descr": "Checks if value is null.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isNumber",
        "id": "isNumber",
        "descr": "Checks if value is classified as a Number primitive or object.\n\nNote: To exclude Infinity, -Infinity, and NaN, which are classified as numbers, use the _.isFinite method.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isObject",
        "id": "isObject",
        "descr": "Checks if value is the language type of Object. (e.g. arrays, functions, objects, regexes, new Number(0), and new String(''))",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isObjectLike",
        "id": "isObjectLike",
        "descr": "Checks if value is object-like. A value is object-like if it's not null and has a typeof result of \"object\".",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isPlainObject",
        "id": "isPlainObject",
        "descr": "Checks if value is a plain object, that is, an object created by the Object constructor or one with a [[Prototype]] of null.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isRegExp",
        "id": "isRegExp",
        "descr": "Checks if value is classified as a RegExp object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isSafeInteger",
        "id": "isSafeInteger",
        "descr": "Checks if value is a safe integer. An integer is safe if it's an IEEE-754 double precision number which isn't the result of a rounded unsafe integer.\n\nNote: This method is based on Number.isSafeInteger.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isSet",
        "id": "isSet",
        "descr": "Checks if value is classified as a Set object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isString",
        "id": "isString",
        "descr": "Checks if value is classified as a String primitive or object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isSymbol",
        "id": "isSymbol",
        "descr": "Checks if value is classified as a Symbol primitive or object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isTypedArray",
        "id": "isTypedArray",
        "descr": "Checks if value is classified as a typed array.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isUndefined",
        "id": "isUndefined",
        "descr": "Checks if value is undefined.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isWeakMap",
        "id": "isWeakMap",
        "descr": "Checks if value is classified as a WeakMap object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.isWeakSet",
        "id": "isWeakSet",
        "descr": "Checks if value is classified as a WeakSet object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.lt",
        "id": "lt",
        "descr": "Checks if value is less than other.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.lte",
        "id": "lte",
        "descr": "Checks if value is less than or equal to other.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.toArray",
        "id": "toArray",
        "descr": "Converts value to an array.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.toFinite",
        "id": "toFinite",
        "descr": "Converts value to a finite number.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.toInteger",
        "id": "toInteger",
        "descr": "Converts value to an integer.\n\nNote: This method is loosely based on ToInteger.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.toLength",
        "id": "toLength",
        "descr": "Converts value to an integer suitable for use as the length of an array-like object.\n\nNote: This method is based on ToLength.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.toNumber",
        "id": "toNumber",
        "descr": "Converts value to a number.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.toPlainObject",
        "id": "toPlainObject",
        "descr": "Converts value to a plain object flattening inherited enumerable string keyed properties of value to own properties of the plain object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.toSafeInteger",
        "id": "toSafeInteger",
        "descr": "Converts value to a safe integer. A safe integer can be compared and represented correctly.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.toString",
        "id": "toString",
        "descr": "Converts value to a string. An empty string is returned for null and undefined values. The sign of -0 is preserved.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      }
    ]
  },
  {
    "title": "Math",
    "methods": [
      {
        "title": "_.add",
        "id": "add",
        "descr": "Adds two numbers.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.ceil",
        "id": "ceil",
        "descr": "Computes number rounded up to precision.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.divide",
        "id": "divide",
        "descr": "Divide two numbers.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.floor",
        "id": "floor",
        "descr": "Computes number rounded down to precision.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.max",
        "id": "max",
        "descr": "Computes the maximum value of array. If array is empty or falsey, undefined is returned.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.maxBy",
        "id": "maxBy",
        "descr": "This method is like _.max except that it accepts iteratee which is invoked for each element in array to generate the criterion by which the value is ranked. The iteratee is invoked with one argument: (value).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.mean",
        "id": "mean",
        "descr": "Computes the mean of the values in array.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.meanBy",
        "id": "meanBy",
        "descr": "This method is like _.mean except that it accepts iteratee which is invoked for each element in array to generate the value to be averaged. The iteratee is invoked with one argument: (value).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.min",
        "id": "min",
        "descr": "Computes the minimum value of array. If array is empty or falsey, undefined is returned.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.minBy",
        "id": "minBy",
        "descr": "This method is like _.min except that it accepts iteratee which is invoked for each element in array to generate the criterion by which the value is ranked. The iteratee is invoked with one argument: (value).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.multiply",
        "id": "multiply",
        "descr": "Multiply two numbers.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.round",
        "id": "round",
        "descr": "Computes number rounded to precision.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.subtract",
        "id": "subtract",
        "descr": "Subtract two numbers.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.sum",
        "id": "sum",
        "descr": "Computes the sum of the values in array.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.sumBy",
        "id": "sumBy",
        "descr": "This method is like _.sum except that it accepts iteratee which is invoked for each element in array to generate the value to be summed. The iteratee is invoked with one argument: (value).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      }
    ]
  },
  {
    "title": "Number",
    "methods": [
      {
        "title": "_.clamp",
        "id": "clamp",
        "descr": "Clamps number within the inclusive lower and upper bounds.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.inRange",
        "id": "inRange",
        "descr": "Checks if n is between start and up to, but not including, end. If end is not specified, it's set to start with start then set to 0. If start is greater than end the params are swapped to support negative ranges.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.random",
        "id": "random",
        "descr": "Produces a random number between the inclusive lower and upper bounds. If only one argument is provided a number between 0 and the given number is returned. If floating is true, or either lower or upper are floats, a floating-point number is returned instead of an integer.\n\nNote: JavaScript follows the IEEE-754 standard for resolving floating-point values which can produce unexpected results.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      }
    ]
  },
  {
    "title": "Object",
    "methods": [
      {
        "title": "_.assign",
        "id": "assign",
        "descr": "Assigns own enumerable string keyed properties of source objects to the destination object. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources.\n\nNote: This method mutates object and is loosely based on Object.assign.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.assignIn",
        "id": "assignIn",
        "descr": "This method is like _.assign except that it iterates over own and inherited source properties.\n\nNote: This method mutates object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.assignInWith",
        "id": "assignInWith",
        "descr": "This method is like _.assignIn except that it accepts customizer which is invoked to produce the assigned values. If customizer returns undefined, assignment is handled by the method instead. The customizer is invoked with five arguments: (objValue, srcValue, key, object, source).\n\nNote: This method mutates object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.assignWith",
        "id": "assignWith",
        "descr": "This method is like _.assign except that it accepts customizer which is invoked to produce the assigned values. If customizer returns undefined, assignment is handled by the method instead. The customizer is invoked with five arguments: (objValue, srcValue, key, object, source).\n\nNote: This method mutates object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.at",
        "id": "at",
        "descr": "Creates an array of values corresponding to paths of object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.create",
        "id": "create",
        "descr": "Creates an object that inherits from the prototype object. If a properties object is given, its own enumerable string keyed properties are assigned to the created object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.defaults",
        "id": "defaults",
        "descr": "Assigns own and inherited enumerable string keyed properties of source objects to the destination object for all destination properties that resolve to undefined. Source objects are applied from left to right. Once a property is set, additional values of the same property are ignored.\n\nNote: This method mutates object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.defaultsDeep",
        "id": "defaultsDeep",
        "descr": "This method is like _.defaults except that it recursively assigns default properties.\n\nNote: This method mutates object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.entries -> toPairs",
        "id": "toPairs",
        "descr": "Creates an array of own enumerable string keyed-value pairs for object which can be consumed by _.fromPairs. If object is a map or set, its entries are returned.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.entriesIn -> toPairsIn",
        "id": "toPairsIn",
        "descr": "Creates an array of own and inherited enumerable string keyed-value pairs for object which can be consumed by _.fromPairs. If object is a map or set, its entries are returned.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.extend -> assignIn",
        "id": "assignIn",
        "descr": "This method is like _.assign except that it iterates over own and inherited source properties.\n\nNote: This method mutates object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.extendWith -> assignInWith",
        "id": "assignInWith",
        "descr": "This method is like _.assignIn except that it accepts customizer which is invoked to produce the assigned values. If customizer returns undefined, assignment is handled by the method instead. The customizer is invoked with five arguments: (objValue, srcValue, key, object, source).\n\nNote: This method mutates object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.findKey",
        "id": "findKey",
        "descr": "This method is like _.find except that it returns the key of the first element predicate returns truthy for instead of the element itself.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.findLastKey",
        "id": "findLastKey",
        "descr": "This method is like _.findKey except that it iterates over elements of a collection in the opposite order.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.forIn",
        "id": "forIn",
        "descr": "Iterates over own and inherited enumerable string keyed properties of an object and invokes iteratee for each property. The iteratee is invoked with three arguments: (value, key, object). Iteratee functions may exit iteration early by explicitly returning false.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.forInRight",
        "id": "forInRight",
        "descr": "This method is like _.forIn except that it iterates over properties of object in the opposite order.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.forOwn",
        "id": "forOwn",
        "descr": "Iterates over own enumerable string keyed properties of an object and invokes iteratee for each property. The iteratee is invoked with three arguments: (value, key, object). Iteratee functions may exit iteration early by explicitly returning false.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.forOwnRight",
        "id": "forOwnRight",
        "descr": "This method is like _.forOwn except that it iterates over properties of object in the opposite order.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.functions",
        "id": "functions",
        "descr": "Creates an array of function property names from own enumerable properties of object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.functionsIn",
        "id": "functionsIn",
        "descr": "Creates an array of function property names from own and inherited enumerable properties of object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.get",
        "id": "get",
        "descr": "Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.has",
        "id": "has",
        "descr": "Checks if path is a direct property of object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.hasIn",
        "id": "hasIn",
        "descr": "Checks if path is a direct or inherited property of object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.invert",
        "id": "invert",
        "descr": "Creates an object composed of the inverted keys and values of object. If object contains duplicate values, subsequent values overwrite property assignments of previous values.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.invertBy",
        "id": "invertBy",
        "descr": "This method is like _.invert except that the inverted object is generated from the results of running each element of object thru iteratee. The corresponding inverted value of each inverted key is an array of keys responsible for generating the inverted value. The iteratee is invoked with one argument: (value).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.invoke",
        "id": "invoke",
        "descr": "Invokes the method at path of object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.keys",
        "id": "keys",
        "descr": "Creates an array of the own enumerable property names of object.\n\nNote: Non-object values are coerced to objects. See the ES spec for more details.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.keysIn",
        "id": "keysIn",
        "descr": "Creates an array of the own and inherited enumerable property names of object.\n\nNote: Non-object values are coerced to objects.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.mapKeys",
        "id": "mapKeys",
        "descr": "The opposite of _.mapValues; this method creates an object with the same values as object and keys generated by running each own enumerable string keyed property of object thru iteratee. The iteratee is invoked with three arguments: (value, key, object).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.mapValues",
        "id": "mapValues",
        "descr": "Creates an object with the same keys as object and values generated by running each own enumerable string keyed property of object thru iteratee. The iteratee is invoked with three arguments:\n(value, key, object).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.merge",
        "id": "merge",
        "descr": "This method is like _.assign except that it recursively merges own and inherited enumerable string keyed properties of source objects into the destination object. Source properties that resolve to undefined are skipped if a destination value exists. Array and plain object properties are merged recursively. Other objects and value types are overridden by assignment. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources.\n\nNote: This method mutates object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.mergeWith",
        "id": "mergeWith",
        "descr": "This method is like _.merge except that it accepts customizer which is invoked to produce the merged values of the destination and source properties. If customizer returns undefined, merging is handled by the method instead. The customizer is invoked with six arguments:\n(objValue, srcValue, key, object, source, stack).\n\nNote: This method mutates object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.omit",
        "id": "omit",
        "descr": "The opposite of _.pick; this method creates an object composed of the own and inherited enumerable property paths of object that are not omitted.\n\nNote: This method is considerably slower than _.pick.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.omitBy",
        "id": "omitBy",
        "descr": "The opposite of _.pickBy; this method creates an object composed of the own and inherited enumerable string keyed properties of object that predicate doesn't return truthy for. The predicate is invoked with two arguments: (value, key).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.pick",
        "id": "pick",
        "descr": "Creates an object composed of the picked object properties.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.pickBy",
        "id": "pickBy",
        "descr": "Creates an object composed of the object properties predicate returns truthy for. The predicate is invoked with two arguments: (value, key).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.result",
        "id": "result",
        "descr": "This method is like _.get except that if the resolved value is a function it's invoked with the this binding of its parent object and its result is returned.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.set",
        "id": "set",
        "descr": "Sets the value at path of object. If a portion of path doesn't exist, it's created. Arrays are created for missing index properties while objects are created for all other missing properties. Use _.setWith to customize path creation.\n\nNote: This method mutates object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.setWith",
        "id": "setWith",
        "descr": "This method is like _.set except that it accepts customizer which is invoked to produce the objects of path. If customizer returns undefined path creation is handled by the method instead. The customizer is invoked with three arguments: (nsValue, key, nsObject).\n\nNote: This method mutates object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.toPairs",
        "id": "toPairs",
        "descr": "Creates an array of own enumerable string keyed-value pairs for object which can be consumed by _.fromPairs. If object is a map or set, its entries are returned.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.toPairsIn",
        "id": "toPairsIn",
        "descr": "Creates an array of own and inherited enumerable string keyed-value pairs for object which can be consumed by _.fromPairs. If object is a map or set, its entries are returned.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.transform",
        "id": "transform",
        "descr": "An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of running each of its own enumerable string keyed properties thru iteratee, with each invocation potentially mutating the accumulator object. If accumulator is not provided, a new object with the same [[Prototype]] will be used. The iteratee is invoked with four arguments: (accumulator, value, key, object). Iteratee functions may exit iteration early by explicitly returning false.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.unset",
        "id": "unset",
        "descr": "Removes the property at path of object.\n\nNote: This method mutates object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.update",
        "id": "update",
        "descr": "This method is like _.set except that accepts updater to produce the value to set. Use _.updateWith to customize path creation. The updater is invoked with one argument: (value).\n\nNote: This method mutates object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.updateWith",
        "id": "updateWith",
        "descr": "This method is like _.update except that it accepts customizer which is invoked to produce the objects of path. If customizer returns undefined path creation is handled by the method instead. The customizer is invoked with three arguments: (nsValue, key, nsObject).\n\nNote: This method mutates object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.values",
        "id": "values",
        "descr": "Creates an array of the own enumerable string keyed property values of object.\n\nNote: Non-object values are coerced to objects.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.valuesIn",
        "id": "valuesIn",
        "descr": "Creates an array of the own and inherited enumerable string keyed property values of object.\n\nNote: Non-object values are coerced to objects.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      }
    ]
  },
  {
    "title": "Seq",
    "methods": [
      {
        "title": "_",
        "id": "lodash",
        "descr": "Creates a lodash object which wraps value to enable implicit method chain sequences. Methods that operate on and return arrays, collections, and functions can be chained together. Methods that retrieve a single value or may return a primitive value will automatically end the chain sequence and return the unwrapped value. Otherwise, the value must be unwrapped with _#value.\n\nExplicit chain sequences, which must be unwrapped with _#value, may be enabled using _.chain.\n\nThe execution of chained methods is lazy, that is, it's deferred until _#value is implicitly or explicitly called.\n\nLazy evaluation allows several methods to support shortcut fusion. Shortcut fusion is an optimization to merge iteratee calls; this avoids the creation of intermediate arrays and can greatly reduce the number of iteratee executions. Sections of a chain sequence qualify for shortcut fusion if the section is applied to an array and iteratees accept only one argument. The heuristic for whether a section qualifies for shortcut fusion is subject to change.\n\nChaining is supported in custom builds as long as the _#value method is directly or indirectly included in the build.\n\nIn addition to lodash methods, wrappers have Array and String methods.\n\nThe wrapper Array methods are:\nconcat, join, pop, push, shift, sort, splice, and unshift\n\nThe wrapper String methods are:\nreplace and split\n\nThe wrapper methods that support shortcut fusion are:\nat, compact, drop, dropRight, dropWhile, filter, find, findLast, head, initial, last, map, reject, reverse, slice, tail, take, takeRight, takeRightWhile, takeWhile, and toArray\n\nThe chainable wrapper methods are:\nafter, ary, assign, assignIn, assignInWith, assignWith, at, before, bind, bindAll, bindKey, castArray, chain, chunk, commit, compact, concat, conforms, constant, countBy, create, curry, debounce, defaults, defaultsDeep, defer, delay, difference, differenceBy, differenceWith, drop, dropRight, dropRightWhile, dropWhile, extend, extendWith, fill, filter, flatMap, flatMapDeep, flatMapDepth, flatten, flattenDeep, flattenDepth, flip, flow, flowRight, fromPairs, functions, functionsIn, groupBy, initial, intersection, intersectionBy, intersectionWith, invert, invertBy, invokeMap, iteratee, keyBy, keys, keysIn, map, mapKeys, mapValues, matches, matchesProperty, memoize, merge, mergeWith, method, methodOf, mixin, negate, nthArg, omit, omitBy, once, orderBy, over, overArgs, overEvery, overSome, partial, partialRight, partition, pick, pickBy, plant, property, propertyOf, pull, pullAll, pullAllBy, pullAllWith, pullAt, push, range, rangeRight, rearg, reject, remove, rest, reverse, sampleSize, set, setWith, shuffle, slice, sort, sortBy, splice, spread, tail, take, takeRight, takeRightWhile, takeWhile, tap, throttle, thru, toArray, toPairs, toPairsIn, toPath, toPlainObject, transform, unary, union, unionBy, unionWith, uniq, uniqBy, uniqWith, unset, unshift, unzip, unzipWith, update, updateWith, values, valuesIn, without, wrap, xor, xorBy, xorWith, zip, zipObject, zipObjectDeep, and zipWith\n\nThe wrapper methods that are not chainable by default are:\nadd, attempt, camelCase, capitalize, ceil, clamp, clone, cloneDeep, cloneDeepWith, cloneWith, conformsTo, deburr, defaultTo, divide, each, eachRight, endsWith, eq, escape, escapeRegExp, every, find, findIndex, findKey, findLast, findLastIndex, findLastKey, first, floor, forEach, forEachRight, forIn, forInRight, forOwn, forOwnRight, get, gt, gte, has, hasIn, head, identity, includes, indexOf, inRange, invoke, isArguments, isArray, isArrayBuffer, isArrayLike, isArrayLikeObject, isBoolean, isBuffer, isDate, isElement, isEmpty, isEqual, isEqualWith, isError, isFinite, isFunction, isInteger, isLength, isMap, isMatch, isMatchWith, isNaN, isNative, isNil, isNull, isNumber, isObject, isObjectLike, isPlainObject, isRegExp, isSafeInteger, isSet, isString, isUndefined, isTypedArray, isWeakMap, isWeakSet, join, kebabCase, last, lastIndexOf, lowerCase, lowerFirst, lt, lte, max, maxBy, mean, meanBy, min, minBy, multiply, noConflict, noop, now, nth, pad, padEnd, padStart, parseInt, pop, random, reduce, reduceRight, repeat, result, round, runInContext, sample, shift, size, snakeCase, some, sortedIndex, sortedIndexBy, sortedLastIndex, sortedLastIndexBy, startCase, startsWith, stubArray, stubFalse, stubObject, stubString, stubTrue, subtract, sum, sumBy, template, times, toFinite, toInteger, toJSON, toLength, toLower, toNumber, toSafeInteger, toString, toUpper, trim, trimEnd, trimStart, truncate, unescape, uniqueId, upperCase, upperFirst, value, and words",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.chain",
        "id": "chain",
        "descr": "Creates a lodash wrapper instance that wraps value with explicit method chain sequences enabled. The result of such sequences must be unwrapped with _#value.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.tap",
        "id": "tap",
        "descr": "This method invokes interceptor and returns value. The interceptor is invoked with one argument; (value). The purpose of this method is to \"tap into\" a method chain sequence in order to modify intermediate results.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.thru",
        "id": "thru",
        "descr": "This method is like _.tap except that it returns the result of interceptor. The purpose of this method is to \"pass thru\" values replacing intermediate results in a method chain sequence.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.prototype[Symbol.iterator]",
        "id": "prototype-Symbol-iterator",
        "descr": "Enables the wrapper to be iterable.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.prototype.at",
        "id": "prototype-at",
        "descr": "This method is the wrapper version of _.at.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.prototype.chain",
        "id": "prototype-chain",
        "descr": "Creates a lodash wrapper instance with explicit method chain sequences enabled.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.prototype.commit",
        "id": "prototype-commit",
        "descr": "Executes the chain sequence and returns the wrapped result.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.prototype.next",
        "id": "prototype-next",
        "descr": "Gets the next value on a wrapped object following the iterator protocol.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.prototype.plant",
        "id": "prototype-plant",
        "descr": "Creates a clone of the chain sequence planting value as the wrapped value.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.prototype.reverse",
        "id": "prototype-reverse",
        "descr": "This method is the wrapper version of _.reverse.\n\nNote: This method mutates the wrapped array.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.prototype.toJSON -> value",
        "id": "prototype-value",
        "descr": "Executes the chain sequence to resolve the unwrapped value.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.prototype.value",
        "id": "prototype-value",
        "descr": "Executes the chain sequence to resolve the unwrapped value.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.prototype.valueOf -> value",
        "id": "prototype-value",
        "descr": "Executes the chain sequence to resolve the unwrapped value.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      }
    ]
  },
  {
    "title": "String",
    "methods": [
      {
        "title": "_.camelCase",
        "id": "camelCase",
        "descr": "Converts string to camel case.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.capitalize",
        "id": "capitalize",
        "descr": "Converts the first character of string to upper case and the remaining to lower case.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.deburr",
        "id": "deburr",
        "descr": "Deburrs string by converting Latin-1 Supplement and Latin Extended-A letters to basic Latin letters and removing combining diacritical marks.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.endsWith",
        "id": "endsWith",
        "descr": "Checks if string ends with the given target string.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.escape",
        "id": "escape",
        "descr": "Converts the characters \"&\", \"<\", \">\", '\"', and \"'\" in string to their corresponding HTML entities.\n\nNote: No other characters are escaped. To escape additional characters use a third-party library like he.\n\nThough the \">\" character is escaped for symmetry, characters like \">\" and \"/\" don't need escaping in HTML and have no special meaning unless they're part of a tag or unquoted attribute value. See Mathias Bynens's article (under \"semi-related fun fact\") for more details.\n\nWhen working with HTML you should always quote attribute values to reduce XSS vectors.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.escapeRegExp",
        "id": "escapeRegExp",
        "descr": "Escapes the RegExp special characters \"^\", \"$\", \"\", \".\", \"*\", \"+\", \"?\", \"(\", \")\", \"[\", \"]\", \"{\", \"}\", and \"|\" in string.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.kebabCase",
        "id": "kebabCase",
        "descr": "Converts string to kebab case.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.lowerCase",
        "id": "lowerCase",
        "descr": "Converts string, as space separated words, to lower case.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.lowerFirst",
        "id": "lowerFirst",
        "descr": "Converts the first character of string to lower case.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.pad",
        "id": "pad",
        "descr": "Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.padEnd",
        "id": "padEnd",
        "descr": "Pads string on the right side if it's shorter than length. Padding characters are truncated if they exceed length.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.padStart",
        "id": "padStart",
        "descr": "Pads string on the left side if it's shorter than length. Padding characters are truncated if they exceed length.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.parseInt",
        "id": "parseInt",
        "descr": "Converts string to an integer of the specified radix. If radix is undefined or 0, a radix of 10 is used unless value is a hexadecimal, in which case a radix of 16 is used.\n\nNote: This method aligns with the ES5 implementation of parseInt.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.repeat",
        "id": "repeat",
        "descr": "Repeats the given string n times.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.replace",
        "id": "replace",
        "descr": "Replaces matches for pattern in string with replacement.\n\nNote: This method is based on String#replace.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.snakeCase",
        "id": "snakeCase",
        "descr": "Converts string to snake case.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.split",
        "id": "split",
        "descr": "Splits string by separator.\n\nNote: This method is based on String#split.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.startCase",
        "id": "startCase",
        "descr": "Converts string to start case.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.startsWith",
        "id": "startsWith",
        "descr": "Checks if string starts with the given target string.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.template",
        "id": "template",
        "descr": "Creates a compiled template function that can interpolate data properties in \"interpolate\" delimiters, HTML-escape interpolated data properties in \"escape\" delimiters, and execute JavaScript in \"evaluate\" delimiters. Data properties may be accessed as free variables in the template. If a setting object is given, it takes precedence over _.templateSettings values.\n\nNote: In the development build _.template utilizes sourceURLs for easier debugging.\n\nFor more information on precompiling templates see lodash's custom builds documentation.\n\nFor more information on Chrome extension sandboxes see Chrome's extensions documentation.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.toLower",
        "id": "toLower",
        "descr": "Converts string, as a whole, to lower case just like String#toLowerCase.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.toUpper",
        "id": "toUpper",
        "descr": "Converts string, as a whole, to upper case just like String#toUpperCase.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.trim",
        "id": "trim",
        "descr": "Removes leading and trailing whitespace or specified characters from string.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.trimEnd",
        "id": "trimEnd",
        "descr": "Removes trailing whitespace or specified characters from string.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.trimStart",
        "id": "trimStart",
        "descr": "Removes leading whitespace or specified characters from string.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.truncate",
        "id": "truncate",
        "descr": "Truncates string if it's longer than the given maximum string length. The last characters of the truncated string are replaced with the omission string which defaults to \"...\".",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.unescape",
        "id": "unescape",
        "descr": "The inverse of _.escape; this method converts the HTML entities &amp;, &lt;, &gt;, &quot;, and &#39; in string to their corresponding characters.\n\nNote: No other HTML entities are unescaped. To unescape additional HTML entities use a third-party library like he.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.upperCase",
        "id": "upperCase",
        "descr": "Converts string, as space separated words, to upper case.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.upperFirst",
        "id": "upperFirst",
        "descr": "Converts the first character of string to upper case.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.words",
        "id": "words",
        "descr": "Splits string into an array of its words.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      }
    ]
  },
  {
    "title": "Util",
    "methods": [
      {
        "title": "_.attempt",
        "id": "attempt",
        "descr": "Attempts to invoke func, returning either the result or the caught error object. Any additional arguments are provided to func when it's invoked.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.bindAll",
        "id": "bindAll",
        "descr": "Binds methods of an object to the object itself, overwriting the existing method.\n\nNote: This method doesn't set the \"length\" property of bound functions.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.cond",
        "id": "cond",
        "descr": "Creates a function that iterates over pairs and invokes the corresponding function of the first predicate to return truthy. The predicate-function pairs are invoked with the this binding and arguments of the created function.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.conforms",
        "id": "conforms",
        "descr": "Creates a function that invokes the predicate properties of source with the corresponding property values of a given object, returning true if all predicates return truthy, else false.\n\nNote: The created function is equivalent to _.conformsTo with source partially applied.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.constant",
        "id": "constant",
        "descr": "Creates a function that returns value.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.defaultTo",
        "id": "defaultTo",
        "descr": "Checks value to determine whether a default value should be returned in its place. The defaultValue is returned if value is NaN, null, or undefined.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.flow",
        "id": "flow",
        "descr": "Creates a function that returns the result of invoking the given functions with the this binding of the created function, where each successive invocation is supplied the return value of the previous.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.flowRight",
        "id": "flowRight",
        "descr": "This method is like _.flow except that it creates a function that invokes the given functions from right to left.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.identity",
        "id": "identity",
        "descr": "This method returns the first argument it receives.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.iteratee",
        "id": "iteratee",
        "descr": "Creates a function that invokes func with the arguments of the created function. If func is a property name, the created function returns the property value for a given element. If func is an array or object, the created function returns true for elements that contain the equivalent source properties, otherwise it returns false.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.matches",
        "id": "matches",
        "descr": "Creates a function that performs a partial deep comparison between a given object and source, returning true if the given object has equivalent property values, else false.\n\nNote: The created function is equivalent to _.isMatch with source partially applied.\n\nPartial comparisons will match empty array and empty object source values against any array or object value, respectively. See _.isEqual for a list of supported value comparisons.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.matchesProperty",
        "id": "matchesProperty",
        "descr": "Creates a function that performs a partial deep comparison between the value at path of a given object to srcValue, returning true if the object value is equivalent, else false.\n\nNote: Partial comparisons will match empty array and empty object srcValue values against any array or object value, respectively. See _.isEqual for a list of supported value comparisons.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.method",
        "id": "method",
        "descr": "Creates a function that invokes the method at path of a given object. Any additional arguments are provided to the invoked method.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.methodOf",
        "id": "methodOf",
        "descr": "The opposite of _.method; this method creates a function that invokes the method at a given path of object. Any additional arguments are provided to the invoked method.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.mixin",
        "id": "mixin",
        "descr": "Adds all own enumerable string keyed function properties of a source object to the destination object. If object is a function, then methods are added to its prototype as well.\n\nNote: Use _.runInContext to create a pristine lodash function to avoid conflicts caused by modifying the original.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.noConflict",
        "id": "noConflict",
        "descr": "Reverts the _ variable to its previous value and returns a reference to the lodash function.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.noop",
        "id": "noop",
        "descr": "This method returns undefined.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.nthArg",
        "id": "nthArg",
        "descr": "Creates a function that gets the argument at index n. If n is negative, the nth argument from the end is returned.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.over",
        "id": "over",
        "descr": "Creates a function that invokes iteratees with the arguments it receives and returns their results.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.overEvery",
        "id": "overEvery",
        "descr": "Creates a function that checks if all of the predicates return truthy when invoked with the arguments it receives.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.overSome",
        "id": "overSome",
        "descr": "Creates a function that checks if any of the predicates return truthy when invoked with the arguments it receives.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.property",
        "id": "property",
        "descr": "Creates a function that returns the value at path of a given object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.propertyOf",
        "id": "propertyOf",
        "descr": "The opposite of _.property; this method creates a function that returns the value at a given path of object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.range",
        "id": "range",
        "descr": "Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end. A step of -1 is used if a negative start is specified without an end or step. If end is not specified, it's set to start with start then set to 0.\n\nNote: JavaScript follows the IEEE-754 standard for resolving floating-point values which can produce unexpected results.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.rangeRight",
        "id": "rangeRight",
        "descr": "This method is like _.range except that it populates values in descending order.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.runInContext",
        "id": "runInContext",
        "descr": "Create a new pristine lodash function using the context object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.stubArray",
        "id": "stubArray",
        "descr": "This method returns a new empty array.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.stubFalse",
        "id": "stubFalse",
        "descr": "This method returns false.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.stubObject",
        "id": "stubObject",
        "descr": "This method returns a new empty object.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.stubString",
        "id": "stubString",
        "descr": "This method returns an empty string.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.stubTrue",
        "id": "stubTrue",
        "descr": "This method returns true.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.times",
        "id": "times",
        "descr": "Invokes the iteratee n times, returning an array of the results of each invocation. The iteratee is invoked with one argument; (index).",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.toPath",
        "id": "toPath",
        "descr": "Converts value to a property path array.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.uniqueId",
        "id": "uniqueId",
        "descr": "Generates a unique ID. If prefix is given, the ID is appended to it.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      }
    ]
  },
  {
    "title": "Properties",
    "methods": [
      {
        "title": "_.VERSION",
        "id": "VERSION",
        "descr": "(string): The semantic version number.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.templateSettings",
        "id": "templateSettings",
        "descr": "(Object): By default, the template delimiters used by lodash are like those in embedded Ruby (ERB) as well as ES2015 template strings. Change the following template settings to use alternative delimiters.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.templateSettings.escape",
        "id": "templateSettings-escape",
        "descr": "(RegExp): Used to detect data property values to be HTML-escaped.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.templateSettings.evaluate",
        "id": "templateSettings-evaluate",
        "descr": "(RegExp): Used to detect code to be evaluated.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.templateSettings.imports",
        "id": "templateSettings-imports",
        "descr": "(Object): Used to import variables into the compiled template.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.templateSettings.interpolate",
        "id": "templateSettings-interpolate",
        "descr": "(RegExp): Used to detect data property values to inject.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      },
      {
        "title": "_.templateSettings.variable",
        "id": "templateSettings-variable",
        "descr": "(string): Used to reference the data object in the template text.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      }
    ]
  },
  {
    "title": "Methods",
    "methods": [
      {
        "title": "_.templateSettings.imports._",
        "id": "templateSettings-imports-_",
        "descr": "A reference to the lodash function.",
        "args": [
          "array (Array): The array to process.",
          "[size=1] (number): The length of each chunk"
        ],
        "returns": "(Array): Returns the new array of chunks."
      }
    ]
  },
  {
    "title": null,
    "methods": []
  }
]