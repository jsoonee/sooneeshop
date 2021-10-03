import React, { useState, useEffect } from 'react';

const Filter = () => {
    const [active, setActive] = useState('');
    useEffect(() => {
        applyFilter();
    }, [active]);

    const cats = ['top', 'bottom', 'outer', 'acc'];
    const cat = cats.map((el, index) => {

        return (
            <li key={index} onClick={() => handleOnClick(index)} className={active === index ? 'active' : 'unactive'}>{el}</li>
        );    
    })

    const selPdt = document.querySelectorAll('.pdt');
    const selCat = document.querySelectorAll(`.${cats[active]}`);

    const applyFilter = () => {
        if (active === '') {
            selPdt.forEach((li) => {
                li.style.display = 'block';
                return;
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

    console.log(selCat);

    const handleOnClick = (index) => {
        if (index === active) {
            return setActive('');
        } else {
        setActive(index);
        }
    }

    return <ul className="filter">{cat}</ul>;
}

export default Filter;