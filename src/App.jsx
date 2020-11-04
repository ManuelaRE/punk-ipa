import React from "react";
import "./styles.css";

import { useState, useEffect } from "react";
import firebase, { provider } from './firebase';

import Routes from './containers/Routes';
import {navigate} from '@reach/router';

const App = () => {

  // state
  const [beers, setBeers] = useState([]);
  const [name, setName] = useState();
  const [abv, setAbv] = useState(false);
  const [isClassic, setIsClassic] = useState(false);

  const [user, setUser] = useState(null);

// lifecycle
  useEffect(() => {
    getUser()
  }, [])


  useEffect(() => {
    filterBeers();
  }, []);

  // fetch data from API based on the ABV

  const filterBeers = () => {
    // search beers by a specific term inputed by used in search box
    const searchTerm = name ? `&beer_name=${name}` : "";

    //search by alchool content
    const hasAlcoholFitler = abv ? `&abv_gt=6`: "";

    // search for classic beers
    const hasClassicFilter = isClassic ? `&brewed_before=01-2011` : "";

     // general URL to get random beers
    const url = `https://api.punkapi.com/v2/beers?per_page=50${searchTerm}${hasAlcoholFitler}${hasClassicFilter}`;

    console.log("HERES ALL THE DATA THAT MANUELA IS FILTERING BY")
    console.log(url);

    return fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setBeers(res);
      })
  }


  // this is called when we click the signin button
  const signIn = () => {
    firebase.auth().signInWithPopup(provider).then(() => {
      navigate('/');
    })
  }

  const signOut = () => {
    firebase.auth().signOut()
  }

  // This is called on page load.. It's setting our user.
  const getUser = () => {
    if (firebase.auth().currentUser) {
      setUser(firebase.auth().currentUser);
    } else {
      setUser(null);
    }
  }
  
// return 
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
      />
    </div>
  );
}

export default App;