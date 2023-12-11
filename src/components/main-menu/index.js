import React, {memo} from 'react';
import {cn as bem} from "@bem-react/classname";
import './style.css';
import {Link} from "react-router-dom";

function MainMenu() {
  const cn = bem("Main-menu");
  return (
    <nav>
      <ul>
        <li className={cn("main-page")}>
          <Link to="/" className={cn('main-page-link')}> Главная</Link>
        </li>
      </ul>
    </nav>
  );
}

export default memo(MainMenu);
