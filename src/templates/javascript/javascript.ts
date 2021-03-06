import {capitalize, deCapitalize, Opts} from '../helpers'

export const javaScriptTemplate = (opts: Opts): string => {
  return `import React from 'react';

export const ${opts.name}${capitalize(opts.type)} = ({}) => {

  return (
    <div className='${deCapitalize(opts.name)}-${opts.type}'>
      ${opts.name}${capitalize(opts.type)} works!
    </div>
  );
};
`
}
