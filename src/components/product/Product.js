import React, { useState } from "react";

import Filter from "./Filter";
import List from "./List";
import Modal from "./Modal";

import "../../css/Filter.css";
import "../../css/List.css";
import "../../css/Modal.css";

const Product = ({ products, addItem, openCart }) => {
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
          openCart={openCart}
          modalData={modalData}
          openModal={openModal}
        />

        {modalItem && (
          <Modal
            data={modalItem}
            closeModal={closeModal}
            isOpen={modalIsOpen}
          />
        )}

      </div>
    </section>
  );
};

export default Product;