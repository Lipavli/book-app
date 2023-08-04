import React from "react";

const HowItWorks = () => {
  return (
    <div className="how__main">
      <h1>How it Works</h1>
      <div className="how__works">
        <ul>
          <div className="how__works-point">
          <img src="/images/1.png"/>
            <li>
              Enter the name of your book in our free input and click 'Search'
              button
            </li>
          </div>
          <div className="how__works-point">
          <img src="/images/2.png"/>
            <li>
              Browse the results and click on a book to view more details.
            </li>
          </div>
          <div className="how__works-point">
          <img src="/images/3.png"/>
            <li>
              If you want to save the book for later, click the "Add to
              Favorites" button.
            </li>
          </div>
          <div className="how__works-point">
          <img src="/images/4.png"/>
            <li>
              To view your saved books, click the bookmark pic in the
              navigation.
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default HowItWorks;
