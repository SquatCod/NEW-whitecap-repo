import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './pages/styles.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

export default function Splash() {

  return (
    <>
      <div>
        hello user tis is website :)<br/><hr/>click home to see pages
      </div>

    </>
  )
}
