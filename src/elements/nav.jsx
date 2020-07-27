import React from 'react';

let mainControls = [
    {name: "Главная страница", extension: null},
    {name: "Календарь", extension: null},
    {name: "Мед. информация", extension: []},
    {name: "Контакты", extension: null},
    {name: "О приоложении", extension: []}
]

function showControls(article) {
  return(
    <div className="controls-main">
      <span></span>
      <span></span>
      <p>{article.name}</p>
    </div>
  )
}

function Nav() {
  return (
    <div className="nav">
      <div className="controls-div">
        {mainControls.map(e => showControls(e))}
      </div>
      <div className="settings-button-div"></div>
    </div>
  );
}

export default Nav;
