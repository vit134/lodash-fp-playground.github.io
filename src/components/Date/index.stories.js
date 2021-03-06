import React from 'react';
import { Template } from '../../core/template';

export default { title: 'Date' };


export const now = () => {
  const lodashSource = `// lodash source here`;
  const fpSource = `// fp source here`;

  return (
    <Template
      method="now"
      title="now"
      lodashSource={lodashSource}
      fpSource={fpSource}
      dependencies={["now"]}
      description="Gets the timestamp of the number of milliseconds that have elapsed since the Unix epoch (1 January 1970 00:00:00 UTC)."
      args={[]}
      returns="(number): Returns the timestamp."
    />
  );
};