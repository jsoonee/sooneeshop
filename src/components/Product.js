import React from 'react';

import Filter from './Filter';

import belt from '../images/belt.png';
import hoodie from '../images/hoodie.png';
import jacket from '../images/jacket.png';
import jacket2 from '../images/jacket2.png';
import jean from '../images/jean.png';
import jean2 from '../images/jean2.png';
import kardigan from '../images/kardigan.png';
import panties from '../images/panties.png';
import pants from '../images/pants.png';
import pants2 from '../images/pants2.png';
import polo from '../images/polo.png';
import shorts from '../images/shorts.png';
import shorts2 from '../images/shorts2.png';
import sleeveless from '../images/sleeveless.png';
import socks from '../images/socks.png';
import sweat from '../images/sweat.png';
import sweat2 from '../images/sweat2.png';
import tshirt from '../images/tshirt.png';
import tshirt2 from '../images/tshirt2.png';
import umbrella from '../images/umbrella.png';

const Product = () => {
    /*
    const [active, setActive] = useState(false);
    const [cName, setCName] = useState('');

    const bringLi = document.querySelectorAll(".filter li");

    const handleOnClick = (ac) => {
        ac = false;
        setActive(ac);
        for(i=1; i<5; i++;) {
            bringLi.
        }
    }
    */

    return (
        <section className="sec product">
            <div className="wAlign">
                <div className="pHead">
                    <div className="headline"><h1>Products</h1></div>
                    <div>
                        {/*}
                        <ul className="filter">
                            <li className={active ? 'active' : 'unactive'} onClick={handleOnClick}>Top</li>
                            <li>Bottom</li>
                            <li>Outer</li>
                            <li>ACC</li>
                        </ul>
    }                   */}
                        <Filter/>
                    </div>
                </div>
                <ul className="pdts">
                    <li className="pdt acc"><div><img src={belt} alt=""/></div></li>
                    <li className="pdt top"><div><img src={hoodie} alt=""/></div></li>
                    <li className="pdt outer"><div><img src={jacket} alt=""/></div></li>
                    <li className="pdt outer"><div><img src={jacket2} alt=""/></div></li>
                    <li className="pdt bottom"><div><img src={jean} alt=""/></div></li>
                    <li className="pdt bottom"><div><img src={jean2} alt=""/></div></li>
                    <li className="pdt outer"><div><img src={kardigan} alt=""/></div></li>
                    <li className="pdt acc"><div><img src={panties} alt=""/></div></li>
                    <li className="pdt bottom"><div><img src={pants} alt=""/></div></li>
                    <li className="pdt bottom"><div><img src={pants2} alt=""/></div></li>
                    <li className="pdt top"><div><img src={polo} alt=""/></div></li>
                    <li className="pdt bottom"><div><img src={shorts} alt=""/></div></li>
                    <li className="pdt bottom"><div><img src={shorts2} alt=""/></div></li>
                    <li className="pdt top"><div><img src={sleeveless} alt=""/></div></li>
                    <li className="pdt acc"><div><img src={socks} alt=""/></div></li>
                    <li className="pdt top"><div><img src={sweat} alt=""/></div></li>
                    <li className="pdt top"><div><img src={sweat2} alt=""/></div></li>
                    <li className="pdt top"><div><img src={tshirt} alt=""/></div></li>
                    <li className="pdt top"><div><img src={tshirt2} alt=""/></div></li>
                    <li className="pdt acc"><div><img src={umbrella} alt=""/></div></li>
                </ul>
                <div className="more">More</div>
            </div>
        </section>
    );
}

export default Product;