import {
  signInWithGooglePopUp,
  createUserDocFromAuth,
} from '../../../utils/firebase/firebase'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDoc = await createUserDocFromAuth(user)
  };

  return (
    <div className="App-header">
      <h1>Sing In</h1>
      <button onClick={logGoogleUser}>Sing in with google</button>
    </div>
  );
};

export default SignIn;
