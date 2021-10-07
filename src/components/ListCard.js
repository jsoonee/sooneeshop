import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faSearchPlus, faCartPlus } from '@fortawesome/free-solid-svg-icons';

const ListCard = (props) => {
    const { name, sort, price, pic } = props.data;
    return (
            <li className={`pdt ${sort}`}>
                <div className="pic">
                    <img src={pic} alt=""/>
                    <div className="pHover">
                        <div className="hoverFlex">
                            <span className="fa-stack fa-2x">
                                <FontAwesomeIcon icon={faCircle} className="fa-stack-2x"/>
                                <FontAwesomeIcon icon={faSearchPlus} className="fa-stack-1x" color="rgba(0,0,0,0.5)"/>
                            </span>
                            <span className="fa-stack fa-2x" onClick={() => props.addItem(props.data)}>
                                <FontAwesomeIcon icon={faCircle} className="fa-stack-2x"/>
                                <FontAwesomeIcon icon={faCartPlus} className="fa-stack-1x" color="rgba(0,0,0,0.5)"/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="desc">
                    <h2>{name}</h2>
                    <div>₩{price}</div>
                </div>
            </li>
    );
}

export default ListCard;