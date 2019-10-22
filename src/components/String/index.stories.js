import React from 'react';
import { Template } from '../../core/template';

export default { title: 'String' };


export const camelCase = () => {
  const source = `// source here`;
  return (
    <Template
      method='camelCase'
      title='camelCase'
      codeSource={source}
      dependencies={["camelCase"]}
      description="Converts string to camel case."
      args={["[string=''] (string): The string to convert."]}
      returns="(string): Returns the camel cased string."
    />
  );
};

export const capitalize = () => {
  const source = `// source here`;
  return (
    <Template
      method='capitalize'
      title='capitalize'
      codeSource={source}
      dependencies={["capitalize"]}
      description="Converts the first character of string to upper case and the remaining to lower case."
      args={["[string=''] (string): The string to capitalize."]}
      returns="(string): Returns the capitalized string."
    />
  );
};

export const deburr = () => {
  const source = `// source here`;
  return (
    <Template
      method='deburr'
      title='deburr'
      codeSource={source}
      dependencies={["deburr"]}
      description="Deburrs string by converting Latin-1 Supplement and Latin Extended-A letters to basic Latin letters and removing combining diacritical marks."
      args={["[string=''] (string): The string to deburr."]}
      returns="(string): Returns the deburred string."
    />
  );
};

export const endsWith = () => {
  const source = `// source here`;
  return (
    <Template
      method='endsWith'
      title='endsWith'
      codeSource={source}
      dependencies={["endsWith"]}
      description="Checks if string ends with the given target string."
      args={["[string=''] (string): The string to inspect.","[target] (string): The string to search for.","[position=string.length] (number): The position to search up to."]}
      returns="(boolean): Returns true if string ends with target, else false."
    />
  );
};

export const escape = () => {
  const source = `// source here`;
  return (
    <Template
      method='escape'
      title='escape'
      codeSource={source}
      dependencies={["escape"]}
      description="Converts the characters &quot;&amp;&quot;, &quot;&lt;&quot;, &quot;&gt;&quot;, &#39;&quot;&#39;, and &quot;&#39;&quot; in string to their corresponding HTML entities.

Note: No other characters are escaped. To escape additional characters use a third-party library like he.

Though the &quot;&gt;&quot; character is escaped for symmetry, characters like &quot;&gt;&quot; and &quot;/&quot; don&#39;t need escaping in HTML and have no special meaning unless they&#39;re part of a tag or unquoted attribute value. See Mathias Bynens&#39;s article (under &quot;semi-related fun fact&quot;) for more details.

When working with HTML you should always quote attribute values to reduce XSS vectors."
      args={["[string=''] (string): The string to escape."]}
      returns="(string): Returns the escaped string."
    />
  );
};

export const escapeRegExp = () => {
  const source = `// source here`;
  return (
    <Template
      method='escapeRegExp'
      title='escapeRegExp'
      codeSource={source}
      dependencies={["escapeRegExp"]}
      description="Escapes the RegExp special characters &quot;^&quot;, &quot;$&quot;, &quot;&quot;, &quot;.&quot;, &quot;*&quot;, &quot;+&quot;, &quot;?&quot;, &quot;(&quot;, &quot;)&quot;, &quot;[&quot;, &quot;]&quot;, &quot;{&quot;, &quot;}&quot;, and &quot;|&quot; in string."
      args={["[string=''] (string): The string to escape."]}
      returns="(string): Returns the escaped string."
    />
  );
};

export const kebabCase = () => {
  const source = `// source here`;
  return (
    <Template
      method='kebabCase'
      title='kebabCase'
      codeSource={source}
      dependencies={["kebabCase"]}
      description="Converts string to kebab case."
      args={["[string=''] (string): The string to convert."]}
      returns="(string): Returns the kebab cased string."
    />
  );
};

export const lowerCase = () => {
  const source = `// source here`;
  return (
    <Template
      method='lowerCase'
      title='lowerCase'
      codeSource={source}
      dependencies={["lowerCase"]}
      description="Converts string, as space separated words, to lower case."
      args={["[string=''] (string): The string to convert."]}
      returns="(string): Returns the lower cased string."
    />
  );
};

export const lowerFirst = () => {
  const source = `// source here`;
  return (
    <Template
      method='lowerFirst'
      title='lowerFirst'
      codeSource={source}
      dependencies={["lowerFirst"]}
      description="Converts the first character of string to lower case."
      args={["[string=''] (string): The string to convert."]}
      returns="(string): Returns the converted string."
    />
  );
};

export const pad = () => {
  const source = `// source here`;
  return (
    <Template
      method='pad'
      title='pad'
      codeSource={source}
      dependencies={["pad"]}
      description="Pads string on the left and right sides if it&#39;s shorter than length. Padding characters are truncated if they can&#39;t be evenly divided by length."
      args={["[string=''] (string): The string to pad.","[length=0] (number): The padding length.","[chars=' '] (string): The string used as padding."]}
      returns="(string): Returns the padded string."
    />
  );
};

export const padEnd = () => {
  const source = `// source here`;
  return (
    <Template
      method='padEnd'
      title='padEnd'
      codeSource={source}
      dependencies={["padEnd"]}
      description="Pads string on the right side if it&#39;s shorter than length. Padding characters are truncated if they exceed length."
      args={["[string=''] (string): The string to pad.","[length=0] (number): The padding length.","[chars=' '] (string): The string used as padding."]}
      returns="(string): Returns the padded string."
    />
  );
};

export const padStart = () => {
  const source = `// source here`;
  return (
    <Template
      method='padStart'
      title='padStart'
      codeSource={source}
      dependencies={["padStart"]}
      description="Pads string on the left side if it&#39;s shorter than length. Padding characters are truncated if they exceed length."
      args={["[string=''] (string): The string to pad.","[length=0] (number): The padding length.","[chars=' '] (string): The string used as padding."]}
      returns="(string): Returns the padded string."
    />
  );
};

export const parseInt = () => {
  const source = `// source here`;
  return (
    <Template
      method='parseInt'
      title='parseInt'
      codeSource={source}
      dependencies={["parseInt"]}
      description="Converts string to an integer of the specified radix. If radix is undefined or 0, a radix of 10 is used unless value is a hexadecimal, in which case a radix of 16 is used.

Note: This method aligns with the ES5 implementation of parseInt."
      args={["string (string): The string to convert.","[radix=10] (number): The radix to interpret value by."]}
      returns="(number): Returns the converted integer."
    />
  );
};

export const repeat = () => {
  const source = `// source here`;
  return (
    <Template
      method='repeat'
      title='repeat'
      codeSource={source}
      dependencies={["repeat"]}
      description="Repeats the given string n times."
      args={["[string=''] (string): The string to repeat.","[n=1] (number): The number of times to repeat the string."]}
      returns="(string): Returns the repeated string."
    />
  );
};

export const replace = () => {
  const source = `// source here`;
  return (
    <Template
      method='replace'
      title='replace'
      codeSource={source}
      dependencies={["replace"]}
      description="Replaces matches for pattern in string with replacement.

Note: This method is based on String#replace."
      args={["[string=''] (string): The string to modify.","pattern (RegExp|string): The pattern to replace.","replacement (Function|string): The match replacement."]}
      returns="(string): Returns the modified string."
    />
  );
};

export const snakeCase = () => {
  const source = `// source here`;
  return (
    <Template
      method='snakeCase'
      title='snakeCase'
      codeSource={source}
      dependencies={["snakeCase"]}
      description="Converts string to snake case."
      args={["[string=''] (string): The string to convert."]}
      returns="(string): Returns the snake cased string."
    />
  );
};

export const split = () => {
  const source = `// source here`;
  return (
    <Template
      method='split'
      title='split'
      codeSource={source}
      dependencies={["split"]}
      description="Splits string by separator.

Note: This method is based on String#split."
      args={["[string=''] (string): The string to split.","separator (RegExp|string): The separator pattern to split by.","[limit] (number): The length to truncate results to."]}
      returns="(Array): Returns the string segments."
    />
  );
};

export const startCase = () => {
  const source = `// source here`;
  return (
    <Template
      method='startCase'
      title='startCase'
      codeSource={source}
      dependencies={["startCase"]}
      description="Converts string to start case."
      args={["[string=''] (string): The string to convert."]}
      returns="(string): Returns the start cased string."
    />
  );
};

export const startsWith = () => {
  const source = `// source here`;
  return (
    <Template
      method='startsWith'
      title='startsWith'
      codeSource={source}
      dependencies={["startsWith"]}
      description="Checks if string starts with the given target string."
      args={["[string=''] (string): The string to inspect.","[target] (string): The string to search for.","[position=0] (number): The position to search from."]}
      returns="(boolean): Returns true if string starts with target, else false."
    />
  );
};

export const template = () => {
  const source = `// source here`;
  return (
    <Template
      method='template'
      title='template'
      codeSource={source}
      dependencies={["template"]}
      description="Creates a compiled template function that can interpolate data properties in &quot;interpolate&quot; delimiters, HTML-escape interpolated data properties in &quot;escape&quot; delimiters, and execute JavaScript in &quot;evaluate&quot; delimiters. Data properties may be accessed as free variables in the template. If a setting object is given, it takes precedence over _.templateSettings values.

Note: In the development build _.template utilizes sourceURLs for easier debugging.

For more information on precompiling templates see lodash&#39;s custom builds documentation.

For more information on Chrome extension sandboxes see Chrome&#39;s extensions documentation."
      args={["[string=''] (string): The template string.","[options={}] (Object): The options object.","[options.escape=_.templateSettings.escape] (RegExp): The HTML 'escape' delimiter.","[options.evaluate=_.templateSettings.evaluate] (RegExp): The 'evaluate' delimiter.","[options.imports=_.templateSettings.imports] (Object): An object to import into the template as free variables.","[options.interpolate=_.templateSettings.interpolate] (RegExp): The 'interpolate' delimiter.","[options.sourceURL='lodash.templateSources[n]'] (string): The sourceURL of the compiled template.","[options.variable='obj'] (string): The data object variable name."]}
      returns="(Function): Returns the compiled template function."
    />
  );
};

export const toLower = () => {
  const source = `// source here`;
  return (
    <Template
      method='toLower'
      title='toLower'
      codeSource={source}
      dependencies={["toLower"]}
      description="Converts string, as a whole, to lower case just like String#toLowerCase."
      args={["[string=''] (string): The string to convert."]}
      returns="(string): Returns the lower cased string."
    />
  );
};

export const toUpper = () => {
  const source = `// source here`;
  return (
    <Template
      method='toUpper'
      title='toUpper'
      codeSource={source}
      dependencies={["toUpper"]}
      description="Converts string, as a whole, to upper case just like String#toUpperCase."
      args={["[string=''] (string): The string to convert."]}
      returns="(string): Returns the upper cased string."
    />
  );
};

export const trim = () => {
  const source = `// source here`;
  return (
    <Template
      method='trim'
      title='trim'
      codeSource={source}
      dependencies={["trim"]}
      description="Removes leading and trailing whitespace or specified characters from string."
      args={["[string=''] (string): The string to trim.","[chars=whitespace] (string): The characters to trim."]}
      returns="(string): Returns the trimmed string."
    />
  );
};

export const trimEnd = () => {
  const source = `// source here`;
  return (
    <Template
      method='trimEnd'
      title='trimEnd'
      codeSource={source}
      dependencies={["trimEnd"]}
      description="Removes trailing whitespace or specified characters from string."
      args={["[string=''] (string): The string to trim.","[chars=whitespace] (string): The characters to trim."]}
      returns="(string): Returns the trimmed string."
    />
  );
};

export const trimStart = () => {
  const source = `// source here`;
  return (
    <Template
      method='trimStart'
      title='trimStart'
      codeSource={source}
      dependencies={["trimStart"]}
      description="Removes leading whitespace or specified characters from string."
      args={["[string=''] (string): The string to trim.","[chars=whitespace] (string): The characters to trim."]}
      returns="(string): Returns the trimmed string."
    />
  );
};

export const truncate = () => {
  const source = `// source here`;
  return (
    <Template
      method='truncate'
      title='truncate'
      codeSource={source}
      dependencies={["truncate"]}
      description="Truncates string if it&#39;s longer than the given maximum string length. The last characters of the truncated string are replaced with the omission string which defaults to &quot;...&quot;."
      args={["[string=''] (string): The string to truncate.","[options={}] (Object): The options object.","[options.length=30] (number): The maximum string length.","[options.omission='...'] (string): The string to indicate text is omitted.","[options.separator] (RegExp|string): The separator pattern to truncate to."]}
      returns="(string): Returns the truncated string."
    />
  );
};

export const unescape = () => {
  const source = `// source here`;
  return (
    <Template
      method='unescape'
      title='unescape'
      codeSource={source}
      dependencies={["unescape"]}
      description="The inverse of _.escape; this method converts the HTML entities &amp;amp;, &amp;lt;, &amp;gt;, &amp;quot;, and &amp;#39; in string to their corresponding characters.

Note: No other HTML entities are unescaped. To unescape additional HTML entities use a third-party library like he."
      args={["[string=''] (string): The string to unescape."]}
      returns="(string): Returns the unescaped string."
    />
  );
};

export const upperCase = () => {
  const source = `// source here`;
  return (
    <Template
      method='upperCase'
      title='upperCase'
      codeSource={source}
      dependencies={["upperCase"]}
      description="Converts string, as space separated words, to upper case."
      args={["[string=''] (string): The string to convert."]}
      returns="(string): Returns the upper cased string."
    />
  );
};

export const upperFirst = () => {
  const source = `// source here`;
  return (
    <Template
      method='upperFirst'
      title='upperFirst'
      codeSource={source}
      dependencies={["upperFirst"]}
      description="Converts the first character of string to upper case."
      args={["[string=''] (string): The string to convert."]}
      returns="(string): Returns the converted string."
    />
  );
};

export const words = () => {
  const source = `// source here`;
  return (
    <Template
      method='words'
      title='words'
      codeSource={source}
      dependencies={["words"]}
      description="Splits string into an array of its words."
      args={["[string=''] (string): The string to inspect.","[pattern] (RegExp|string): The pattern to match words."]}
      returns="(Array): Returns the words of string."
    />
  );
};