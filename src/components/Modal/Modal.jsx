import reactDom from "react-dom";
import { IoClose } from "react-icons/io5";

import "./modal.scss";

const Modal = ({ open, onClose, closeOverlay, children }) => {
  if (!open) return null;

  const handleClose = () => {
    if (closeOverlay) onClose();
  };

  const stopProp = (e) => {
    if (closeOverlay) e.stopPropagation();
  };

  return reactDom.createPortal(
    <article className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={stopProp}>
        {children}
        <IoClose className="modal-content__close-btn" onClick={onClose} />
      </div>
    </article>,
    document.getElementById("modal-root")
  );
};

export default Modal;
