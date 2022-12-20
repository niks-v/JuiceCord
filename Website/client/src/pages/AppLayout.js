import {Outlet} from "react-router-dom";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import "./page-styles/AppLayout.css"

function AppLayout() {
  return (
    <>
        <Navbar />
        <div className="content">
            <Sidebar />
            <div className="sideContainer">
                <Outlet />
            </div>
        </div>
    </>
  )
}

export default AppLayout