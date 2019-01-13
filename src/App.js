import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import Counter from './Counter';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

// window.REDUX faz a extensão do devtools funfar
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// compose enhancers é pq só pode ter 2 argumentos e ae pra ter a extensão e o thunk uso isso
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
// Redux thunk é o que faz o dispatch dentro de actions funcionar, é um middleware. Saiba mais em https://github.com/reduxjs/redux-thunk

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}
