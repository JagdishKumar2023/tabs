import React from "react";

export const ReactTab = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="col-6image p-5">
        <img src={require("./nature.avif")} alt="" className="w-100" />
      </div>
      <div className="col-6 tab p-5">
        <ul className="d-flex">
          <li className="flex-fill">HTML</li>
          <li className="flex-fill">CSS</li>
          <li className="flex-fill">JS</li>
        </ul>
        <div className="content">
          <h1>HTML</h1>
          <p>
            Some problem you might run into a big project is that you might have
            one component at very top that holds your state, but then you have a
            deeply nested component that also need to use that state. What you
            usually do is pass that state as a props to a bunch of intermediate
            component that don't actually need it until it finally
          </p>
        </div>
        <div className="content">
          <h1>CSS</h1>
          <p>
            Some problem you might run into a big project is that you might have
            one component at very top that holds your state, but then you have a
            deeply nested component that also need to use that state.
          </p>
          <div className="content">
            <h1>JS</h1>
            <p>
              Some problem you might run into a big project is that you might
              have one component at very top that holds your state, but then you
              have a deeply nested components that also need to use that state .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
