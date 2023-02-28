import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as StoreLogo } from '../../../assets/store.svg';
import './navigation.scss'

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo" to='/'>
          <StoreLogo className='store-logo' />
        </Link>
        <div className="links-container">
          <Link className="nav-link" to='/shop'>
            SHOP
          </Link>
          <Link className="nav-link" to='/sign-in'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;