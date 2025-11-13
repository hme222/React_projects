import React from "react";
import "../Modal.css";

const Modal = ({ children, show, close }) => {
  return (
    <>
      {show && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={close}>&times;</span>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
