import React from 'react';
import Filter from './Filter';
import List from './List';

const Product = () => {
    return (
        <section className="sec product">
            <div className="wAlign">
                <div className="pHead">
                    <div className="headline"><h1>products</h1></div>
                    <div>
                        <Filter/>
                    </div>
                </div>
                <List/>
                <div className="more">More</div>
            </div>
        </section>
    );
}

export default Product;