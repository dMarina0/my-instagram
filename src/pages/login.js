import {Link, useHistory} from 'react-router-dom';
import {useContext, useState, useEffect} from 'react';
import FirebaseContext from '../context/firebase'
import * as ROUTES from '../constants/routes';

export default function LoginPage(){
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const isInvalid = password === '' || emailAddress === '';

    const handleLogin = async (event)=>{
        event.preventDefault();
        try{
            await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
            history.push(ROUTES.DASHBOARD)
        }
        catch(err){
            setEmailAddress('');
            setPassword('');
            setError(err.message)

        }

    }

    useEffect(()=>{
        document.title = 'Login - instagram';
    },[])

    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img src="/images/iphone-with-profile.jpg" alt="IPhone with Instagram" />
            </div>
            <div className="flex flex-col w-2/5">
                <div className="flex flex-col items-center bg-white p-4 border border-gray-primary rounded mb-4">
                    <h1 className="flex justify-center w-full">
                        <img src="/images/logo.png" alt="Logo" className="mt-2 w-6/12 mb-4"/>
                    </h1>
                    {
                        error && 
                        <p className="mb-4 text-xs text-red-primary">{error}</p>
                    }
                    <form onSubmit={handleLogin} method="POST">
                        <input 
                            aria-label="Enter your email address"
                            type="text"
                            placeholder="Email Address"
                            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                            onChange={({target}) => {setEmailAddress(target.value)}}
                        />
                        <input 
                            aria-label="Enter your password"
                            type="password"
                            placeholder="Password"
                            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                            onChange={({target}) => {setPassword(target.value)}}
                        />
                        <button
                            disabled={isInvalid}
                            type="submit"
                            className={`bg-blue-500 text-white w-full rounded h-8 font-bold ${isInvalid && 'opacity-50'}`}
                        >
                            Log In
                        </button>
                    </form>
                    </div>
                <div className="flex flex-col items-center bg-white p-4 border border-gray-primary rounded mb-4">
                    <p className="text-sm">
                        Don't have an account? {` `}
                        <Link to={ROUTES.SIGN_UP} className="font-bold text-blue-medium">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}