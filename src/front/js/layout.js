import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
// import { Demo } from "./pages/demo";
// import { Single } from "./pages/single";
import Safari from "./pages/Safari.jsx";
import Camp from "./pages/Camp.jsx";
import Experience from "./pages/Experience.jsx";
import TravelPlan from "./pages/TravelPlan.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Maasai from "./pages/Experience/Maasai.jsx";
import Sundowners from "./pages/Experience/Sundowners.jsx";
import BalloonSafari from "./pages/Experience/BalloonSafari.jsx";
import PhotoSafari from "./pages/Experience/PhotoSafari.jsx";
import Eat from "./pages/Camp/Eat.jsx";
import Sleep from "./pages/Camp/Sleep.jsx";
import Relax from "./pages/Camp/Relax.jsx";
import OtherServices from "./pages/Camp/OtherServices.jsx";
import CommunityProjects from "./pages/AboutUs/CommunityProjects.jsx";
import PhotoGallery from "./pages/AboutUs/PhotoGallery.jsx";
import Packages from "./pages/TravelPlaning/Packages.jsx";
import PackagesDetails from "./pages/TravelPlaning/PackagesDetails.jsx";
import PackagesMap from "./pages/TravelPlaning/PackagesMap.jsx";
import FAQ from "./pages/TravelPlaning/FAQ.jsx";

import Destinations from "./pages/Destinations/Destinations.jsx";
import Kenya from "./pages/Destinations/Kenya.jsx";
import Ethiopia from "./pages/Destinations/Ethiopia.jsx";
import Uganda from "./pages/Destinations/Uganda.jsx";
import Rwanda from "./pages/Destinations/Rwanda.jsx";
import Tanzania from "./pages/Destinations/Tanzania.jsx";

import Contact from "./pages/Contact.jsx";

import Login from "./pages/LoginPages/login.jsx";
import SignUp from "./pages/LoginPages/signup.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import EditProfile from "./pages/Profile/EditProfile.jsx";
import ChangePassword from "./pages/Profile/ChangePassword.jsx";

import Admin from "./pages/Admin/Admin.jsx";
import AdminPackages from "./pages/Admin/AdminPackages.jsx";
import EditPackages from "./pages/Admin/EditPackages.jsx";
import AddPackages from "./pages/Admin/AddPackages.jsx";
import AdminUsers from "./pages/Admin/AdminUsers.jsx";
import UsersDetails from "./pages/Admin/UsersDetails.jsx";
import EditUsers from "./pages/Admin/EditUsers.jsx";

import injectContext from "./store/appContext";

import { NavbarMain } from "./component/navbar";
import { Footer } from "./component/footer";
import Favorites from "./component/Favorites.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";
  // const loggedIn = window.localStorage.getItem("isLoggedIn");
  // console.log(loggedIn, "login");

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <NavbarMain />
          <Routes>
            {/* <Route path="/" exact component={loggedIn ? Profile : Home} /> */}
            <Route element={<Home />} path="/" />
            <Route element={<Safari />} path="/Safari" />

            <Route element={<Camp />} path="/Camp" />
            <Route element={<Eat />} path="/Eat" />
            <Route element={<Sleep />} path="/Sleep" />
            <Route element={<Relax />} path="/Relax" />
            <Route element={<OtherServices />} path="/OtherServices" />

            <Route element={<Experience />} path="/Experience" />
            <Route element={<Maasai />} path="/Maasai" />
            <Route element={<Sundowners />} path="/Sundowners" />
            <Route element={<BalloonSafari />} path="/BalloonSafari" />
            <Route element={<PhotoSafari />} path="/PhotoSafari" />

            <Route element={<AboutUs />} path="/AboutUs" />
            <Route element={<CommunityProjects />} path="/CommunityProjects" />
            <Route element={<PhotoGallery />} path="/PhotoGallery" />

            <Route element={<TravelPlan />} path="/TravelPlan" />
            <Route element={<Packages />} path="/Packages" />
            <Route element={<PackagesDetails />} path="/PackagesDetails/:id" />
            <Route element={<PackagesMap />} path="/PackagesMap/:id" />
            <Route element={<FAQ />} path="/FAQ" />
            
            <Route element={<AddPackages />} path="/AddPackages" />
            <Route element={<Destinations />} path="/Destinations" />
            <Route element={<Kenya />} path="/Kenya" />
            <Route element={<Ethiopia />} path="/Ethiopia" />
            <Route element={<Uganda />} path="/Uganda" />
            <Route element={<Rwanda />} path="/Rwanda" />
            <Route element={<Tanzania />} path="/Tanzania" />

            <Route element={<Admin />} path="/Admin" />
            <Route element={<AdminPackages />} path="/AdminPackages" />
            <Route element={<EditPackages />} path="/EditPackages/:id" />
            <Route element={<AdminUsers />} path="/AdminUsers" />
            <Route element={<EditUsers />} path="/EditUsers/:id" />
            <Route element={<UsersDetails />} path="/UsersDetails/:id" />

            <Route element={<Contact />} path="/Contact" />

            <Route element={<Login />} path="/login" />
            <Route element={<SignUp />} path="/signup" />
            <Route element={<Profile />} path="/Profile" />
            <Route element={<EditProfile />} path="/EditProfile" />
            <Route element={<ChangePassword />} path="/ChangePassword" />

            <Route element={<Favorites />} path="/Favorites" />

            {/* <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" /> */}
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
