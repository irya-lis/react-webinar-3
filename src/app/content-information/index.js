import React from 'react';
import MainMenu from "../../components/main-menu";
import BasketTool from "../../components/basket-tool";
import 'style.css';

function ContentInformation () {
  return (
    <div className="content-wrapper">
      <MainMenu/>
      <BasketTool/>
    </div>
  )
}

export default ContentInformation;
