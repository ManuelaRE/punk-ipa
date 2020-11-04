import React from "react";


const Filter = (props) => {

  const {filterBeers, setAbv, setIsClassic, isClassic, abv } = props;

  return (
    <form>
      <label htmlFor="abv"> Alcohol content (>6.0%) </label>
      <input type="checkbox" name="abv" value="abv_gt"  onChange={() => {setAbv(!abv); filterBeers()}} />
      <br />
      <label htmlFor="classic"> Classic Range </label>
      <input type="checkbox" name="classic" value="first_brewed" onChange={() => {setIsClassic(!isClassic); filterBeers()}} />
      <br />
    </form>
  );
};

export default Filter;

