import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import todoAppReducers from './reducers';

// const store = createStore(todoAppReducers);

const AppRender = () => {
  const rootEl = document.getElementById('wrapper');
  ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    rootEl
  );
};

AppRender();

if (module.hot) {
  module.hot.accept('./components/App', () => { AppRender() });
  // module.hot.accept('./reducers', () => {
  //   store.replaceReducer(todoAppReducers);
  // });
}
