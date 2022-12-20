import {Outlet} from "react-router-dom";
import Navbar from '../components/Navbar';

function Layout() {
  return (
    <>
        <Navbar />
        <div className="content">
          <Outlet />
        </div>
    </>
  )
}

export default Layout