import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '../src/components';
import { App } from './App';

const Root = (
  <>
    <CssBaseline />
    <App />
  </>
);

ReactDOM.render(Root, document.getElementById('root'));
