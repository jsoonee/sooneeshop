import React, { useState } from 'react';
import Modal from 'react-modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Filter from './Filter';
import List from './List';

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
    }

    Modal.setAppElement('#root');

    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0,0,0,0.5)',
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '0',
        },
    };
    return (
        <section className="sec product">
            <div className="wAlign">
                <div className="pHead">
                    <div className="headline"><h1>products</h1></div>
                    <div>
                        <Filter/>
                    </div>
                </div>
                <List products={products} addItem={addItem} modalData={modalData} openModal={openModal}/>

                { modalItem &&
                    <Modal
                      isOpen={modalIsOpen}
                      style={customStyles}
                      onRequestClose={closeModal}
                      contentLabel="Detail"
                    >
                        <div className="imageBox">
                            <div><img src={modalItem.pic_6} alt="" className="modalImage"/></div>
                            <div className="close" onClick={closeModal}><FontAwesomeIcon icon={faTimes} size="lg"/></div>
                        </div>
                        <div className="modal-flex">
                            <h2>{modalItem.name}</h2>
                            <div className="pricetag">₩{modalItem.price.toLocaleString('ko-KR')}</div>
                        </div>
                    </Modal>
                }

            </div>
        </section>
    );
}

export default Product;