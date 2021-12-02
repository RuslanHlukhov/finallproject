import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './components/i18next/i18next'
import "firebase/compat/auth";
import { Provider } from "react-redux";
import { store } from "./redux/store";


let renderEntireTree = () =>{
ReactDOM.render( 
  <Provider store={store}>
    <Suspense fallback={(<div>Loading ~~~</div>)}>
    <App />
    </Suspense>
  </Provider>,
  document.getElementById('root')
);
}
renderEntireTree()


