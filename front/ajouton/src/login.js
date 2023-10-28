import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const App = () => {

  return (
    <GoogleOAuthProvider
        clientId="188993087518-sgpan8fbqrn6kfv9huu9j2rumgr536pu.apps.googleusercontent.com"
        buttonText="Login with Google">
        <div>
        <GoogleLogin
            onSuccess={(credentialResponse) => {
                console.log(credentialResponse)
            }}
            onError={() =>{
                console.log('login fail');
            }}
            width="300px"
            useOnTap
        />
        </div>
    </GoogleOAuthProvider>
  );
}

export default App;
