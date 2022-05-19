import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faSearchPlus,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";

const ListCard = (props) => {
  const { id, name, sort, price } = props.data;

  return (
    <li className={`pdt ${sort}`}>
      <div className="pic">
        <img src={`${process.env.PUBLIC_URL}/images/products/${id}-360w.png`} alt={name} />
        <div className="pHover">
          <div className="hoverFlex">
            <span
              className="fa-stack fa-2x search"
              onClick={() => {
                props.modalData(props.data);
                props.openModal();
              }}
            >
              <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" />
              <FontAwesomeIcon
                icon={faSearchPlus}
                className="fa-stack-1x searchIcon"
                color="rgba(0,0,0,0.5)"
              />
            </span>
            <span 
              className="fa-stack fa-2x cartPlus"
              onClick={() => {
                props.showToast();
                props.addItem(props.data);
              }}
            >
              <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" />
              <FontAwesomeIcon
                icon={faCartPlus}
                className="fa-stack-1x cartIcon"
                color="rgba(0,0,0,0.5)"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="desc">
        <h2>{name}</h2>
        <div>₩{price.toLocaleString("ko-KR")}</div>
      </div>
    </li>
  );
};

export default ListCard;
