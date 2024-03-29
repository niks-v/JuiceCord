import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'

//Import pages for layout
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";

//Import pages for AppLayout
import AppLayout from "./pages/AppLayout";
import Dashboard from "./pages/Dashboard";
import AffiliateLink from "./pages/AffiliateLink";
import Servers from "./pages/Servers";
import ControlPanel from "./pages/ControlPanel";
import Funds from "./pages/Funds";

//TODO use .env


export default function App() {
  return (
    <Router>
    <Routes>
    <Route path="/a" element={<AppLayout />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="affiliatelink" element={<AffiliateLink />} />
      <Route path="servers" element={<Servers />} />
      <Route path="controlpanel" element={<ControlPanel />} />
      <Route path="funds" element={<Funds />} />
      <Route path="*" index element={<NoPage />} />
    </Route>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NoPage />} />
    </Route>
    </Routes>
    </Router>
  );
}