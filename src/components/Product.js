import React from 'react';
import Filter from './Filter';
import List from './List';

const Product = ({ products, addItem }) => {
    
    return (
        <section className="sec product">
            <div className="wAlign">
                <div className="pHead">
                    <div className="headline"><h1>products</h1></div>
                    <div>
                        <Filter/>
                    </div>
                </div>
                <List products={products} addItem={addItem}/>
            </div>
        </section>
    );
}

export default Product;