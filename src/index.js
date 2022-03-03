import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {rootReducer} from "./redux/reducers/rootReducer";
import Counter from "./components/Counter";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Counter/>
  </Provider>,
  document.getElementById('root')
);