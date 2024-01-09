import React from "react";

export const Tabs = () => {
  return (
    <div className="container">
      <div className="tabs active-tabs">Tab 1</div>
      <div className="tabs">Tab 2</div>
      <div className="tabs">Tab 3</div>
      <div className="content-tabs">
        <div className="contents active-content">
          <h1>content 1 </h1>
          <hr />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium, nemo excepturi expedita provident aperiam sit voluptas
            quo commodi reprehenderit distinctio velit aspernatur beatae ipsum
            quaerat ducimus necessitatibus sequi. Impedit, officia!
          </p>

          <div className="content active-content">
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              laudantium rem molestiae velit porro totam eligendi itaque beatae,
              facilis, illum veritatis eum modi provident explicabo unde debitis
              quos, quis ad.
            </p>
          </div>

          <div className="content">
            <h1>content 2</h1>
            <hr />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
              autem nobis quia eaque omnis fuga mollitia impedit eum? Nesciunt
              reprehenderit tempora distinctio doloribus velit quam eligendi
              maxime voluptate iure vel!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
