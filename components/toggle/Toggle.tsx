// Toggle component by Abbey Perini
// https://github.com/abbeyperini/Portfolio2.0
// https://abbeyperini.dev

import React from "react";

function Toggle({ active, handleOnClick }) {
  return (
    <div className="container--toggle">
      <input
        aria-label="dark mode toggle"
        role="switch"
        type="checkbox"
        id="toggle"
        className="toggle--checkbox"
        onClick={handleOnClick}
        checked={active}
        readOnly
      />
      <label htmlFor="toggle" className="toggle--label">
        <span className="toggle--label-background" />
        dark mode toggle
      </label>
    </div>
  );
}

export default Toggle;
