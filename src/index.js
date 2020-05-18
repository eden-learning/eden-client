import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/index.css';
import * as firebase from 'firebase';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const config = {
  apiKey: 'AIzaSyAcROEeSB9ZdIgdbfqzn2Z5_Ln-R6Z1fCA',
  authDomain: 'eden-5d453.firebaseapp.com',
  databaseURL: 'https://eden-5d453.firebaseio.com/',
  projectId: 'eden-5d453',
  storageBucket: 'eden-5d453.appspot.com',
  messagingSenderId: '104504942608',
  appId: '1:104504942608:web:45fe2f7dccdd8361836a95',
  measurementId: 'G-RDVC6KSP2D',
};
firebase.initializeApp(config);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
