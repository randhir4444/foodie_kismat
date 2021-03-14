import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
ReactDOM.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById('root')
);

{/* <div className="container-fluid" nav_bg>
    <div className="row">
      <div className="col-10 mx-auto">

      </div>
      </div>
      </div> */}