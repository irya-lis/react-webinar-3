import React from 'react';
import MainMenu from "../main-menu";
import BasketTool from "../basket-tool";
import './style.css';

function ContentInformation () {
  return (
    <div className="content-wrapper">
      <MainMenu/>
      <BasketTool/>
    </div>
  )
}

export default ContentInformation;
