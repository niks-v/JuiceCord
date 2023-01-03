import './Navbar.css'

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
        Test
      </div>
      <div className="NavBarElement NavBarAccount text-center">
        <div className="AccountPhoto circle">s</div>
      </div>
    </div>
  )
}

export default Navbar