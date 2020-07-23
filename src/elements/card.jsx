import React from 'react';
import MainPhoto from './mainPhoto';

function Card() {
  return (
    <div className="card">
      <div className="card-head-div">
        <div className="card-main-photo-div">
          <MainPhoto />
        </div>
        <p className="card-full-name">Верещагина Надежда Владимировна</p>
      </div>
    </div>
  );
}

export default Card;
