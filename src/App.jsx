import React from "react";
import "./styles.css";

import { useState, useEffect } from "react";
import firebase, { provider } from './firebase';

import Routes from './containers/Routes';
import { navigate } from '@reach/router';

const App = () => {

  // state to keep track of the beers to be displayed
  const [beers, setBeers] = useState([]);
  // state to keep track of changes in the filter section
  const [name, setName] = useState();
  const [abv, setAbv] = useState(false);
  const [isClassic, setIsClassic] = useState(false);
  // state for user login
  const [user, setUser] = useState(null);

  // lifecycle effects
  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    filterBeers();
  }, [name, abv, isClassic]);

  // fetch data from API based on the filter functionality
  const filterBeers = () => {
    // search beers by a specific term inputed by used in search box
    const searchTermStr = name ? `&beer_name=${name}` : "";

    //search by alchool content
    const abvQueryStr = abv ? `&abv_gt=6` : "";

    // search for classic beers
    const ClassicFilterStr = isClassic ? `&brewed_before=01-2011` : "";

    // general URL to get random beers
    const url = `https://api.punkapi.com/v2/beers?per_page=50${searchTermStr}${abvQueryStr}${ClassicFilterStr}`;
    return fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setBeers(res);
      })
  }


  // Authentification 
  const signIn = () => {
    firebase.auth().signInWithPopup(provider).then(() => {
      navigate('/');
    })
  }

  const signOut = () => {
    firebase.auth().signOut()
  }

  const getUser = () => {
    if (firebase.auth().currentUser) {
      setUser(firebase.auth().currentUser);
    } else {
      setUser(null);
    }
  }

  return (
    <div className="App">
      <Routes
        signIn={signIn}
        signOut={signOut}
        user={user}
        beers={beers}
        filterBeers={filterBeers}
        setName={setName}
        setAbv={setAbv}
        abv={abv}
        setIsClassic={setIsClassic}
        isClassic={isClassic}
        name={name}
      />
    </div>
  );
}

export default App;