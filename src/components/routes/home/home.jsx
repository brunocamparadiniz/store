import { Outlet } from 'react-router-dom';

import Directory from "../../directory/directory";

const Home = () => {
  return (
    <div>

      <Directory />
      <Outlet />
    </div>
  );
};

export default Home