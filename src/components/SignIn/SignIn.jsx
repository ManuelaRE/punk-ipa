import React from 'react';

const SignIn = (props) => {

    const {signIn} = props;

    return (
        <div>
            <h1>Friday beer challenge</h1>
            <h2>Sign in to find your favourites</h2>
            <button onClick={signIn}>Sign In</button>
        </div>
    )
}

export default SignIn;
