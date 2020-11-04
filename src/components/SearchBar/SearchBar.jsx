import React from "react";

const SearchBar = (props) => {
  const { setName, filterBeers } = props;

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onInput={(e) => {
          setName(e.target.value);
          filterBeers()
        }
        }

      />
    </div>
  );
};

export default SearchBar;
