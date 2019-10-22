import React from 'react';
import { Template } from '../../core/template';

export default { title: 'Properties' };


export const VERSION = () => {
  const source = `// source here`;
  return (
    <Template
      method='VERSION'
      title='VERSION'
      codeSource={source}
      dependencies={["VERSION"]}
      description="(string): The semantic version number."
      args={[]}
      returns=""
    />
  );
};

export const templateSettings = () => {
  const source = `// source here`;
  return (
    <Template
      method='templateSettings'
      title='templateSettings'
      codeSource={source}
      dependencies={["templateSettings"]}
      description="(Object): By default, the template delimiters used by lodash are like those in embedded Ruby (ERB) as well as ES2015 template strings. Change the following template settings to use alternative delimiters."
      args={[]}
      returns=""
    />
  );
};

export const templateSettingsEscape = () => {
  const source = `// source here`;
  return (
    <Template
      method='templateSettings-escape'
      title='templateSettings-escape'
      codeSource={source}
      dependencies={["templateSettings-escape"]}
      description="(RegExp): Used to detect data property values to be HTML-escaped."
      args={[]}
      returns=""
    />
  );
};

export const templateSettingsEvaluate = () => {
  const source = `// source here`;
  return (
    <Template
      method='templateSettings-evaluate'
      title='templateSettings-evaluate'
      codeSource={source}
      dependencies={["templateSettings-evaluate"]}
      description="(RegExp): Used to detect code to be evaluated."
      args={[]}
      returns=""
    />
  );
};

export const templateSettingsImports = () => {
  const source = `// source here`;
  return (
    <Template
      method='templateSettings-imports'
      title='templateSettings-imports'
      codeSource={source}
      dependencies={["templateSettings-imports"]}
      description="(Object): Used to import variables into the compiled template."
      args={[]}
      returns=""
    />
  );
};

export const templateSettingsInterpolate = () => {
  const source = `// source here`;
  return (
    <Template
      method='templateSettings-interpolate'
      title='templateSettings-interpolate'
      codeSource={source}
      dependencies={["templateSettings-interpolate"]}
      description="(RegExp): Used to detect data property values to inject."
      args={[]}
      returns=""
    />
  );
};

export const templateSettingsVariable = () => {
  const source = `// source here`;
  return (
    <Template
      method='templateSettings-variable'
      title='templateSettings-variable'
      codeSource={source}
      dependencies={["templateSettings-variable"]}
      description="(string): Used to reference the data object in the template text."
      args={[]}
      returns=""
    />
  );
};