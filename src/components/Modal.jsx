import { Fragment } from "react";


function Modal({ children, onClose }) {
  return (
    <Fragment>
      <div className="backdrop" onClick={onClose} />
      <dialog open className="modal">
        {children}
      </dialog>
    </Fragment>
  );
}

export default Modal;