import React from 'react';
import { Template } from '../../core/template';

export default { title: 'Methods' };


export const templateSettingsImports = () => {
  const lodashSource = `// lodash source here`;
const fpSource = `// fp source here`;

  return (
    <Template
      method="templateSettings-imports-_"
      title="templateSettings-imports-_"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["templateSettings-imports-_"]}
      description="A reference to the lodash function."
      args={[]}
      returns=""
    />
  );
};