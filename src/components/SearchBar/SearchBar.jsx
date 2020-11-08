import React from "react";
import styles from './SearchBar.module.scss';


const SearchBar = (props) => {
  const { setName, filterBeers, name } = props;

  return (
    <section className={styles.searchBar}>
      <h2>Search your beer by name</h2>
      <input
        type="text"
        placeholder="I'm feeling thirsty..."
        onInput={(e) => {
          setName(e.target.value);
          filterBeers(name);
        }
        }

      />
    </section>
  );
};

export default SearchBar;
