import React from 'react';
import {FiSearch} from "react-icons/fi";

import './style.css';

const Search = ({value, onChange}) => (
    <div className="search-container">
        <input 
            type="search" 
            name="search" 
            className="search-input"
            value={value}
            onChange={onChange}
            />
        <label>
            <FiSearch className="search-icon"/>
        </label>
    </div>
)

export default Search;