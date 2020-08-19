import React from 'react';
import './Modal.css';

const Modal = ({ show, hideModal, children }) => {

    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return <div className={showHideClassName}>
                <section className="modal-main">
                    {children}
                    <button onClick={hideModal}>Close &times;</button>
                </section>
            </div>
}

export default Modal;