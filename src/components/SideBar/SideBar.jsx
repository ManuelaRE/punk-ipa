import React from "react";

import SearchBar from "../SearchBar";
import Filter from "../Filter";

const SideBar = (props) => {
  const {filterBeers, setAbv, setName, setIsClassic, isClassic, abv} = props;

  return (
    <>
      <SearchBar filterBeers={filterBeers} setName={setName} />
      <Filter filterBeers={filterBeers} 
              setName={setName}
              setAbv={setAbv}
              setIsClassic={setIsClassic}
              isClassic={isClassic}
              abv={abv}
      />
    </>
  );
};

export default SideBar;
