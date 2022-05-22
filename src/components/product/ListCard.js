import React, { useRef, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faSearchPlus,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";

const ListCard = (props) => {
  const { id, name, sort, price } = props.data;
  const cardRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleCardClick = (event) => {
      const isMobile = /Mobi/.test(window.navigator.userAgent);
      if (isMobile && cardRef.current && cardRef.current.contains(event.target)) {
        buttonRef.current.style.display = "block";
      } else if (isMobile) {
        buttonRef.current.style.display = "none";
      }
    }
    document.addEventListener("click", handleCardClick);
    return () => {
      document.removeEventListener("click", handleCardClick);
    }
  }, []);

  return (
    <li className={`pdt ${sort}`}>
      <div className="pic" ref={cardRef}>
        <img src={`${process.env.PUBLIC_URL}/images/products/${id}-360w.webp`} alt={name} />
        <div className="pHover" ref={buttonRef}>
          <div className="hoverFlex">
            <span
              className="fa-stack fa-2x search"
              onClick={() => {
                props.modalData(props.data);
                props.openModal();
              }}
            >
              <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" color="var(--bg-color)"/>
              <FontAwesomeIcon
                icon={faSearchPlus}
                className="fa-stack-1x searchIcon"
                color="var(--text-color)"
              />
            </span>
            <span 
              className="fa-stack fa-2x cartPlus"
              onClick={() => {
                props.addItem(props.data);
              }}
            >
              <FontAwesomeIcon icon={faCircle} className="fa-stack-2x"  color="var(--bg-color)"/>
              <FontAwesomeIcon
                icon={faCartPlus}
                className="fa-stack-1x cartIcon"
                color="var(--text-color)"
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
