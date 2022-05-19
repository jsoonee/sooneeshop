import React, { useState } from "react";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Filter from "./Filter";
import List from "./List";

import "react-toastify/dist/ReactToastify.css";

import "../../css/Filter.css";
import "../../css/List.css";
import "../../css/Modal.css";

const Product = ({ products, addItem }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalItem, setModalItem] = useState();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const modalData = (i) => {
    setModalItem(i);
  };

  Modal.setAppElement("#root");

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
      zIndex: "1000",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0",
    },
  };

  const showToast = () => {
    toast.success("🛒Added to your cart", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <section className="sec product">
      <div className="wAlign">
        <div className="pHead">
          <div className="headline">
            <h1>products</h1>
          </div>
          <div>
            <Filter />
          </div>
        </div>
        <List
          products={products}
          addItem={addItem}
          modalData={modalData}
          openModal={openModal}
          showToast={showToast}
        />

        {modalItem && (
          <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            onRequestClose={closeModal}
            contentLabel="Detail"
          >
            <div className="imageBox">
              <div>
                <img src={modalItem.pic_6} alt="" className="modalImage" />
              </div>
              <div className="close" onClick={closeModal}>
                <FontAwesomeIcon icon={faTimes} size="2x" />
              </div>
            </div>
            <div className="modal-flex">
              <h2>{modalItem.name}</h2>
              <div className="pricetag">
                ₩{modalItem.price.toLocaleString("ko-KR")}
              </div>
            </div>
          </Modal>
        )}

        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </section>
  );
};

export default Product;
