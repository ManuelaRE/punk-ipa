import React from 'react';
import styles from './Dashboard.module.scss'
import SideBar from '../../components/SideBar';
import CardList from '../../components/CardList';
import Nav from '../../components/Nav';
import { useEffect } from 'react';
import firebase from '../../firebase';
import { navigate } from '@reach/router';


const Dashboard = (props) => {
    const { filterBeers, beers, signOut, setName, setAbv, setIsClassic, isClassic, abv, name } = props;

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                navigate('/login');
            }
        })
    }, [])

    return (
        <div className={styles.dashboard}>
            <Nav signOut={signOut} />
            <SideBar
                filterBeers={filterBeers}
                setName={setName}
                setAbv={setAbv}
                setIsClassic={setIsClassic}
                isClassic={isClassic}
                abv={abv}
                name={name}
            />
            <CardList beers={beers} />
        </div>
    )
}

export default Dashboard
