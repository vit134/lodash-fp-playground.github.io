import React from 'react';
import { Template } from '../../core/template';

export default { title: 'Number' };


export const clamp = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="clamp"
      title="clamp"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["clamp"]}
      description="Clamps number within the inclusive lower and upper bounds."
      args={["number (number): The number to clamp.","[lower] (number): The lower bound.","upper (number): The upper bound."]}
      returns="(number): Returns the clamped number."
    />
  );
};

export const inRange = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="inRange"
      title="inRange"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["inRange"]}
      description="Checks if n is between start and up to, but not including, end. If end is not specified, it&#39;s set to start with start then set to 0. If start is greater than end the params are swapped to support negative ranges."
      args={["number (number): The number to check.","[start=0] (number): The start of the range.","end (number): The end of the range."]}
      returns="(boolean): Returns true if number is in the range, else false."
    />
  );
};

export const random = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="random"
      title="random"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["random"]}
      description="Produces a random number between the inclusive lower and upper bounds. If only one argument is provided a number between 0 and the given number is returned. If floating is true, or either lower or upper are floats, a floating-point number is returned instead of an integer.

Note: JavaScript follows the IEEE-754 standard for resolving floating-point values which can produce unexpected results."
      args={["[lower=0] (number): The lower bound.","[upper=1] (number): The upper bound.","[floating] (boolean): Specify returning a floating-point number."]}
      returns="(number): Returns the random number."
    />
  );
};