import React, { useState } from 'react';

import Cart from './cart/Cart';

import '../css/Cart.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {

    const [cartOpen, setCartOpen] = useState(false);

    const cartOnClick = () => {
        if (!cartOpen) {
            setCartOpen(true);
        }
        else {
            setCartOpen(false);
        }
    }

    return (
        <header className="sec header">
            <div className="head">
                <div className="hFlex">
                    <div className="logo">
                        <a href="./">
                            SOONEESHOP
                        </a>
                    </div>
                    <div className="cartMenu">
                        <span className="tooltip" onClick={cartOnClick}>
                            <span className="fa-layers fa-fw cart">
                                <FontAwesomeIcon icon={faShoppingCart}/>
                                <span className="fa-layers-counter qnt">{props.cart.length}</span>
                            </span>
                        </span>
                        { cartOpen ? <span className="cartTooltip"><Cart cart={props.cart} onDecrease={props.onDecrease} onIncrease={props.onIncrease} onRemove={props.onRemove} key={props.cart.id}/></span> : null }   
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;