import { useRef } from "react";

const Modal = ({ onClose }) => {
  const modalRef = useRef();

  const CloseModal = (e) => {
    if (modalRef.current === e.target) onClose();
  };

  return (
    <div
      ref={modalRef}
      onClick={CloseModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="flex flex-col gap-5">
        <button onClick={onClose} className="bg-white p-2">
          X
        </button>
        <p>This is a Modal</p>
        <p>CLick anywhere or at X to close it</p>
      </div>
    </div>
  );
};

export default Modal;
