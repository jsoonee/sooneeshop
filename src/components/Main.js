import React from "react";

const Main = () => {
  return (
    <main className="sec">
      <div className="main">
        <div className="mFlex">
          <div className="mainImg">
            {/* <picture>
              <source 
                type="image/webp"
                src={`${process.env.PUBLIC_URL}/images/main/capmain-1200w.webp`}
                srcSet={`
                  ${process.env.PUBLIC_URL}/images/main/capmain-720w.webp 720w,
                  ${process.env.PUBLIC_URL}/images/main/capmain-1200w.webp 1200w
                `}
              />
              <img src={`${process.env.PUBLIC_URL}/images/main/capmain-1200w.png`} alt="main" />
            </picture> */}
            <img src={`${process.env.PUBLIC_URL}/images/main/capmain-1200w.webp`} alt="main" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
