import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [data, setData] = useState([]);
    // const [user,setUser]=useState();

    const handleGoogleSignIn = () => {

        signInWithPopup(auth, provider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setData(loggedUser);
            })
            .catch(error => {
                console.log('errror', error.message);

            });
    };

    const handleSignOut = () => {

        signOut(auth)
            .then(result => {
                console.log(result);
                setData(null);
            })
            .catch(error => {
                console.log(error.message);
            });

    };


    return (
        <div>

            {
                data ?
                    <button className="btn" onClick={handleSignOut}>SignOut</button> :
                    <button className="btn" onClick={handleGoogleSignIn}>Login</button>
            }

            <div>
                {data && <div>
                    <h1>Name: {data.displayName} </h1>
                    <img src={data.photoURL} alt="" />
                </div>}
            </div>



        </div>
    );
};

export default Login;