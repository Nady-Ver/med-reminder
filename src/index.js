import React from 'react';
import ReactDOM from 'react-dom';
import './css/main-style.css'
import Name from './elements/name'
import Nav from './elements/nav'
import Article from './elements/article'
// import Card from './elements/card';
// import './css/card-style.css'

ReactDOM.render(
  <React.StrictMode>
    <div className="main-div">
      <Name />
      <div className="main-controls">
        <Nav />
        <Article />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

