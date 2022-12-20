import './Sidebar.css'
import SidebarButton from'./bits/SidebarButton'

function Sidebar() {
  return (
    <div id="sideBar">
      <SidebarButton text="Dashboard" icon="home-alt" link="/a/dashboard"/>
      <SidebarButton text="Affiliate Links" icon="home-alt" link="/a/affiliatelink"/>
      <SidebarButton text="Servers" icon="home-alt" link="/a/servers"/>
      <SidebarButton text="Funds" icon="home-alt" link="/a/funds"/>
      <SidebarButton text="Control Panel" icon="home-alt" link="/a/controlpanel"/>
    </div>
  )
}

export default Sidebar