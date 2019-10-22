import React from 'react';
import { Template } from '../../core/template';

export default { title: 'Math' };


export const add = () => {
  const source = `// source here`;
  return (
    <Template
      method='add'
      title='add'
      codeSource={source}
      dependencies={["add"]}
      description="Adds two numbers."
      args={["augend (number): The first number in an addition.","addend (number): The second number in an addition."]}
      returns="(number): Returns the total."
    />
  );
};

export const ceil = () => {
  const source = `// source here`;
  return (
    <Template
      method='ceil'
      title='ceil'
      codeSource={source}
      dependencies={["ceil"]}
      description="Computes number rounded up to precision."
      args={["number (number): The number to round up.","[precision=0] (number): The precision to round up to."]}
      returns="(number): Returns the rounded up number."
    />
  );
};

export const divide = () => {
  const source = `// source here`;
  return (
    <Template
      method='divide'
      title='divide'
      codeSource={source}
      dependencies={["divide"]}
      description="Divide two numbers."
      args={["dividend (number): The first number in a division.","divisor (number): The second number in a division."]}
      returns="(number): Returns the quotient."
    />
  );
};

export const floor = () => {
  const source = `// source here`;
  return (
    <Template
      method='floor'
      title='floor'
      codeSource={source}
      dependencies={["floor"]}
      description="Computes number rounded down to precision."
      args={["number (number): The number to round down.","[precision=0] (number): The precision to round down to."]}
      returns="(number): Returns the rounded down number."
    />
  );
};

export const max = () => {
  const source = `// source here`;
  return (
    <Template
      method='max'
      title='max'
      codeSource={source}
      dependencies={["max"]}
      description="Computes the maximum value of array. If array is empty or falsey, undefined is returned."
      args={["array (Array): The array to iterate over."]}
      returns="(*): Returns the maximum value."
    />
  );
};

export const maxBy = () => {
  const source = `// source here`;
  return (
    <Template
      method='maxBy'
      title='maxBy'
      codeSource={source}
      dependencies={["maxBy"]}
      description="This method is like _.max except that it accepts iteratee which is invoked for each element in array to generate the criterion by which the value is ranked. The iteratee is invoked with one argument: (value)."
      args={["array (Array): The array to iterate over.","[iteratee=_.identity] (Function): The iteratee invoked per element."]}
      returns="(*): Returns the maximum value."
    />
  );
};

export const mean = () => {
  const source = `// source here`;
  return (
    <Template
      method='mean'
      title='mean'
      codeSource={source}
      dependencies={["mean"]}
      description="Computes the mean of the values in array."
      args={["array (Array): The array to iterate over."]}
      returns="(number): Returns the mean."
    />
  );
};

export const meanBy = () => {
  const source = `// source here`;
  return (
    <Template
      method='meanBy'
      title='meanBy'
      codeSource={source}
      dependencies={["meanBy"]}
      description="This method is like _.mean except that it accepts iteratee which is invoked for each element in array to generate the value to be averaged. The iteratee is invoked with one argument: (value)."
      args={["array (Array): The array to iterate over.","[iteratee=_.identity] (Function): The iteratee invoked per element."]}
      returns="(number): Returns the mean."
    />
  );
};

export const min = () => {
  const source = `// source here`;
  return (
    <Template
      method='min'
      title='min'
      codeSource={source}
      dependencies={["min"]}
      description="Computes the minimum value of array. If array is empty or falsey, undefined is returned."
      args={["array (Array): The array to iterate over."]}
      returns="(*): Returns the minimum value."
    />
  );
};

export const minBy = () => {
  const source = `// source here`;
  return (
    <Template
      method='minBy'
      title='minBy'
      codeSource={source}
      dependencies={["minBy"]}
      description="This method is like _.min except that it accepts iteratee which is invoked for each element in array to generate the criterion by which the value is ranked. The iteratee is invoked with one argument: (value)."
      args={["array (Array): The array to iterate over.","[iteratee=_.identity] (Function): The iteratee invoked per element."]}
      returns="(*): Returns the minimum value."
    />
  );
};

export const multiply = () => {
  const source = `// source here`;
  return (
    <Template
      method='multiply'
      title='multiply'
      codeSource={source}
      dependencies={["multiply"]}
      description="Multiply two numbers."
      args={["multiplier (number): The first number in a multiplication.","multiplicand (number): The second number in a multiplication."]}
      returns="(number): Returns the product."
    />
  );
};

export const round = () => {
  const source = `// source here`;
  return (
    <Template
      method='round'
      title='round'
      codeSource={source}
      dependencies={["round"]}
      description="Computes number rounded to precision."
      args={["number (number): The number to round.","[precision=0] (number): The precision to round to."]}
      returns="(number): Returns the rounded number."
    />
  );
};

export const subtract = () => {
  const source = `// source here`;
  return (
    <Template
      method='subtract'
      title='subtract'
      codeSource={source}
      dependencies={["subtract"]}
      description="Subtract two numbers."
      args={["minuend (number): The first number in a subtraction.","subtrahend (number): The second number in a subtraction."]}
      returns="(number): Returns the difference."
    />
  );
};

export const sum = () => {
  const source = `// source here`;
  return (
    <Template
      method='sum'
      title='sum'
      codeSource={source}
      dependencies={["sum"]}
      description="Computes the sum of the values in array."
      args={["array (Array): The array to iterate over."]}
      returns="(number): Returns the sum."
    />
  );
};

export const sumBy = () => {
  const source = `// source here`;
  return (
    <Template
      method='sumBy'
      title='sumBy'
      codeSource={source}
      dependencies={["sumBy"]}
      description="This method is like _.sum except that it accepts iteratee which is invoked for each element in array to generate the value to be summed. The iteratee is invoked with one argument: (value)."
      args={["array (Array): The array to iterate over.","[iteratee=_.identity] (Function): The iteratee invoked per element."]}
      returns="(number): Returns the sum."
    />
  );
};