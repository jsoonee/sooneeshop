import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = ({ cart }) => {
    return (
        <header className="sec header">
            <div className="head">
                <div className="hFlex">
                    <a href="/">
                        <div className="logo">
                            SOONEESHOP
                        </div>
                    </a>
                    <div className="nav">
                        <ul>
                            <li className="contact">
                                <span className="tooltip">contact</span>
                                <span className="tooltip-text">
                                    <div className="service">Customer Service</div>
                                    <div className="tt-flex call">
                                        <div><FontAwesomeIcon icon={faHeadset}/></div>
                                        <div>000-000-0000</div>
                                    </div>
                                    <div className="tt-flex mail">
                                        <div><FontAwesomeIcon icon={faEnvelope}/></div>
                                        <div>support@sn.shop</div>
                                    </div>
                                </span>
                            </li>
                            <li className="event">
                                <span className="tooltip">event</span>
                                <span className="tooltip-text eventText">GRAND OPEN<br/>20% 할인 쿠폰 증정</span>
                            </li>
                            <li>
                                <span className="tooltip">
                                    <span className="cart">cart</span>
                                    <span className="qnt">{cart.length}</span>
                                </span>
                                <span className="tooltip-text"></span>
                                
                            </li>
                            <li>
                                login
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;