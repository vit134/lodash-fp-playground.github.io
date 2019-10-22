import React from 'react';
import { Template } from '../../core/template';

export default { title: 'Object' };


export const assign = () => {
  const source = `// source here`;
  return (
    <Template
      method='assign'
      title='assign'
      codeSource={source}
      dependencies={["assign"]}
      description="Assigns own enumerable string keyed properties of source objects to the destination object. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources.

Note: This method mutates object and is loosely based on Object.assign."
      args={["object (Object): The destination object.","[sources] (...Object): The source objects."]}
      returns="(Object): Returns object."
    />
  );
};

export const assignWith = () => {
  const source = `// source here`;
  return (
    <Template
      method='assignWith'
      title='assignWith'
      codeSource={source}
      dependencies={["assignWith"]}
      description="This method is like _.assign except that it accepts customizer which is invoked to produce the assigned values. If customizer returns undefined, assignment is handled by the method instead. The customizer is invoked with five arguments: (objValue, srcValue, key, object, source).

Note: This method mutates object."
      args={["object (Object): The destination object.","sources (...Object): The source objects.","[customizer] (Function): The function to customize assigned values."]}
      returns="(Object): Returns object."
    />
  );
};

export const at = () => {
  const source = `// source here`;
  return (
    <Template
      method='at'
      title='at'
      codeSource={source}
      dependencies={["at"]}
      description="Creates an array of values corresponding to paths of object."
      args={["object (Object): The object to iterate over.","[paths] (...(string|string[])): The property paths to pick."]}
      returns="(Array): Returns the picked values."
    />
  );
};

export const create = () => {
  const source = `// source here`;
  return (
    <Template
      method='create'
      title='create'
      codeSource={source}
      dependencies={["create"]}
      description="Creates an object that inherits from the prototype object. If a properties object is given, its own enumerable string keyed properties are assigned to the created object."
      args={["prototype (Object): The object to inherit from.","[properties] (Object): The properties to assign to the object."]}
      returns="(Object): Returns the new object."
    />
  );
};

export const defaults = () => {
  const source = `// source here`;
  return (
    <Template
      method='defaults'
      title='defaults'
      codeSource={source}
      dependencies={["defaults"]}
      description="Assigns own and inherited enumerable string keyed properties of source objects to the destination object for all destination properties that resolve to undefined. Source objects are applied from left to right. Once a property is set, additional values of the same property are ignored.

Note: This method mutates object."
      args={["object (Object): The destination object.","[sources] (...Object): The source objects."]}
      returns="(Object): Returns object."
    />
  );
};

export const defaultsDeep = () => {
  const source = `// source here`;
  return (
    <Template
      method='defaultsDeep'
      title='defaultsDeep'
      codeSource={source}
      dependencies={["defaultsDeep"]}
      description="This method is like _.defaults except that it recursively assigns default properties.

Note: This method mutates object."
      args={["object (Object): The destination object.","[sources] (...Object): The source objects."]}
      returns="(Object): Returns object."
    />
  );
};

export const assignIn = () => {
  const source = `// source here`;
  return (
    <Template
      method='assignIn'
      title='assignIn'
      codeSource={source}
      dependencies={["assignIn"]}
      description="This method is like _.assign except that it iterates over own and inherited source properties.

Note: This method mutates object."
      args={["object (Object): The destination object.","[sources] (...Object): The source objects."]}
      returns="(Object): Returns object."
    />
  );
};

export const assignInWith = () => {
  const source = `// source here`;
  return (
    <Template
      method='assignInWith'
      title='assignInWith'
      codeSource={source}
      dependencies={["assignInWith"]}
      description="This method is like _.assignIn except that it accepts customizer which is invoked to produce the assigned values. If customizer returns undefined, assignment is handled by the method instead. The customizer is invoked with five arguments: (objValue, srcValue, key, object, source).

Note: This method mutates object."
      args={["object (Object): The destination object.","sources (...Object): The source objects.","[customizer] (Function): The function to customize assigned values."]}
      returns="(Object): Returns object."
    />
  );
};

export const findKey = () => {
  const source = `// source here`;
  return (
    <Template
      method='findKey'
      title='findKey'
      codeSource={source}
      dependencies={["findKey"]}
      description="This method is like _.find except that it returns the key of the first element predicate returns truthy for instead of the element itself."
      args={["object (Object): The object to inspect.","[predicate=_.identity] (Function): The function invoked per iteration."]}
      returns="(*): Returns the key of the matched element, else undefined."
    />
  );
};

export const findLastKey = () => {
  const source = `// source here`;
  return (
    <Template
      method='findLastKey'
      title='findLastKey'
      codeSource={source}
      dependencies={["findLastKey"]}
      description="This method is like _.findKey except that it iterates over elements of a collection in the opposite order."
      args={["object (Object): The object to inspect.","[predicate=_.identity] (Function): The function invoked per iteration."]}
      returns="(*): Returns the key of the matched element, else undefined."
    />
  );
};

export const forIn = () => {
  const source = `// source here`;
  return (
    <Template
      method='forIn'
      title='forIn'
      codeSource={source}
      dependencies={["forIn"]}
      description="Iterates over own and inherited enumerable string keyed properties of an object and invokes iteratee for each property. The iteratee is invoked with three arguments: (value, key, object). Iteratee functions may exit iteration early by explicitly returning false."
      args={["object (Object): The object to iterate over.","[iteratee=_.identity] (Function): The function invoked per iteration."]}
      returns="(Object): Returns object."
    />
  );
};

export const forInRight = () => {
  const source = `// source here`;
  return (
    <Template
      method='forInRight'
      title='forInRight'
      codeSource={source}
      dependencies={["forInRight"]}
      description="This method is like _.forIn except that it iterates over properties of object in the opposite order."
      args={["object (Object): The object to iterate over.","[iteratee=_.identity] (Function): The function invoked per iteration."]}
      returns="(Object): Returns object."
    />
  );
};

export const forOwn = () => {
  const source = `// source here`;
  return (
    <Template
      method='forOwn'
      title='forOwn'
      codeSource={source}
      dependencies={["forOwn"]}
      description="Iterates over own enumerable string keyed properties of an object and invokes iteratee for each property. The iteratee is invoked with three arguments: (value, key, object). Iteratee functions may exit iteration early by explicitly returning false."
      args={["object (Object): The object to iterate over.","[iteratee=_.identity] (Function): The function invoked per iteration."]}
      returns="(Object): Returns object."
    />
  );
};

export const forOwnRight = () => {
  const source = `// source here`;
  return (
    <Template
      method='forOwnRight'
      title='forOwnRight'
      codeSource={source}
      dependencies={["forOwnRight"]}
      description="This method is like _.forOwn except that it iterates over properties of object in the opposite order."
      args={["object (Object): The object to iterate over.","[iteratee=_.identity] (Function): The function invoked per iteration."]}
      returns="(Object): Returns object."
    />
  );
};

export const functions = () => {
  const source = `// source here`;
  return (
    <Template
      method='functions'
      title='functions'
      codeSource={source}
      dependencies={["functions"]}
      description="Creates an array of function property names from own enumerable properties of object."
      args={["object (Object): The object to inspect."]}
      returns="(Array): Returns the function names."
    />
  );
};

export const functionsIn = () => {
  const source = `// source here`;
  return (
    <Template
      method='functionsIn'
      title='functionsIn'
      codeSource={source}
      dependencies={["functionsIn"]}
      description="Creates an array of function property names from own and inherited enumerable properties of object."
      args={["object (Object): The object to inspect."]}
      returns="(Array): Returns the function names."
    />
  );
};

export const get = () => {
  const source = `// source here`;
  return (
    <Template
      method='get'
      title='get'
      codeSource={source}
      dependencies={["get"]}
      description="Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place."
      args={["object (Object): The object to query.","path (Array|string): The path of the property to get.","[defaultValue] (*): The value returned for undefined resolved values."]}
      returns="(*): Returns the resolved value."
    />
  );
};

export const has = () => {
  const source = `// source here`;
  return (
    <Template
      method='has'
      title='has'
      codeSource={source}
      dependencies={["has"]}
      description="Checks if path is a direct property of object."
      args={["object (Object): The object to query.","path (Array|string): The path to check."]}
      returns="(boolean): Returns true if path exists, else false."
    />
  );
};

export const hasIn = () => {
  const source = `// source here`;
  return (
    <Template
      method='hasIn'
      title='hasIn'
      codeSource={source}
      dependencies={["hasIn"]}
      description="Checks if path is a direct or inherited property of object."
      args={["object (Object): The object to query.","path (Array|string): The path to check."]}
      returns="(boolean): Returns true if path exists, else false."
    />
  );
};

export const invert = () => {
  const source = `// source here`;
  return (
    <Template
      method='invert'
      title='invert'
      codeSource={source}
      dependencies={["invert"]}
      description="Creates an object composed of the inverted keys and values of object. If object contains duplicate values, subsequent values overwrite property assignments of previous values."
      args={["object (Object): The object to invert."]}
      returns="(Object): Returns the new inverted object."
    />
  );
};

export const invertBy = () => {
  const source = `// source here`;
  return (
    <Template
      method='invertBy'
      title='invertBy'
      codeSource={source}
      dependencies={["invertBy"]}
      description="This method is like _.invert except that the inverted object is generated from the results of running each element of object thru iteratee. The corresponding inverted value of each inverted key is an array of keys responsible for generating the inverted value. The iteratee is invoked with one argument: (value)."
      args={["object (Object): The object to invert.","[iteratee=_.identity] (Function): The iteratee invoked per element."]}
      returns="(Object): Returns the new inverted object."
    />
  );
};

export const invoke = () => {
  const source = `// source here`;
  return (
    <Template
      method='invoke'
      title='invoke'
      codeSource={source}
      dependencies={["invoke"]}
      description="Invokes the method at path of object."
      args={["object (Object): The object to query.","path (Array|string): The path of the method to invoke.","[args] (...*): The arguments to invoke the method with."]}
      returns="(*): Returns the result of the invoked method."
    />
  );
};

export const keys = () => {
  const source = `// source here`;
  return (
    <Template
      method='keys'
      title='keys'
      codeSource={source}
      dependencies={["keys"]}
      description="Creates an array of the own enumerable property names of object.

Note: Non-object values are coerced to objects. See the ES spec for more details."
      args={["object (Object): The object to query."]}
      returns="(Array): Returns the array of property names."
    />
  );
};

export const keysIn = () => {
  const source = `// source here`;
  return (
    <Template
      method='keysIn'
      title='keysIn'
      codeSource={source}
      dependencies={["keysIn"]}
      description="Creates an array of the own and inherited enumerable property names of object.

Note: Non-object values are coerced to objects."
      args={["object (Object): The object to query."]}
      returns="(Array): Returns the array of property names."
    />
  );
};

export const mapKeys = () => {
  const source = `// source here`;
  return (
    <Template
      method='mapKeys'
      title='mapKeys'
      codeSource={source}
      dependencies={["mapKeys"]}
      description="The opposite of _.mapValues; this method creates an object with the same values as object and keys generated by running each own enumerable string keyed property of object thru iteratee. The iteratee is invoked with three arguments: (value, key, object)."
      args={["object (Object): The object to iterate over.","[iteratee=_.identity] (Function): The function invoked per iteration."]}
      returns="(Object): Returns the new mapped object."
    />
  );
};

export const mapValues = () => {
  const source = `// source here`;
  return (
    <Template
      method='mapValues'
      title='mapValues'
      codeSource={source}
      dependencies={["mapValues"]}
      description="Creates an object with the same keys as object and values generated by running each own enumerable string keyed property of object thru iteratee. The iteratee is invoked with three arguments:
(value, key, object)."
      args={["object (Object): The object to iterate over.","[iteratee=_.identity] (Function): The function invoked per iteration."]}
      returns="(Object): Returns the new mapped object."
    />
  );
};

export const merge = () => {
  const source = `// source here`;
  return (
    <Template
      method='merge'
      title='merge'
      codeSource={source}
      dependencies={["merge"]}
      description="This method is like _.assign except that it recursively merges own and inherited enumerable string keyed properties of source objects into the destination object. Source properties that resolve to undefined are skipped if a destination value exists. Array and plain object properties are merged recursively. Other objects and value types are overridden by assignment. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources.

Note: This method mutates object."
      args={["object (Object): The destination object.","[sources] (...Object): The source objects."]}
      returns="(Object): Returns object."
    />
  );
};

export const mergeWith = () => {
  const source = `// source here`;
  return (
    <Template
      method='mergeWith'
      title='mergeWith'
      codeSource={source}
      dependencies={["mergeWith"]}
      description="This method is like _.merge except that it accepts customizer which is invoked to produce the merged values of the destination and source properties. If customizer returns undefined, merging is handled by the method instead. The customizer is invoked with six arguments:
(objValue, srcValue, key, object, source, stack).

Note: This method mutates object."
      args={["object (Object): The destination object.","sources (...Object): The source objects.","customizer (Function): The function to customize assigned values."]}
      returns="(Object): Returns object."
    />
  );
};

export const omit = () => {
  const source = `// source here`;
  return (
    <Template
      method='omit'
      title='omit'
      codeSource={source}
      dependencies={["omit"]}
      description="The opposite of _.pick; this method creates an object composed of the own and inherited enumerable property paths of object that are not omitted.

Note: This method is considerably slower than _.pick."
      args={["object (Object): The source object.","[paths] (...(string|string[])): The property paths to omit."]}
      returns="(Object): Returns the new object."
    />
  );
};

export const omitBy = () => {
  const source = `// source here`;
  return (
    <Template
      method='omitBy'
      title='omitBy'
      codeSource={source}
      dependencies={["omitBy"]}
      description="The opposite of _.pickBy; this method creates an object composed of the own and inherited enumerable string keyed properties of object that predicate doesn&#39;t return truthy for. The predicate is invoked with two arguments: (value, key)."
      args={["object (Object): The source object.","[predicate=_.identity] (Function): The function invoked per property."]}
      returns="(Object): Returns the new object."
    />
  );
};

export const pick = () => {
  const source = `// source here`;
  return (
    <Template
      method='pick'
      title='pick'
      codeSource={source}
      dependencies={["pick"]}
      description="Creates an object composed of the picked object properties."
      args={["object (Object): The source object.","[paths] (...(string|string[])): The property paths to pick."]}
      returns="(Object): Returns the new object."
    />
  );
};

export const pickBy = () => {
  const source = `// source here`;
  return (
    <Template
      method='pickBy'
      title='pickBy'
      codeSource={source}
      dependencies={["pickBy"]}
      description="Creates an object composed of the object properties predicate returns truthy for. The predicate is invoked with two arguments: (value, key)."
      args={["object (Object): The source object.","[predicate=_.identity] (Function): The function invoked per property."]}
      returns="(Object): Returns the new object."
    />
  );
};

export const result = () => {
  const source = `// source here`;
  return (
    <Template
      method='result'
      title='result'
      codeSource={source}
      dependencies={["result"]}
      description="This method is like _.get except that if the resolved value is a function it&#39;s invoked with the this binding of its parent object and its result is returned."
      args={["object (Object): The object to query.","path (Array|string): The path of the property to resolve.","[defaultValue] (*): The value returned for undefined resolved values."]}
      returns="(*): Returns the resolved value."
    />
  );
};

export const set = () => {
  const source = `// source here`;
  return (
    <Template
      method='set'
      title='set'
      codeSource={source}
      dependencies={["set"]}
      description="Sets the value at path of object. If a portion of path doesn&#39;t exist, it&#39;s created. Arrays are created for missing index properties while objects are created for all other missing properties. Use _.setWith to customize path creation.

Note: This method mutates object."
      args={["object (Object): The object to modify.","path (Array|string): The path of the property to set.","value (*): The value to set."]}
      returns="(Object): Returns object."
    />
  );
};

export const setWith = () => {
  const source = `// source here`;
  return (
    <Template
      method='setWith'
      title='setWith'
      codeSource={source}
      dependencies={["setWith"]}
      description="This method is like _.set except that it accepts customizer which is invoked to produce the objects of path. If customizer returns undefined path creation is handled by the method instead. The customizer is invoked with three arguments: (nsValue, key, nsObject).

Note: This method mutates object."
      args={["object (Object): The object to modify.","path (Array|string): The path of the property to set.","value (*): The value to set.","[customizer] (Function): The function to customize assigned values."]}
      returns="(Object): Returns object."
    />
  );
};

export const toPairs = () => {
  const source = `// source here`;
  return (
    <Template
      method='toPairs'
      title='toPairs'
      codeSource={source}
      dependencies={["toPairs"]}
      description="Creates an array of own enumerable string keyed-value pairs for object which can be consumed by _.fromPairs. If object is a map or set, its entries are returned."
      args={["object (Object): The object to query."]}
      returns="(Array): Returns the key-value pairs."
    />
  );
};

export const toPairsIn = () => {
  const source = `// source here`;
  return (
    <Template
      method='toPairsIn'
      title='toPairsIn'
      codeSource={source}
      dependencies={["toPairsIn"]}
      description="Creates an array of own and inherited enumerable string keyed-value pairs for object which can be consumed by _.fromPairs. If object is a map or set, its entries are returned."
      args={["object (Object): The object to query."]}
      returns="(Array): Returns the key-value pairs."
    />
  );
};

export const transform = () => {
  const source = `// source here`;
  return (
    <Template
      method='transform'
      title='transform'
      codeSource={source}
      dependencies={["transform"]}
      description="An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of running each of its own enumerable string keyed properties thru iteratee, with each invocation potentially mutating the accumulator object. If accumulator is not provided, a new object with the same [[Prototype]] will be used. The iteratee is invoked with four arguments: (accumulator, value, key, object). Iteratee functions may exit iteration early by explicitly returning false."
      args={["object (Object): The object to iterate over.","[iteratee=_.identity] (Function): The function invoked per iteration.","[accumulator] (*): The custom accumulator value."]}
      returns="(*): Returns the accumulated value."
    />
  );
};

export const unset = () => {
  const source = `// source here`;
  return (
    <Template
      method='unset'
      title='unset'
      codeSource={source}
      dependencies={["unset"]}
      description="Removes the property at path of object.

Note: This method mutates object."
      args={["object (Object): The object to modify.","path (Array|string): The path of the property to unset."]}
      returns="(boolean): Returns true if the property is deleted, else false."
    />
  );
};

export const update = () => {
  const source = `// source here`;
  return (
    <Template
      method='update'
      title='update'
      codeSource={source}
      dependencies={["update"]}
      description="This method is like _.set except that accepts updater to produce the value to set. Use _.updateWith to customize path creation. The updater is invoked with one argument: (value).

Note: This method mutates object."
      args={["object (Object): The object to modify.","path (Array|string): The path of the property to set.","updater (Function): The function to produce the updated value."]}
      returns="(Object): Returns object."
    />
  );
};

export const updateWith = () => {
  const source = `// source here`;
  return (
    <Template
      method='updateWith'
      title='updateWith'
      codeSource={source}
      dependencies={["updateWith"]}
      description="This method is like _.update except that it accepts customizer which is invoked to produce the objects of path. If customizer returns undefined path creation is handled by the method instead. The customizer is invoked with three arguments: (nsValue, key, nsObject).

Note: This method mutates object."
      args={["object (Object): The object to modify.","path (Array|string): The path of the property to set.","updater (Function): The function to produce the updated value.","[customizer] (Function): The function to customize assigned values."]}
      returns="(Object): Returns object."
    />
  );
};

export const values = () => {
  const source = `// source here`;
  return (
    <Template
      method='values'
      title='values'
      codeSource={source}
      dependencies={["values"]}
      description="Creates an array of the own enumerable string keyed property values of object.

Note: Non-object values are coerced to objects."
      args={["object (Object): The object to query."]}
      returns="(Array): Returns the array of property values."
    />
  );
};

export const valuesIn = () => {
  const source = `// source here`;
  return (
    <Template
      method='valuesIn'
      title='valuesIn'
      codeSource={source}
      dependencies={["valuesIn"]}
      description="Creates an array of the own and inherited enumerable string keyed property values of object.

Note: Non-object values are coerced to objects."
      args={["object (Object): The object to query."]}
      returns="(Array): Returns the array of property values."
    />
  );
};