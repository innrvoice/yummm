import { createUseStyles } from 'react-jss';
import normalize from 'normalize-jss';

export default createUseStyles(
  {
    root: {},
    '@import':
      'url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap")',

    '@global': {
      ...normalize['@global'],

      body: {
        ...normalize['@global'].body,
        fontFamily: 'Roboto, serif',
      },
    },
  },
  { name: 'CssBaseline' },
);
