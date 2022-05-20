import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Filter from "./Filter";
import List from "./List";
import Modal from "./Modal";

import "react-toastify/dist/ReactToastify.css";

import "../../css/Filter.css";
import "../../css/List.css";
import "../../css/Modal.css";

const Product = ({ products, addItem }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalItem, setModalItem] = useState();

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const modalData = (item) => {
    setModalItem(item);
  }

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
            data={modalItem}
            closeModal={closeModal}
            isOpen={modalIsOpen}
          />
        )}

        <ToastContainer theme={window.matchMedia("(prefers-color-theme: dark)").matches ? "dark" : "light"}
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