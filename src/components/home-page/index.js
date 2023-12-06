import React, {memo} from "react";
import PropTypes from "prop-types";
import './style.css';
import {Link} from "react-router-dom";

function HomePage() {
  return (
    <div className='Home-page'>
      <Link to={`/`}>Главная</Link>
    </div>
  )
}

HomePage.propTypes = {
  title: PropTypes.node,
};

export default memo(HomePage);
