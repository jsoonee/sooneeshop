import React from "react";

const Main = () => {
  return (
    <main className="sec">
      <div className="main">
        <div className="mFlex">
          <div className="mainImg">
            <img src={`${process.env.PUBLIC_URL}/images/main/capmain-1200w.webp`} alt="main" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
