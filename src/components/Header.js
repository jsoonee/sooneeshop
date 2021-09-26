import React from 'react';

import { AiFillCustomerService, AiFillMail } from 'react-icons/ai';

const Header = () => {
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
                                <span className="tooltip">Contact</span>
                                <span className="tooltip-text">
                                    <div className="service">Customer Service</div>
                                    <div className="tt-flex call">
                                        <div><AiFillCustomerService className="csIcon"/></div>
                                        <div>080-000-0000</div>
                                    </div>
                                    <div className="tt-flex mail">
                                        <div><AiFillMail className="maIcon"/></div>
                                        <div>support@soonee.shop</div>
                                    </div>
                                </span>
                            </li>
                            <li className="event">
                                <span className="tooltip">Event</span>
                                <span className="tooltip-text">GRAND OPEN<br/>20% 할인 쿠폰 증정</span>
                            </li>
                            <li>
                                Cart
                            </li>
                            <li>
                                Login
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;