import React from "react";

const AttributionComponent = () => {
  return (
    <div className="attribution">
      <p>
        Built with{" "}
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          React
        </a>
        ,{" "}
        <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
          Vite
        </a>
        , and{" "}
        <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
          Sass
        </a>
        .
      </p>
      <p>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        .
      </p>
      <p>
        Coded by{" "}
        <a
          href="https://github.com/donichristian"
          target="_blank"
          rel="noreferrer"
        >
          Doni Christian
        </a>
        .
      </p>
    </div>
  );
};

export default AttributionComponent;
