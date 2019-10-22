import React from 'react';
import { Template } from '../../core/template';

export default { title: 'Util' };


export const attempt = () => {
  const source = `// source here`;
  return (
    <Template
      method='attempt'
      title='attempt'
      codeSource={source}
      dependencies={["attempt"]}
      description="Attempts to invoke func, returning either the result or the caught error object. Any additional arguments are provided to func when it&#39;s invoked."
      args={["func (Function): The function to attempt.","[args] (...*): The arguments to invoke func with."]}
      returns="(*): Returns the func result or error object."
    />
  );
};

export const bindAll = () => {
  const source = `// source here`;
  return (
    <Template
      method='bindAll'
      title='bindAll'
      codeSource={source}
      dependencies={["bindAll"]}
      description="Binds methods of an object to the object itself, overwriting the existing method.

Note: This method doesn&#39;t set the &quot;length&quot; property of bound functions."
      args={["object (Object): The object to bind and assign the bound methods to.","methodNames (...(string|string[])): The object method names to bind."]}
      returns="(Object): Returns object."
    />
  );
};

export const cond = () => {
  const source = `// source here`;
  return (
    <Template
      method='cond'
      title='cond'
      codeSource={source}
      dependencies={["cond"]}
      description="Creates a function that iterates over pairs and invokes the corresponding function of the first predicate to return truthy. The predicate-function pairs are invoked with the this binding and arguments of the created function."
      args={["pairs (Array): The predicate-function pairs."]}
      returns="(Function): Returns the new composite function."
    />
  );
};

export const conforms = () => {
  const source = `// source here`;
  return (
    <Template
      method='conforms'
      title='conforms'
      codeSource={source}
      dependencies={["conforms"]}
      description="Creates a function that invokes the predicate properties of source with the corresponding property values of a given object, returning true if all predicates return truthy, else false.

Note: The created function is equivalent to _.conformsTo with source partially applied."
      args={["source (Object): The object of property predicates to conform to."]}
      returns="(Function): Returns the new spec function."
    />
  );
};

export const constant = () => {
  const source = `// source here`;
  return (
    <Template
      method='constant'
      title='constant'
      codeSource={source}
      dependencies={["constant"]}
      description="Creates a function that returns value."
      args={["value (*): The value to return from the new function."]}
      returns="(Function): Returns the new constant function."
    />
  );
};

export const defaultTo = () => {
  const source = `// source here`;
  return (
    <Template
      method='defaultTo'
      title='defaultTo'
      codeSource={source}
      dependencies={["defaultTo"]}
      description="Checks value to determine whether a default value should be returned in its place. The defaultValue is returned if value is NaN, null, or undefined."
      args={["value (*): The value to check.","defaultValue (*): The default value."]}
      returns="(*): Returns the resolved value."
    />
  );
};

export const flow = () => {
  const source = `// source here`;
  return (
    <Template
      method='flow'
      title='flow'
      codeSource={source}
      dependencies={["flow"]}
      description="Creates a function that returns the result of invoking the given functions with the this binding of the created function, where each successive invocation is supplied the return value of the previous."
      args={["[funcs] (...(Function|Function[])): The functions to invoke."]}
      returns="(Function): Returns the new composite function."
    />
  );
};

export const flowRight = () => {
  const source = `// source here`;
  return (
    <Template
      method='flowRight'
      title='flowRight'
      codeSource={source}
      dependencies={["flowRight"]}
      description="This method is like _.flow except that it creates a function that invokes the given functions from right to left."
      args={["[funcs] (...(Function|Function[])): The functions to invoke."]}
      returns="(Function): Returns the new composite function."
    />
  );
};

export const identity = () => {
  const source = `// source here`;
  return (
    <Template
      method='identity'
      title='identity'
      codeSource={source}
      dependencies={["identity"]}
      description="This method returns the first argument it receives."
      args={["value (*): Any value."]}
      returns="(*): Returns value."
    />
  );
};

export const iteratee = () => {
  const source = `// source here`;
  return (
    <Template
      method='iteratee'
      title='iteratee'
      codeSource={source}
      dependencies={["iteratee"]}
      description="Creates a function that invokes func with the arguments of the created function. If func is a property name, the created function returns the property value for a given element. If func is an array or object, the created function returns true for elements that contain the equivalent source properties, otherwise it returns false."
      args={["[func=_.identity] (*): The value to convert to a callback."]}
      returns="(Function): Returns the callback."
    />
  );
};

export const matches = () => {
  const source = `// source here`;
  return (
    <Template
      method='matches'
      title='matches'
      codeSource={source}
      dependencies={["matches"]}
      description="Creates a function that performs a partial deep comparison between a given object and source, returning true if the given object has equivalent property values, else false.

Note: The created function is equivalent to _.isMatch with source partially applied.

Partial comparisons will match empty array and empty object source values against any array or object value, respectively. See _.isEqual for a list of supported value comparisons."
      args={["source (Object): The object of property values to match."]}
      returns="(Function): Returns the new spec function."
    />
  );
};

export const matchesProperty = () => {
  const source = `// source here`;
  return (
    <Template
      method='matchesProperty'
      title='matchesProperty'
      codeSource={source}
      dependencies={["matchesProperty"]}
      description="Creates a function that performs a partial deep comparison between the value at path of a given object to srcValue, returning true if the object value is equivalent, else false.

Note: Partial comparisons will match empty array and empty object srcValue values against any array or object value, respectively. See _.isEqual for a list of supported value comparisons."
      args={["path (Array|string): The path of the property to get.","srcValue (*): The value to match."]}
      returns="(Function): Returns the new spec function."
    />
  );
};

export const method = () => {
  const source = `// source here`;
  return (
    <Template
      method='method'
      title='method'
      codeSource={source}
      dependencies={["method"]}
      description="Creates a function that invokes the method at path of a given object. Any additional arguments are provided to the invoked method."
      args={["path (Array|string): The path of the method to invoke.","[args] (...*): The arguments to invoke the method with."]}
      returns="(Function): Returns the new invoker function."
    />
  );
};

export const methodOf = () => {
  const source = `// source here`;
  return (
    <Template
      method='methodOf'
      title='methodOf'
      codeSource={source}
      dependencies={["methodOf"]}
      description="The opposite of _.method; this method creates a function that invokes the method at a given path of object. Any additional arguments are provided to the invoked method."
      args={["object (Object): The object to query.","[args] (...*): The arguments to invoke the method with."]}
      returns="(Function): Returns the new invoker function."
    />
  );
};

export const mixin = () => {
  const source = `// source here`;
  return (
    <Template
      method='mixin'
      title='mixin'
      codeSource={source}
      dependencies={["mixin"]}
      description="Adds all own enumerable string keyed function properties of a source object to the destination object. If object is a function, then methods are added to its prototype as well.

Note: Use _.runInContext to create a pristine lodash function to avoid conflicts caused by modifying the original."
      args={["[object=lodash] (Function|Object): The destination object.","source (Object): The object of functions to add.","[options={}] (Object): The options object.","[options.chain=true] (boolean): Specify whether mixins are chainable."]}
      returns="(*): Returns object."
    />
  );
};

export const noConflict = () => {
  const source = `// source here`;
  return (
    <Template
      method='noConflict'
      title='noConflict'
      codeSource={source}
      dependencies={["noConflict"]}
      description="Reverts the _ variable to its previous value and returns a reference to the lodash function."
      args={[]}
      returns="(Function): Returns the lodash function."
    />
  );
};

export const noop = () => {
  const source = `// source here`;
  return (
    <Template
      method='noop'
      title='noop'
      codeSource={source}
      dependencies={["noop"]}
      description="This method returns undefined."
      args={[]}
      returns=""
    />
  );
};

export const nthArg = () => {
  const source = `// source here`;
  return (
    <Template
      method='nthArg'
      title='nthArg'
      codeSource={source}
      dependencies={["nthArg"]}
      description="Creates a function that gets the argument at index n. If n is negative, the nth argument from the end is returned."
      args={["[n=0] (number): The index of the argument to return."]}
      returns="(Function): Returns the new pass-thru function."
    />
  );
};

export const over = () => {
  const source = `// source here`;
  return (
    <Template
      method='over'
      title='over'
      codeSource={source}
      dependencies={["over"]}
      description="Creates a function that invokes iteratees with the arguments it receives and returns their results."
      args={["[iteratees=[_.identity]] (...(Function|Function[])): The iteratees to invoke."]}
      returns="(Function): Returns the new function."
    />
  );
};

export const overEvery = () => {
  const source = `// source here`;
  return (
    <Template
      method='overEvery'
      title='overEvery'
      codeSource={source}
      dependencies={["overEvery"]}
      description="Creates a function that checks if all of the predicates return truthy when invoked with the arguments it receives."
      args={["[predicates=[_.identity]] (...(Function|Function[])): The predicates to check."]}
      returns="(Function): Returns the new function."
    />
  );
};

export const overSome = () => {
  const source = `// source here`;
  return (
    <Template
      method='overSome'
      title='overSome'
      codeSource={source}
      dependencies={["overSome"]}
      description="Creates a function that checks if any of the predicates return truthy when invoked with the arguments it receives."
      args={["[predicates=[_.identity]] (...(Function|Function[])): The predicates to check."]}
      returns="(Function): Returns the new function."
    />
  );
};

export const property = () => {
  const source = `// source here`;
  return (
    <Template
      method='property'
      title='property'
      codeSource={source}
      dependencies={["property"]}
      description="Creates a function that returns the value at path of a given object."
      args={["path (Array|string): The path of the property to get."]}
      returns="(Function): Returns the new accessor function."
    />
  );
};

export const propertyOf = () => {
  const source = `// source here`;
  return (
    <Template
      method='propertyOf'
      title='propertyOf'
      codeSource={source}
      dependencies={["propertyOf"]}
      description="The opposite of _.property; this method creates a function that returns the value at a given path of object."
      args={["object (Object): The object to query."]}
      returns="(Function): Returns the new accessor function."
    />
  );
};

export const range = () => {
  const source = `// source here`;
  return (
    <Template
      method='range'
      title='range'
      codeSource={source}
      dependencies={["range"]}
      description="Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end. A step of -1 is used if a negative start is specified without an end or step. If end is not specified, it&#39;s set to start with start then set to 0.

Note: JavaScript follows the IEEE-754 standard for resolving floating-point values which can produce unexpected results."
      args={["[start=0] (number): The start of the range.","end (number): The end of the range.","[step=1] (number): The value to increment or decrement by."]}
      returns="(Array): Returns the range of numbers."
    />
  );
};

export const rangeRight = () => {
  const source = `// source here`;
  return (
    <Template
      method='rangeRight'
      title='rangeRight'
      codeSource={source}
      dependencies={["rangeRight"]}
      description="This method is like _.range except that it populates values in descending order."
      args={["[start=0] (number): The start of the range.","end (number): The end of the range.","[step=1] (number): The value to increment or decrement by."]}
      returns="(Array): Returns the range of numbers."
    />
  );
};

export const runInContext = () => {
  const source = `// source here`;
  return (
    <Template
      method='runInContext'
      title='runInContext'
      codeSource={source}
      dependencies={["runInContext"]}
      description="Create a new pristine lodash function using the context object."
      args={["[context=root] (Object): The context object."]}
      returns="(Function): Returns a new lodash function."
    />
  );
};

export const stubArray = () => {
  const source = `// source here`;
  return (
    <Template
      method='stubArray'
      title='stubArray'
      codeSource={source}
      dependencies={["stubArray"]}
      description="This method returns a new empty array."
      args={[]}
      returns="(Array): Returns the new empty array."
    />
  );
};

export const stubFalse = () => {
  const source = `// source here`;
  return (
    <Template
      method='stubFalse'
      title='stubFalse'
      codeSource={source}
      dependencies={["stubFalse"]}
      description="This method returns false."
      args={[]}
      returns="(boolean): Returns false."
    />
  );
};

export const stubObject = () => {
  const source = `// source here`;
  return (
    <Template
      method='stubObject'
      title='stubObject'
      codeSource={source}
      dependencies={["stubObject"]}
      description="This method returns a new empty object."
      args={[]}
      returns="(Object): Returns the new empty object."
    />
  );
};

export const stubString = () => {
  const source = `// source here`;
  return (
    <Template
      method='stubString'
      title='stubString'
      codeSource={source}
      dependencies={["stubString"]}
      description="This method returns an empty string."
      args={[]}
      returns="(string): Returns the empty string."
    />
  );
};

export const stubTrue = () => {
  const source = `// source here`;
  return (
    <Template
      method='stubTrue'
      title='stubTrue'
      codeSource={source}
      dependencies={["stubTrue"]}
      description="This method returns true."
      args={[]}
      returns="(boolean): Returns true."
    />
  );
};

export const times = () => {
  const source = `// source here`;
  return (
    <Template
      method='times'
      title='times'
      codeSource={source}
      dependencies={["times"]}
      description="Invokes the iteratee n times, returning an array of the results of each invocation. The iteratee is invoked with one argument; (index)."
      args={["n (number): The number of times to invoke iteratee.","[iteratee=_.identity] (Function): The function invoked per iteration."]}
      returns="(Array): Returns the array of results."
    />
  );
};

export const toPath = () => {
  const source = `// source here`;
  return (
    <Template
      method='toPath'
      title='toPath'
      codeSource={source}
      dependencies={["toPath"]}
      description="Converts value to a property path array."
      args={["value (*): The value to convert."]}
      returns="(Array): Returns the new property path array."
    />
  );
};

export const uniqueId = () => {
  const source = `// source here`;
  return (
    <Template
      method='uniqueId'
      title='uniqueId'
      codeSource={source}
      dependencies={["uniqueId"]}
      description="Generates a unique ID. If prefix is given, the ID is appended to it."
      args={["[prefix=''] (string): The value to prefix the ID with."]}
      returns="(string): Returns the unique ID."
    />
  );
};