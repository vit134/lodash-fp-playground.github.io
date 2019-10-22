import React from 'react';
import { Template } from '../../core/template';

export default { title: 'Properties' };


export const VERSION = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="VERSION"
      title="VERSION"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["VERSION"]}
      description="(string): The semantic version number."
      args={[]}
      returns=""
    />
  );
};

export const templateSettings = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="templateSettings"
      title="templateSettings"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["templateSettings"]}
      description="(Object): By default, the template delimiters used by lodash are like those in embedded Ruby (ERB) as well as ES2015 template strings. Change the following template settings to use alternative delimiters."
      args={[]}
      returns=""
    />
  );
};

export const templateSettingsEscape = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="templateSettings-escape"
      title="templateSettings-escape"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["templateSettings-escape"]}
      description="(RegExp): Used to detect data property values to be HTML-escaped."
      args={[]}
      returns=""
    />
  );
};

export const templateSettingsEvaluate = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="templateSettings-evaluate"
      title="templateSettings-evaluate"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["templateSettings-evaluate"]}
      description="(RegExp): Used to detect code to be evaluated."
      args={[]}
      returns=""
    />
  );
};

export const templateSettingsImports = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="templateSettings-imports"
      title="templateSettings-imports"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["templateSettings-imports"]}
      description="(Object): Used to import variables into the compiled template."
      args={[]}
      returns=""
    />
  );
};

export const templateSettingsInterpolate = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="templateSettings-interpolate"
      title="templateSettings-interpolate"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["templateSettings-interpolate"]}
      description="(RegExp): Used to detect data property values to inject."
      args={[]}
      returns=""
    />
  );
};

export const templateSettingsVariable = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="templateSettings-variable"
      title="templateSettings-variable"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["templateSettings-variable"]}
      description="(string): Used to reference the data object in the template text."
      args={[]}
      returns=""
    />
  );
};