import React from 'react';
import { Template } from '../../core/template';

export default { title: 'Function' };


export const after = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="after"
      title="after"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["after"]}
      description="The opposite of _.before; this method creates a function that invokes func once it&#39;s called n or more times."
      args={["n (number): The number of calls before func is invoked.","func (Function): The function to restrict."]}
      returns="(Function): Returns the new restricted function."
    />
  );
};

export const ary = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="ary"
      title="ary"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["ary"]}
      description="Creates a function that invokes func, with up to n arguments, ignoring any additional arguments."
      args={["func (Function): The function to cap arguments for.","[n=func.length] (number): The arity cap."]}
      returns="(Function): Returns the new capped function."
    />
  );
};

export const before = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="before"
      title="before"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["before"]}
      description="Creates a function that invokes func, with the this binding and arguments of the created function, while it&#39;s called less than n times. Subsequent calls to the created function return the result of the last func invocation."
      args={["n (number): The number of calls at which func is no longer invoked.","func (Function): The function to restrict."]}
      returns="(Function): Returns the new restricted function."
    />
  );
};

export const bind = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="bind"
      title="bind"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["bind"]}
      description="Creates a function that invokes func with the this binding of thisArg and partials prepended to the arguments it receives.

The _.bind.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for partially applied arguments.

Note: Unlike native Function#bind, this method doesn&#39;t set the &quot;length&quot; property of bound functions."
      args={["func (Function): The function to bind.","thisArg (*): The this binding of func.","[partials] (...*): The arguments to be partially applied."]}
      returns="(Function): Returns the new bound function."
    />
  );
};

export const bindKey = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="bindKey"
      title="bindKey"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["bindKey"]}
      description="Creates a function that invokes the method at object[key] with partials prepended to the arguments it receives.

This method differs from _.bind by allowing bound functions to reference methods that may be redefined or don&#39;t yet exist. See Peter Michaux&#39;s article for more details.

The _.bindKey.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for partially applied arguments."
      args={["object (Object): The object to invoke the method on.","key (string): The key of the method.","[partials] (...*): The arguments to be partially applied."]}
      returns="(Function): Returns the new bound function."
    />
  );
};

export const curry = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="curry"
      title="curry"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["curry"]}
      description="Creates a function that accepts arguments of func and either invokes func returning its result, if at least arity number of arguments have been provided, or returns a function that accepts the remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.

The _.curry.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for provided arguments.

Note: This method doesn&#39;t set the &quot;length&quot; property of curried functions."
      args={["func (Function): The function to curry.","[arity=func.length] (number): The arity of func."]}
      returns="(Function): Returns the new curried function."
    />
  );
};

export const curryRight = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="curryRight"
      title="curryRight"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["curryRight"]}
      description="This method is like _.curry except that arguments are applied to func in the manner of _.partialRight instead of _.partial.

The _.curryRight.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for provided arguments.

Note: This method doesn&#39;t set the &quot;length&quot; property of curried functions."
      args={["func (Function): The function to curry.","[arity=func.length] (number): The arity of func."]}
      returns="(Function): Returns the new curried function."
    />
  );
};

export const debounce = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="debounce"
      title="debounce"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["debounce"]}
      description="Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked. The debounced function comes with a cancel method to cancel delayed func invocations and a flush method to immediately invoke them. Provide options to indicate whether func should be invoked on the leading and/or trailing edge of the wait timeout. The func is invoked with the last arguments provided to the debounced function. Subsequent calls to the debounced function return the result of the last func invocation.

Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only if the debounced function is invoked more than once during the wait timeout.

If wait is 0 and leading is false, func invocation is deferred until to the next tick, similar to setTimeout with a timeout of 0.

See David Corbacho&#39;s article for details over the differences between _.debounce and _.throttle."
      args={["func (Function): The function to debounce.","[wait=0] (number): The number of milliseconds to delay.","[options={}] (Object): The options object.","[options.leading=false] (boolean): Specify invoking on the leading edge of the timeout.","[options.maxWait] (number): The maximum time func is allowed to be delayed before it's invoked.","[options.trailing=true] (boolean): Specify invoking on the trailing edge of the timeout."]}
      returns="(Function): Returns the new debounced function."
    />
  );
};

export const defer = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="defer"
      title="defer"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["defer"]}
      description="Defers invoking the func until the current call stack has cleared. Any additional arguments are provided to func when it&#39;s invoked."
      args={["func (Function): The function to defer.","[args] (...*): The arguments to invoke func with."]}
      returns="(number): Returns the timer id."
    />
  );
};

export const delay = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="delay"
      title="delay"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["delay"]}
      description="Invokes func after wait milliseconds. Any additional arguments are provided to func when it&#39;s invoked."
      args={["func (Function): The function to delay.","wait (number): The number of milliseconds to delay invocation.","[args] (...*): The arguments to invoke func with."]}
      returns="(number): Returns the timer id."
    />
  );
};

export const flip = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="flip"
      title="flip"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["flip"]}
      description="Creates a function that invokes func with arguments reversed."
      args={["func (Function): The function to flip arguments for."]}
      returns="(Function): Returns the new flipped function."
    />
  );
};

export const memoize = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="memoize"
      title="memoize"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["memoize"]}
      description="Creates a function that memoizes the result of func. If resolver is provided, it determines the cache key for storing the result based on the arguments provided to the memoized function. By default, the first argument provided to the memoized function is used as the map cache key. The func is invoked with the this binding of the memoized function.

Note: The cache is exposed as the cache property on the memoized function. Its creation may be customized by replacing the _.memoize.Cache constructor with one whose instances implement the Map method interface of clear, delete, get, has, and set."
      args={["func (Function): The function to have its output memoized.","[resolver] (Function): The function to resolve the cache key."]}
      returns="(Function): Returns the new memoized function."
    />
  );
};

export const negate = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="negate"
      title="negate"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["negate"]}
      description="Creates a function that negates the result of the predicate func. The func predicate is invoked with the this binding and arguments of the created function."
      args={["predicate (Function): The predicate to negate."]}
      returns="(Function): Returns the new negated function."
    />
  );
};

export const once = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="once"
      title="once"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["once"]}
      description="Creates a function that is restricted to invoking func once. Repeat calls to the function return the value of the first invocation. The func is invoked with the this binding and arguments of the created function."
      args={["func (Function): The function to restrict."]}
      returns="(Function): Returns the new restricted function."
    />
  );
};

export const overArgs = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="overArgs"
      title="overArgs"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["overArgs"]}
      description="Creates a function that invokes func with its arguments transformed."
      args={["func (Function): The function to wrap.","[transforms=[_.identity]] (...(Function|Function[])): The argument transforms."]}
      returns="(Function): Returns the new function."
    />
  );
};

export const partial = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="partial"
      title="partial"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["partial"]}
      description="Creates a function that invokes func with partials prepended to the arguments it receives. This method is like _.bind except it does not alter the this binding.

The _.partial.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for partially applied arguments.

Note: This method doesn&#39;t set the &quot;length&quot; property of partially applied functions."
      args={["func (Function): The function to partially apply arguments to.","[partials] (...*): The arguments to be partially applied."]}
      returns="(Function): Returns the new partially applied function."
    />
  );
};

export const partialRight = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="partialRight"
      title="partialRight"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["partialRight"]}
      description="This method is like _.partial except that partially applied arguments are appended to the arguments it receives.

The _.partialRight.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for partially applied arguments.

Note: This method doesn&#39;t set the &quot;length&quot; property of partially applied functions."
      args={["func (Function): The function to partially apply arguments to.","[partials] (...*): The arguments to be partially applied."]}
      returns="(Function): Returns the new partially applied function."
    />
  );
};

export const rearg = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="rearg"
      title="rearg"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["rearg"]}
      description="Creates a function that invokes func with arguments arranged according to the specified indexes where the argument value at the first index is provided as the first argument, the argument value at the second index is provided as the second argument, and so on."
      args={["func (Function): The function to rearrange arguments for.","indexes (...(number|number[])): The arranged argument indexes."]}
      returns="(Function): Returns the new function."
    />
  );
};

export const rest = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="rest"
      title="rest"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["rest"]}
      description="Creates a function that invokes func with the this binding of the created function and arguments from start and beyond provided as an array.

Note: This method is based on the rest parameter."
      args={["func (Function): The function to apply a rest parameter to.","[start=func.length-1] (number): The start position of the rest parameter."]}
      returns="(Function): Returns the new function."
    />
  );
};

export const spread = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="spread"
      title="spread"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["spread"]}
      description="Creates a function that invokes func with the this binding of the create function and an array of arguments much like Function#apply.

Note: This method is based on the spread operator."
      args={["func (Function): The function to spread arguments over.","[start=0] (number): The start position of the spread."]}
      returns="(Function): Returns the new function."
    />
  );
};

export const throttle = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="throttle"
      title="throttle"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["throttle"]}
      description="Creates a throttled function that only invokes func at most once per every wait milliseconds. The throttled function comes with a cancel method to cancel delayed func invocations and a flush method to immediately invoke them. Provide options to indicate whether func should be invoked on the leading and/or trailing edge of the wait timeout. The func is invoked with the last arguments provided to the throttled function. Subsequent calls to the throttled function return the result of the last func invocation.

Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only if the throttled function is invoked more than once during the wait timeout.

If wait is 0 and leading is false, func invocation is deferred until to the next tick, similar to setTimeout with a timeout of 0.

See David Corbacho&#39;s article for details over the differences between _.throttle and _.debounce."
      args={["func (Function): The function to throttle.","[wait=0] (number): The number of milliseconds to throttle invocations to.","[options={}] (Object): The options object.","[options.leading=true] (boolean): Specify invoking on the leading edge of the timeout.","[options.trailing=true] (boolean): Specify invoking on the trailing edge of the timeout."]}
      returns="(Function): Returns the new throttled function."
    />
  );
};

export const unary = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="unary"
      title="unary"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["unary"]}
      description="Creates a function that accepts up to one argument, ignoring any additional arguments."
      args={["func (Function): The function to cap arguments for."]}
      returns="(Function): Returns the new capped function."
    />
  );
};

export const wrap = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="wrap"
      title="wrap"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["wrap"]}
      description="Creates a function that provides value to wrapper as its first argument. Any additional arguments provided to the function are appended to those provided to the wrapper. The wrapper is invoked with the this binding of the created function."
      args={["value (*): The value to wrap.","[wrapper=identity] (Function): The wrapper function."]}
      returns="(Function): Returns the new function."
    />
  );
};