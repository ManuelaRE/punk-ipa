import React from "react";
import styles from './Filter.module.scss';


const Filter = (props) => {

  const { filterBeers, setAbv, setIsClassic, isClassic, abv } = props;

  return (
    <form className={styles.form}>
      <input type="checkbox" id="abv" value="abv_gt" onChange={() => { filterBeers(!abv); setAbv(!abv) }} />
      <label htmlFor="abv"> Alcohol content (>6.0%) </label>
      <br />
      <input type="checkbox" id="classic" value="first_brewed" onChange={() => { filterBeers(!isClassic); setIsClassic(!isClassic) }} />
      <label htmlFor="classic"> Classic Range (brewed before 2011) </label>
      <br />
    </form>
  );
};

export default Filter;

