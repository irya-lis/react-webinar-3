import React from "react";
import PropTypes from 'prop-types';
import './style.css';

function Modal({ children }) {
  return(
    <>
      <div className="Modal-overlay"/>
      <div className="Modal-show">
        {children}
      </div>
    </>
  )
}

Modal.propTypes = {
  children: PropTypes.node
}

export default React.memo(Modal);