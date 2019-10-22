import React from 'react';
import { Template } from '../../core/template';

export default { title: 'Lang' };


export const castArray = () => {
  const source = `// source here`;
  return (
    <Template
      method='castArray'
      title='castArray'
      codeSource={source}
      dependencies={["castArray"]}
      description="Casts value as an array if it&#39;s not one."
      args={["value (*): The value to inspect."]}
      returns="(Array): Returns the cast array."
    />
  );
};

export const clone = () => {
  const source = `// source here`;
  return (
    <Template
      method='clone'
      title='clone'
      codeSource={source}
      dependencies={["clone"]}
      description="Creates a shallow clone of value.

Note: This method is loosely based on the structured clone algorithm and supports cloning arrays, array buffers, booleans, date objects, maps, numbers, Object objects, regexes, sets, strings, symbols, and typed arrays. The own enumerable properties of arguments objects are cloned as plain objects. An empty object is returned for uncloneable values such as error objects, functions, DOM nodes, and WeakMaps."
      args={["value (*): The value to clone."]}
      returns="(*): Returns the cloned value."
    />
  );
};

export const cloneDeep = () => {
  const source = `// source here`;
  return (
    <Template
      method='cloneDeep'
      title='cloneDeep'
      codeSource={source}
      dependencies={["cloneDeep"]}
      description="This method is like _.clone except that it recursively clones value."
      args={["value (*): The value to recursively clone."]}
      returns="(*): Returns the deep cloned value."
    />
  );
};

export const cloneDeepWith = () => {
  const source = `// source here`;
  return (
    <Template
      method='cloneDeepWith'
      title='cloneDeepWith'
      codeSource={source}
      dependencies={["cloneDeepWith"]}
      description="This method is like _.cloneWith except that it recursively clones value."
      args={["value (*): The value to recursively clone.","[customizer] (Function): The function to customize cloning."]}
      returns="(*): Returns the deep cloned value."
    />
  );
};

export const cloneWith = () => {
  const source = `// source here`;
  return (
    <Template
      method='cloneWith'
      title='cloneWith'
      codeSource={source}
      dependencies={["cloneWith"]}
      description="This method is like _.clone except that it accepts customizer which is invoked to produce the cloned value. If customizer returns undefined, cloning is handled by the method instead. The customizer is invoked with up to four arguments; (value [, index|key, object, stack])."
      args={["value (*): The value to clone.","[customizer] (Function): The function to customize cloning."]}
      returns="(*): Returns the cloned value."
    />
  );
};

export const conformsTo = () => {
  const source = `// source here`;
  return (
    <Template
      method='conformsTo'
      title='conformsTo'
      codeSource={source}
      dependencies={["conformsTo"]}
      description="Checks if object conforms to source by invoking the predicate properties of source with the corresponding property values of object.

Note: This method is equivalent to _.conforms when source is partially applied."
      args={["object (Object): The object to inspect.","source (Object): The object of property predicates to conform to."]}
      returns="(boolean): Returns true if object conforms, else false."
    />
  );
};

export const eq = () => {
  const source = `// source here`;
  return (
    <Template
      method='eq'
      title='eq'
      codeSource={source}
      dependencies={["eq"]}
      description="Performs a SameValueZero comparison between two values to determine if they are equivalent."
      args={["value (*): The value to compare.","other (*): The other value to compare."]}
      returns="(boolean): Returns true if the values are equivalent, else false."
    />
  );
};

export const gt = () => {
  const source = `// source here`;
  return (
    <Template
      method='gt'
      title='gt'
      codeSource={source}
      dependencies={["gt"]}
      description="Checks if value is greater than other."
      args={["value (*): The value to compare.","other (*): The other value to compare."]}
      returns="(boolean): Returns true if value is greater than other, else false."
    />
  );
};

export const gte = () => {
  const source = `// source here`;
  return (
    <Template
      method='gte'
      title='gte'
      codeSource={source}
      dependencies={["gte"]}
      description="Checks if value is greater than or equal to other."
      args={["value (*): The value to compare.","other (*): The other value to compare."]}
      returns="(boolean): Returns true if value is greater than or equal to other, else false."
    />
  );
};

export const isArguments = () => {
  const source = `// source here`;
  return (
    <Template
      method='isArguments'
      title='isArguments'
      codeSource={source}
      dependencies={["isArguments"]}
      description="Checks if value is likely an arguments object."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is an arguments object, else false."
    />
  );
};

export const isArray = () => {
  const source = `// source here`;
  return (
    <Template
      method='isArray'
      title='isArray'
      codeSource={source}
      dependencies={["isArray"]}
      description="Checks if value is classified as an Array object."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is an array, else false."
    />
  );
};

export const isArrayBuffer = () => {
  const source = `// source here`;
  return (
    <Template
      method='isArrayBuffer'
      title='isArrayBuffer'
      codeSource={source}
      dependencies={["isArrayBuffer"]}
      description="Checks if value is classified as an ArrayBuffer object."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is an array buffer, else false."
    />
  );
};

export const isArrayLike = () => {
  const source = `// source here`;
  return (
    <Template
      method='isArrayLike'
      title='isArrayLike'
      codeSource={source}
      dependencies={["isArrayLike"]}
      description="Checks if value is array-like. A value is considered array-like if it&#39;s not a function and has a value.length that&#39;s an integer greater than or equal to 0 and less than or equal to Number.MAX_SAFE_INTEGER."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is array-like, else false."
    />
  );
};

export const isArrayLikeObject = () => {
  const source = `// source here`;
  return (
    <Template
      method='isArrayLikeObject'
      title='isArrayLikeObject'
      codeSource={source}
      dependencies={["isArrayLikeObject"]}
      description="This method is like _.isArrayLike except that it also checks if value is an object."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is an array-like object, else false."
    />
  );
};

export const isBoolean = () => {
  const source = `// source here`;
  return (
    <Template
      method='isBoolean'
      title='isBoolean'
      codeSource={source}
      dependencies={["isBoolean"]}
      description="Checks if value is classified as a boolean primitive or object."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is a boolean, else false."
    />
  );
};

export const isBuffer = () => {
  const source = `// source here`;
  return (
    <Template
      method='isBuffer'
      title='isBuffer'
      codeSource={source}
      dependencies={["isBuffer"]}
      description="Checks if value is a buffer."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is a buffer, else false."
    />
  );
};

export const isDate = () => {
  const source = `// source here`;
  return (
    <Template
      method='isDate'
      title='isDate'
      codeSource={source}
      dependencies={["isDate"]}
      description="Checks if value is classified as a Date object."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is a date object, else false."
    />
  );
};

export const isElement = () => {
  const source = `// source here`;
  return (
    <Template
      method='isElement'
      title='isElement'
      codeSource={source}
      dependencies={["isElement"]}
      description="Checks if value is likely a DOM element."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is a DOM element, else false."
    />
  );
};

export const isEmpty = () => {
  const source = `// source here`;
  return (
    <Template
      method='isEmpty'
      title='isEmpty'
      codeSource={source}
      dependencies={["isEmpty"]}
      description="Checks if value is an empty object, collection, map, or set.

Objects are considered empty if they have no own enumerable string keyed properties.

Array-like values such as arguments objects, arrays, buffers, strings, or jQuery-like collections are considered empty if they have a length of 0. Similarly, maps and sets are considered empty if they have a size of 0."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is empty, else false."
    />
  );
};

export const isEqual = () => {
  const source = `// source here`;
  return (
    <Template
      method='isEqual'
      title='isEqual'
      codeSource={source}
      dependencies={["isEqual"]}
      description="Performs a deep comparison between two values to determine if they are equivalent.

Note: This method supports comparing arrays, array buffers, booleans, date objects, error objects, maps, numbers, Object objects, regexes, sets, strings, symbols, and typed arrays. Object objects are compared by their own, not inherited, enumerable properties. Functions and DOM nodes are compared by strict equality, i.e. ===."
      args={["value (*): The value to compare.","other (*): The other value to compare."]}
      returns="(boolean): Returns true if the values are equivalent, else false."
    />
  );
};

export const isEqualWith = () => {
  const source = `// source here`;
  return (
    <Template
      method='isEqualWith'
      title='isEqualWith'
      codeSource={source}
      dependencies={["isEqualWith"]}
      description="This method is like _.isEqual except that it accepts customizer which is invoked to compare values. If customizer returns undefined, comparisons are handled by the method instead. The customizer is invoked with up to six arguments: (objValue, othValue [, index|key, object, other, stack])."
      args={["value (*): The value to compare.","other (*): The other value to compare.","[customizer] (Function): The function to customize comparisons."]}
      returns="(boolean): Returns true if the values are equivalent, else false."
    />
  );
};

export const isError = () => {
  const source = `// source here`;
  return (
    <Template
      method='isError'
      title='isError'
      codeSource={source}
      dependencies={["isError"]}
      description="Checks if value is an Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, or URIError object."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is an error object, else false."
    />
  );
};

export const isFinite = () => {
  const source = `// source here`;
  return (
    <Template
      method='isFinite'
      title='isFinite'
      codeSource={source}
      dependencies={["isFinite"]}
      description="Checks if value is a finite primitive number.

Note: This method is based on Number.isFinite."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is a finite number, else false."
    />
  );
};

export const isFunction = () => {
  const source = `// source here`;
  return (
    <Template
      method='isFunction'
      title='isFunction'
      codeSource={source}
      dependencies={["isFunction"]}
      description="Checks if value is classified as a Function object."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is a function, else false."
    />
  );
};

export const isInteger = () => {
  const source = `// source here`;
  return (
    <Template
      method='isInteger'
      title='isInteger'
      codeSource={source}
      dependencies={["isInteger"]}
      description="Checks if value is an integer.

Note: This method is based on Number.isInteger."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is an integer, else false."
    />
  );
};

export const isLength = () => {
  const source = `// source here`;
  return (
    <Template
      method='isLength'
      title='isLength'
      codeSource={source}
      dependencies={["isLength"]}
      description="Checks if value is a valid array-like length.

Note: This method is loosely based on ToLength."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is a valid length, else false."
    />
  );
};

export const isMap = () => {
  const source = `// source here`;
  return (
    <Template
      method='isMap'
      title='isMap'
      codeSource={source}
      dependencies={["isMap"]}
      description="Checks if value is classified as a Map object."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is a map, else false."
    />
  );
};

export const isMatch = () => {
  const source = `// source here`;
  return (
    <Template
      method='isMatch'
      title='isMatch'
      codeSource={source}
      dependencies={["isMatch"]}
      description="Performs a partial deep comparison between object and source to determine if object contains equivalent property values.

Note: This method is equivalent to _.matches when source is partially applied.

Partial comparisons will match empty array and empty object source values against any array or object value, respectively. See _.isEqual for a list of supported value comparisons."
      args={["object (Object): The object to inspect.","source (Object): The object of property values to match."]}
      returns="(boolean): Returns true if object is a match, else false."
    />
  );
};

export const isMatchWith = () => {
  const source = `// source here`;
  return (
    <Template
      method='isMatchWith'
      title='isMatchWith'
      codeSource={source}
      dependencies={["isMatchWith"]}
      description="This method is like _.isMatch except that it accepts customizer which is invoked to compare values. If customizer returns undefined, comparisons are handled by the method instead. The customizer is invoked with five arguments: (objValue, srcValue, index|key, object, source)."
      args={["object (Object): The object to inspect.","source (Object): The object of property values to match.","[customizer] (Function): The function to customize comparisons."]}
      returns="(boolean): Returns true if object is a match, else false."
    />
  );
};

export const isNaN = () => {
  const source = `// source here`;
  return (
    <Template
      method='isNaN'
      title='isNaN'
      codeSource={source}
      dependencies={["isNaN"]}
      description="Checks if value is NaN.

Note: This method is based on Number.isNaN and is not the same as global isNaN which returns true for undefined and other non-number values."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is NaN, else false."
    />
  );
};

export const isNative = () => {
  const source = `// source here`;
  return (
    <Template
      method='isNative'
      title='isNative'
      codeSource={source}
      dependencies={["isNative"]}
      description="Checks if value is a pristine native function.

Note: This method can&#39;t reliably detect native functions in the presence of the core-js package because core-js circumvents this kind of detection. Despite multiple requests, the core-js maintainer has made it clear: any attempt to fix the detection will be obstructed. As a result, we&#39;re left with little choice but to throw an error. Unfortunately, this also affects packages, like babel-polyfill, which rely on core-js."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is a native function, else false."
    />
  );
};

export const isNil = () => {
  const source = `// source here`;
  return (
    <Template
      method='isNil'
      title='isNil'
      codeSource={source}
      dependencies={["isNil"]}
      description="Checks if value is null or undefined."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is nullish, else false."
    />
  );
};

export const isNull = () => {
  const source = `// source here`;
  return (
    <Template
      method='isNull'
      title='isNull'
      codeSource={source}
      dependencies={["isNull"]}
      description="Checks if value is null."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is null, else false."
    />
  );
};

export const isNumber = () => {
  const source = `// source here`;
  return (
    <Template
      method='isNumber'
      title='isNumber'
      codeSource={source}
      dependencies={["isNumber"]}
      description="Checks if value is classified as a Number primitive or object.

Note: To exclude Infinity, -Infinity, and NaN, which are classified as numbers, use the _.isFinite method."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is a number, else false."
    />
  );
};

export const isObject = () => {
  const source = `// source here`;
  return (
    <Template
      method='isObject'
      title='isObject'
      codeSource={source}
      dependencies={["isObject"]}
      description="Checks if value is the language type of Object. (e.g. arrays, functions, objects, regexes, new Number(0), and new String(&#39;&#39;))"
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is an object, else false."
    />
  );
};

export const isObjectLike = () => {
  const source = `// source here`;
  return (
    <Template
      method='isObjectLike'
      title='isObjectLike'
      codeSource={source}
      dependencies={["isObjectLike"]}
      description="Checks if value is object-like. A value is object-like if it&#39;s not null and has a typeof result of &quot;object&quot;."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is object-like, else false."
    />
  );
};

export const isPlainObject = () => {
  const source = `// source here`;
  return (
    <Template
      method='isPlainObject'
      title='isPlainObject'
      codeSource={source}
      dependencies={["isPlainObject"]}
      description="Checks if value is a plain object, that is, an object created by the Object constructor or one with a [[Prototype]] of null."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is a plain object, else false."
    />
  );
};

export const isRegExp = () => {
  const source = `// source here`;
  return (
    <Template
      method='isRegExp'
      title='isRegExp'
      codeSource={source}
      dependencies={["isRegExp"]}
      description="Checks if value is classified as a RegExp object."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is a regexp, else false."
    />
  );
};

export const isSafeInteger = () => {
  const source = `// source here`;
  return (
    <Template
      method='isSafeInteger'
      title='isSafeInteger'
      codeSource={source}
      dependencies={["isSafeInteger"]}
      description="Checks if value is a safe integer. An integer is safe if it&#39;s an IEEE-754 double precision number which isn&#39;t the result of a rounded unsafe integer.

Note: This method is based on Number.isSafeInteger."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is a safe integer, else false."
    />
  );
};

export const isSet = () => {
  const source = `// source here`;
  return (
    <Template
      method='isSet'
      title='isSet'
      codeSource={source}
      dependencies={["isSet"]}
      description="Checks if value is classified as a Set object."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is a set, else false."
    />
  );
};

export const isString = () => {
  const source = `// source here`;
  return (
    <Template
      method='isString'
      title='isString'
      codeSource={source}
      dependencies={["isString"]}
      description="Checks if value is classified as a String primitive or object."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is a string, else false."
    />
  );
};

export const isSymbol = () => {
  const source = `// source here`;
  return (
    <Template
      method='isSymbol'
      title='isSymbol'
      codeSource={source}
      dependencies={["isSymbol"]}
      description="Checks if value is classified as a Symbol primitive or object."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is a symbol, else false."
    />
  );
};

export const isTypedArray = () => {
  const source = `// source here`;
  return (
    <Template
      method='isTypedArray'
      title='isTypedArray'
      codeSource={source}
      dependencies={["isTypedArray"]}
      description="Checks if value is classified as a typed array."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is a typed array, else false."
    />
  );
};

export const isUndefined = () => {
  const source = `// source here`;
  return (
    <Template
      method='isUndefined'
      title='isUndefined'
      codeSource={source}
      dependencies={["isUndefined"]}
      description="Checks if value is undefined."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is undefined, else false."
    />
  );
};

export const isWeakMap = () => {
  const source = `// source here`;
  return (
    <Template
      method='isWeakMap'
      title='isWeakMap'
      codeSource={source}
      dependencies={["isWeakMap"]}
      description="Checks if value is classified as a WeakMap object."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is a weak map, else false."
    />
  );
};

export const isWeakSet = () => {
  const source = `// source here`;
  return (
    <Template
      method='isWeakSet'
      title='isWeakSet'
      codeSource={source}
      dependencies={["isWeakSet"]}
      description="Checks if value is classified as a WeakSet object."
      args={["value (*): The value to check."]}
      returns="(boolean): Returns true if value is a weak set, else false."
    />
  );
};

export const lt = () => {
  const source = `// source here`;
  return (
    <Template
      method='lt'
      title='lt'
      codeSource={source}
      dependencies={["lt"]}
      description="Checks if value is less than other."
      args={["value (*): The value to compare.","other (*): The other value to compare."]}
      returns="(boolean): Returns true if value is less than other, else false."
    />
  );
};

export const lte = () => {
  const source = `// source here`;
  return (
    <Template
      method='lte'
      title='lte'
      codeSource={source}
      dependencies={["lte"]}
      description="Checks if value is less than or equal to other."
      args={["value (*): The value to compare.","other (*): The other value to compare."]}
      returns="(boolean): Returns true if value is less than or equal to other, else false."
    />
  );
};

export const toArray = () => {
  const source = `// source here`;
  return (
    <Template
      method='toArray'
      title='toArray'
      codeSource={source}
      dependencies={["toArray"]}
      description="Converts value to an array."
      args={["value (*): The value to convert."]}
      returns="(Array): Returns the converted array."
    />
  );
};

export const toFinite = () => {
  const source = `// source here`;
  return (
    <Template
      method='toFinite'
      title='toFinite'
      codeSource={source}
      dependencies={["toFinite"]}
      description="Converts value to a finite number."
      args={["value (*): The value to convert."]}
      returns="(number): Returns the converted number."
    />
  );
};

export const toInteger = () => {
  const source = `// source here`;
  return (
    <Template
      method='toInteger'
      title='toInteger'
      codeSource={source}
      dependencies={["toInteger"]}
      description="Converts value to an integer.

Note: This method is loosely based on ToInteger."
      args={["value (*): The value to convert."]}
      returns="(number): Returns the converted integer."
    />
  );
};

export const toLength = () => {
  const source = `// source here`;
  return (
    <Template
      method='toLength'
      title='toLength'
      codeSource={source}
      dependencies={["toLength"]}
      description="Converts value to an integer suitable for use as the length of an array-like object.

Note: This method is based on ToLength."
      args={["value (*): The value to convert."]}
      returns="(number): Returns the converted integer."
    />
  );
};

export const toNumber = () => {
  const source = `// source here`;
  return (
    <Template
      method='toNumber'
      title='toNumber'
      codeSource={source}
      dependencies={["toNumber"]}
      description="Converts value to a number."
      args={["value (*): The value to process."]}
      returns="(number): Returns the number."
    />
  );
};

export const toPlainObject = () => {
  const source = `// source here`;
  return (
    <Template
      method='toPlainObject'
      title='toPlainObject'
      codeSource={source}
      dependencies={["toPlainObject"]}
      description="Converts value to a plain object flattening inherited enumerable string keyed properties of value to own properties of the plain object."
      args={["value (*): The value to convert."]}
      returns="(Object): Returns the converted plain object."
    />
  );
};

export const toSafeInteger = () => {
  const source = `// source here`;
  return (
    <Template
      method='toSafeInteger'
      title='toSafeInteger'
      codeSource={source}
      dependencies={["toSafeInteger"]}
      description="Converts value to a safe integer. A safe integer can be compared and represented correctly."
      args={["value (*): The value to convert."]}
      returns="(number): Returns the converted integer."
    />
  );
};

export const toString = () => {
  const source = `// source here`;
  return (
    <Template
      method='toString'
      title='toString'
      codeSource={source}
      dependencies={["toString"]}
      description="Converts value to a string. An empty string is returned for null and undefined values. The sign of -0 is preserved."
      args={["value (*): The value to convert."]}
      returns="(string): Returns the converted string."
    />
  );
};