import React from 'react';

let mainControls = [
    {name: "Главная страница", extension: null},
    {name: "Календарь", extension: null},
    {name: "Мед. информация", extension: []},
    {name: "Контакты", extension: null},
    {name: "О приоложении", extension: []}
]

function Nav() {
  return (
    <div className="nav">
      <div className="controls-div">
      </div>
      <div className="settings-button-div"></div>
    </div>
  );
}

export default Nav;
