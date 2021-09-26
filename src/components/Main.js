import React from 'react';

import capmain from '../images/capmain.png';
import capmain7 from '../images/capmain7.png';

const Main = () => {
    return (
        <main className="sec">
            <div className="main">
                <div className="mFlex">
                    <div className="mainImg">
                        <img sizes="(max-width: 720px) 720px, 1200px" srcSet={`${capmain7} 720w, ${capmain} 1200w`} alt="main"/>
                    </div>
                </div>
            </div>
            
        </main> 
    );
}

export default Main;