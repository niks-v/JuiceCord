import './Navbar.css'
import LinkButton from './bits/LinkButton'

function Navbar() {
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
        <LinkButton text="Dashboard" link="/a/dashboard" /> 
        <LinkButton text="Login" link="/login" />
        <LinkButton text="Sign Up" link="/signup" />
        <LinkButton text="About" link="/about" />
        <LinkButton text="Advertise" link="/advertise" />
      </div>
      <div className="NavBarElement NavBarAccount text-center">
        <div className="AccountPhoto circle pointer" style={{backgroundImage:"url('./assets/img/account.webp')",backgroundSize:"cover", width:"40px", height:"40px"}}></div>
      </div>
    </div>
  )
}// TODO: remove dashboard button later

export default Navbar