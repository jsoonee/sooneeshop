import React from 'react';

import ListCard from './ListCard';

const List = ({ products, addItem }) => {
    return (
        <ul className="pdts">
            {products.map(d => (
                <ListCard key={d.id} data={d} addItem={addItem}/>
            ))}
        </ul>
    );
}


export default List;