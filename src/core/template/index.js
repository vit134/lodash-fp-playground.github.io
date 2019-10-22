import React from 'react';
import Embed from 'react-runkit';
import './styles.css';

export const Template = ({
  title,
  method,
  description,
  args,
  returns,
  lodashSource,
  fpSource,
  dependencies
}) => {
  const preamble = dependencies.map(el => {
    return `const ${el} = require('lodash/fp/${el}')`;
  }).join(';');

  return (
    <div className="root">
      <div className="title">
        {title || method}
      </div>
      <div className="row description">
        {description}
      </div>
      <div className="row arguments">
        <h4>Arguments</h4>
        <div>
          <ol>
            {
              args.map(el => <li>{ el }</li>)
            }
          </ol>
        </div>
      </div>
      <div className="row returns">
        <h4>Returns</h4>
        <div>
          {returns}
        </div>
      </div>
      {lodashSource || fpSource && (
        <div className="row">
          <h4>Example</h4>
          <div className="code-source">
            <div className="code-source-column">
              <div>lodash</div>
              <Embed source={lodashSource} preamble={preamble} />
            </div>
            <div className="code-source-column">
              <div>fp</div>
              <Embed source={fpSource} preamble={preamble} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
