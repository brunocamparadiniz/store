import {
  signInWithGooglePopUp,
  createUserDocFromAuth,
} from '../../../utils/firebase/firebase'

import SignUpForm from '../../signup/signup';



const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDoc = await createUserDocFromAuth(user)
  };


  return (
    <div className="App-header">
      <h1>Sing In</h1>
      <button onClick={logGoogleUser}>Sing in with google popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
