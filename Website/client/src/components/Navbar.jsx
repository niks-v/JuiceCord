import './Navbar.css'
import LinkButton from './bits/LinkButton'
import Cookies from "../components/tools/Cookies";
function Navbar() {
  let loggedin = Cookies.getCookie("loggedin");


  return (
    <div id="NavBar" className="bottom">
      <div className="NavBarElement NavBarLogo">
        <div id="logo">
          <a href="/">
            <img src="/assets/img/Juicecord.png" alt="Juicecord Logo" />
          </a>
        </div>
      </div>
      <div className="NavBarElement NavBarLinks text-center"> 
        {!loggedin ? (<><LinkButton text="Login" link="/login" /><LinkButton text="Sign Up" link="/signup" /></>) : (<><LinkButton text="Dashboard" link="/a/dashboard" /> <LinkButton text="Logout" link="/logout" /></>)}
        
        <LinkButton text="About" link="/about" />
        <LinkButton text="Advertise" link="/advertise" />
      </div>
    </div>
  )
}// TODO: remove dashboard button later

export default Navbar