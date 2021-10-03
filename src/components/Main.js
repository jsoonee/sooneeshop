import React from 'react';

import capmain_1200w from '../images/capmain-1200w.png';
import capmain_720w from '../images/capmain-720w.png';

const Main = () => {
    return (
        <main className="sec">
            <div className="main">
                <div className="mFlex">
                    <div className="mainImg">
                        <img sizes="(max-width: 720px) 720px, 1200px" srcSet={`${capmain_720w} 720w, ${capmain_1200w} 1200w`} alt="main"/>
                    </div>
                </div>
            </div>
            
        </main> 
    );
}

export default Main;