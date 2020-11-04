import React from "react";
import styles from './CardList.module.scss';
import CardItems from "../CardItems";

const CardList = (props) => {
  return (
    <div className={styles.section}>
      {props.beers.map((beer) => (
        <CardItems key={beer.id} beer={beer} />
      ))}
    </div>
  );
};

export default CardList;
