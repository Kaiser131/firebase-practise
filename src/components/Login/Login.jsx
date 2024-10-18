import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {

        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log('errror', error.message);
            });
    };


    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline">Google Login</button>
        </div>
    );
};

export default Login;