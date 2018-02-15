import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { create } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import jssExtend from 'jss-extend';
import { createGenerateClassName, jssPreset } from 'material-ui/styles';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';
import App from './App';

export const jss = create({ plugins: [...jssPreset().plugins, jssExtend()] });
export const generateClassName = createGenerateClassName();

ReactDOM.render(<JssProvider jss={jss} generateClassName={generateClassName}><Provider store={store}><App /></Provider></JssProvider>, document.getElementById('root'));
registerServiceWorker();
