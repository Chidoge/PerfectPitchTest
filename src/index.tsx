import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import App from './App';
import './index.scss';
import settings from './store/reducers/settings';
import testSettings from './store/reducers/testSettings';

const rootReducer = combineReducers({
	user: settings,
	test: testSettings
})

const store = createStore(rootReducer)

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)