import React from "react";

import ListCard from "./ListCard";

const List = ({ products, addItem, modalData, openModal, showToast }) => {
  return (
    <ul className="pdts">
      {products.map((d) => (
        <ListCard
          key={d.id}
          data={d}
          addItem={addItem}
          modalData={modalData}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

export default List;
