import SignUpForm from '../../signup/signup';
import SignInForm from '../../signin/signin';


import './authentication.scss'

const Authentication = () => {

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
