import React from 'react';
import SideBar from '../../components/SideBar';
import CardList from '../../components/CardList';
import {useEffect} from 'react';
import firebase from '../../firebase';
import {navigate} from '@reach/router';


const Dashboard = (props) => {
    const {filterBeers, beers, signOut, setName, setAbv, setIsClassic, isClassic, abv } = props;

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if(!user) {
                navigate('/login');
            }
        })
    }, [])

    return (
        <div>
            <button onClick={signOut}>Sign Out</button>
            <SideBar 
                filterBeers={filterBeers}
                setName={setName}
                setAbv={setAbv}
                setIsClassic={setIsClassic}
                isClassic={isClassic}
                abv={abv}
            />
            <CardList beers={beers} />
        </div>
    )
}

export default Dashboard
