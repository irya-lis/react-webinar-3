import React, {memo} from 'react';
import {cn as bem} from "@bem-react/classname";
import './style.css';

function MainMenu() {
  const cn = bem("Main-menu");
  return (
    <nav>
      <ul>
        <li className={cn("main-page")}>
          <a href="/" className={cn("main-page-link")}>Главная</a>
        </li>
      </ul>
    </nav>
  );
}

export default memo(MainMenu);