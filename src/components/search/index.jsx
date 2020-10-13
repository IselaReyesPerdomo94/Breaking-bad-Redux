import React from "react";
import { FiSearch } from "react-icons/fi";

import "./style.css";

/**
 * Search is a simple component that is used to search an especific character or quote.
 * @param {String}    value 		Typed valued.
 * @param {function} 	onChange  Handle change value.
 * @returns {*} React component.	
 */
const Search = ({ value, onChange }) => (
  <div className="search-container">
    <input
      type="search"
      name="search"
      className="search-input"
      placeholder="
            Write the name of a character"
      value={value}
      onChange={onChange}
    />
    <label>
      <FiSearch className="search-icon" />
    </label>
  </div>
);

export default Search;
