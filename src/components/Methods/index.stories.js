import React from 'react';
import { Template } from '../../core/template';

export default { title: 'Methods' };


export const templateSettingsImports = () => {
  const source = `// source here`;
  return (
    <Template
      method='templateSettings-imports-_'
      title='templateSettings-imports-_'
      codeSource={source}
      dependencies={["templateSettings-imports-_"]}
      description="A reference to the lodash function."
      args={[]}
      returns=""
    />
  );
};