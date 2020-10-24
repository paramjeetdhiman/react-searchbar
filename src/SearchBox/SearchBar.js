import React from 'react';
import './SearchBar.scss';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ placeholder = 'Search here...' }) => {
  return (
    <>
      <form className="search-bar">
        <label htmlFor="search-input" className="search-label">
          <FiSearch className="search-icon" />
          <input className="search" type="search" placeholder={placeholder} />
        </label>
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;
