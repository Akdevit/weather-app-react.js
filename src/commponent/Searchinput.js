import React from "react";

const Searchinput = ({input, click}) => {
  return (
    <>
      <div className="search">
        <div className="input-d">
          <input
            className="input"
            type="search"
            placeholder="Get weather"
            onChange={input}
          />
          <button className="ser-btn" onClick={click}>
            search
          </button>
        </div>
      </div>
    </>
  );
};

export default Searchinput;
