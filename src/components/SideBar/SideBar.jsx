import React from "react";
import styles from './SideBar.module.scss'
import SearchBar from "../SearchBar";
import Filter from "../Filter";

const SideBar = (props) => {
  const { filterBeers, setAbv, setName, setIsClassic, isClassic, abv, name } = props;

  return (
    <section className={styles.sideBar}>
      <SearchBar
        filterBeers={filterBeers}
        setName={setName}
        name={name} />
      <Filter filterBeers={filterBeers}
        setName={setName}
        setAbv={setAbv}
        setIsClassic={setIsClassic}
        isClassic={isClassic}
        abv={abv}
      />
    </section>
  );
};

export default SideBar;
