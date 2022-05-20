import ReactModal from 'react-modal';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ data, closeModal, isOpen }) => {
  ReactModal.setAppElement("#root");

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(var(--bg-rgb), 0.5)",
      zIndex: "1000",
    },
    content: {
      backgroundColor: "var(--bg-color)",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0",
    },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={closeModal}
      contentLabel="Detail"
    >
      <div className="imageBox">
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/products/${data.id}-600w.png`} alt="modal" className="modalImage" />
        </div>
        <div className="close" onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </div>
      </div>
      <div className="modal-flex">
        <h2>{data.name}</h2>
        <div className="priceTag">
          ₩{data.price.toLocaleString("ko-KR")}
        </div>
      </div>
    </ReactModal>
  );
}

export default Modal;