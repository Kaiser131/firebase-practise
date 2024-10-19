import { getAuth, GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

const Login = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // googleData
    const [data, setData] = useState([]);

    const [git, setGitUser] = useState([]);


    // google
    const handleGoogleSignIn = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setData(loggedUser);
            })
            .catch(error => {
                console.log('errror', error.message);

            });
    };


    // github
    const handleGithubSignIn = () => {

        signInWithPopup(auth, githubProvider)
            .then(result => {
                const logg = result.user;
                setGitUser(logg);
                console.log(logg);
            })
            .catch(error => {
                console.log('error', error.message);
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
                data || git ?
                    <button className="btn" onClick={handleSignOut}>SignOut</button> :
                    <>
                        <button className="btn" onClick={handleGoogleSignIn}>Google</button>
                        <button className="btn" onClick={handleGithubSignIn}>Github</button>
                    </>
            }

            <div>
                {data && <div>
                    <h1>Name: {data.displayName} </h1>
                    <img src={data.photoURL} alt="" />
                </div>}
            </div>

            <div>
                {git && <div>
                    <h1>Name: for github </h1>

                </div>}
            </div>



        </div>
    );
};

export default Login;