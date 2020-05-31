import React from 'react';

import './search-box.styles.css';

// Search box container which takes input and calls handle change function
export const SearchBox = ({placeholder, handleChange}) => {
    return (
        <input className="searchbox" type="search" 
        onChange={handleChange} 
        placeholder={placeholder} 
        />

    )
}