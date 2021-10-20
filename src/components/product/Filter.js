import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const Filter = () => {
    const [active, setActive] = useState('');

    const cats = ['top', 'bottom', 'outer', 'acc'];
    const cat = cats.map((el, index) => {
        return (
            <li key={index} onClick={() => handleOnClick(index)} className={active === index ? 'active' : 'unactive'}>{el}</li>
        );    
    })
    
    const selPdt = document.querySelectorAll('.pdt');
    const selCat = document.querySelectorAll(`.${cats[active]}`);

    useEffect(() => {
        const applyFilter = () => {
            if (active === '') {
                selPdt.forEach((li) => {
                    return (li.style.display = 'block');
                });
            } else {
                selPdt.forEach((li) => {
                    li.style.display = 'none';
                });
                selCat.forEach((li) => {
                    li.style.display = 'block';
                })
            }
        }
        applyFilter();
    }, [selPdt, selCat, active]);

    const handleOnClick = (index) => {
        if (index === active) {
            return setActive('');
        } else {
        setActive(index);
        }
    }

    return <ul className="filter"><li><FontAwesomeIcon icon={faFilter}/></li>{cat}</ul>;
}

export default Filter;