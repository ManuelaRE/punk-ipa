import React from 'react';
import styles from './SignIn.module.scss';

const SignIn = (props) => {

    const {signIn} = props;

    return (
        <div className={styles.homePage}>
            <h1>Punk API</h1>
            <h1>Sign in to find your favourites beer!</h1>
            <button onClick={signIn}>Sign In</button>
        </div>
    )
}

export default SignIn;
