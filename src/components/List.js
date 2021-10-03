import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

import belt_3 from '../images/belt-360w.png';
import hoodie_3 from '../images/hoodie-360w.png';
import jacket_3 from '../images/jacket-360w.png';
import jacket2_3 from '../images/jacket2-360w.png';
import jean_3 from '../images/jean-360w.png';
import jean2_3 from '../images/jean2-360w.png';
import kardigan_3 from '../images/kardigan-360w.png';
import panties_3 from '../images/panties-360w.png';
import pants_3 from '../images/pants-360w.png';
import pants2_3 from '../images/pants2-360w.png';
import polo_3 from '../images/polo-360w.png';
import shorts_3 from '../images/shorts-360w.png';
import shorts2_3 from '../images/shorts2.png';
import sleeveless_3 from '../images/sleeveless-360w.png';
import socks_3 from '../images/socks-360w.png';
import sweat_3 from '../images/sweat-360w.png';
import sweat2_3 from '../images/sweat2-360w.png';
import tshirt_3 from '../images/tshirt-360w.png';
import tshirt2_3 from '../images/tshirt2-360w.png';
import umbrella_3 from '../images/umbrella-360w.png';

const List = () => {
    const products = [
        { id: 0, name: 'basic belt', sort: 'acc', price: 14900, pic: belt_3 },
        { id: 1, name: 'green hoodie', sort: 'top', price: 39900, pic: hoodie_3 },
        { id: 2, name: 'brown jacket', sort: 'outer', price: 99000, pic: jacket_3 },
        { id: 3, name: 'black jacket', sort: 'outer', price: 79900, pic: jacket2_3 },
        { id: 4, name: 'regular fit jeans', sort: 'bottom', price: 49900, pic: jean_3 },
        { id: 5, name: 'relaxed fit jeans', sort: 'bottom', price: 49900, pic: jean2_3 },
        { id: 6, name: 'brown cardigan', sort: 'outer', price: 59900, pic: kardigan_3 },
        { id: 7, name: 'navy trunks', sort: 'acc', price: 9900, pic: panties_3 },
        { id: 8, name: 'beige pants', sort: 'bottom', price: 39900, pic: pants_3 },
        { id: 9, name: 'black pants', sort: 'bottom', price: 44900, pic: pants2_3 },
        { id: 10, name: 'polo shirt', sort: 'top', price: 29900, pic: polo_3 },
        { id: 11, name: 'beige shorts', sort: 'bottom', price: 34900, pic: shorts_3 },
        { id: 12, name: 'blue shorts', sort: 'bottom', price: 29900, pic: shorts2_3 },
        { id: 13, name: 'sleeveless shirt', sort: 'top', price: 19900, pic: sleeveless_3 },
        { id: 14, name: 'white socks', sort: 'acc', price: 4900, pic: socks_3 },
        { id: 15, name: 'grey sweatshirt', sort: 'top', price: 49900, pic: sweat_3 },
        { id: 16, name: 'blue sweatshirt', sort: 'top', price: 49900, pic: sweat2_3 },
        { id: 17, name: 'charcoal t-shirt', sort: 'top', price: 29900, pic: tshirt_3 },
        { id: 18, name: 'skyblue t-shirt', sort: 'top', price: 24900, pic: tshirt2_3 },
        { id: 19, name: 'umbrella', sort: 'acc', price: 19900, pic: umbrella_3 }
    ];
    const items = products.map((d) => {
        return (
            <li className={`pdt ${d.sort}`}>
                    <div className="pic">
                        <img src={d.pic} alt=""/>
                        <div className="pHover">
                            <div className="hoverFlex">
                                <span className="fa-stack fa-2x">
                                    <FontAwesomeIcon icon={faCircle} className="fa-stack-2x"/>
                                    <FontAwesomeIcon icon={faSearchPlus} className="fa-stack-1x"/>
                                </span>
                                <span className="fa-stack fa-2x">
                                    <FontAwesomeIcon icon={faCircle} className="fa-stack-2x"/>
                                    <FontAwesomeIcon icon={faCartPlus} className="fa-stack-1x"/>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="desc">
                        <h2>{d.name}</h2>
                        <div>₩{d.price}</div>
                    </div>
                </li>
        );
    })
        
    return (
        <ul className="pdts">{items}</ul>
    );
}
export default List;