import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const NavbarMain = () => {
  const { store, actions } = useContext(Context);

  let navigate = useNavigate();

  

  // Calls flux logout
  const doLogout = () => {
    //false
    let onLogged = actions.logout();

    if (!onLogged) {
      //true
      navigate("/login");
    }
  };

  return (
    <div>
      <nav className="navbar" style={{ backgroundColor: "#29362f" }}>
        <div className="container">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="navbar__logo mb-0 ">Safari Adventure</div>
          </Link>
          
          <div className="ml-auto">

            {!store.auth ? (
              <Link to="/login">
                <button className="btn btn-cream m-2">Login</button>
              </Link>
            ) : null}{" "}
            {store.auth ? (
              <Link to="/">
                <button
                  className="btn btn-cream m-2"
                  type="button"
                  onClick={doLogout}
                >
                  Log out
                </button>
              </Link>
            ) : null}
            {!store.auth ? (
              <Link to="/signup">
                <button className="btn btn-cream m-2">Sign Up</button>
              </Link>
            ) : null}{" "}
          </div>
        </div>
      </nav>

      {/*------------------------------------------------------- SECOND NAV --------------------------------------------------------------*/}

      <div id="navbar2" className="navBar2 pagesBackground">
        <nav className="navbar">
          <div className="container-fluid  d-flex justify-content-center">
            {/*------------------------------------------------------- SAFARI TAB --------------------------------------------------------------*/}
            <span className="nav2Button me-3 nav-item">
              <Link to="/Safari" className="nav2Button">
                SAFARI
              </Link>
            </span>
            {/*--------------------------------------------------- CAMP DROPDOWN TAB --------------------------------------------------------------*/}
            <div className="dropdown">
              <button className="nav2Button">
                <Link to="/Camp" className="nav2Button">
                  THE CAMP
                </Link>
              </button>
              <div className="dropdown-content">
                <a className="dropdown-item">
                  <Link className="linkToView" to="/Eat">
                    EAT
                  </Link>
                </a>
                <a className="dropdown-item">
                  <Link className="linkToView" to="/Sleep">
                    SLEEP
                  </Link>
                </a>
                <a className="dropdown-item">
                  <Link className="linkToView" to="/Relax">
                    RELAX
                  </Link>
                </a>
                <a className="dropdown-item">
                  <Link className="linkToView" to="/OtherServices">
                    OTHER SERVICES
                  </Link>
                </a>
              </div>
            </div>
            {/*----------------------------------------------- EXPERIENCE DROPDOWN TAB ---------------------------------------------------------*/}
            <div className="dropdown">
              <button className="nav2Button">
                <Link to="/Experience" className="nav2Button">
                  EXPERIENCE
                </Link>
              </button>
              <div className="dropdown-content">
                <a className="dropdown-item">
                  <Link className="linkToView" to="/Maasai">
                    MASAI
                  </Link>
                </a>
                <a className="dropdown-item">
                  <Link className="linkToView" to="/Sundowners">
                    SUNDOWNERS
                  </Link>
                </a>
                <a className="dropdown-item">
                  <Link className="linkToView" to="/BalloonSafari">
                    BALLOON SAFARI
                  </Link>
                </a>
                <a className="dropdown-item">
                  <Link className="linkToView" to="/PhotoSafari">
                    PHOTO SAFARI
                  </Link>
                </a>
              </div>
            </div>
            {/*----------------------------------------------------TRAVEL PLANNING DROPDOWN TAB --------------------------------------------------*/}
            <div className="dropdown">
              <button className="nav2Button">
                <Link to="/TravelPlan" className="nav2Button">
                  TRAVEL PLANNING
                </Link>
              </button>

              <div className="dropdown-content">
                <a className="dropdown-item">
                  <Link className="linkToView" to="/Destinations">
                    DESTINATIONS
                  </Link>
                </a>
                <a className="dropdown-item">
                  <Link className="linkToView" to="/Packages">
                    PACKAGES
                  </Link>
                </a>
                <a className="dropdown-item">
                  <Link className="linkToView" to="/FAQ">
                    FAQ
                  </Link>
                </a>
              </div>
            </div>
            {/*----------------------------------------------------ABOUT US DROPDOWN TAB ---------------------------------------------------------*/}
            <div className="dropdown">
              <button className="nav2Button">
                <Link to="/AboutUs" className="nav2Button">
                  ABOUT US
                </Link>
              </button>
              <div className="dropdown-content">
                <a className="dropdown-item">
                  <Link className="linkToView" to="/PhotoGallery">
                    PHOTO GALLERY
                  </Link>
                </a>
                <a className="dropdown-item">
                  <Link className="linkToView" to="/CommunityProjects">
                    COMMUNITY PROJECTS
                  </Link>
                </a>
              </div>
            </div>
            {/*-----------------------------------------------------------CONTACT TAB -------------------------------------------------------------*/}
            <button className="nav2Button me-3 nav-item  ">
              <Link to="/Contact" className="nav2Button">
                CONTACT
              </Link>
            </button>
            {/*-----------------------------------------------------------PROFILE HIDE TAB -------------------------------------------------------------*/}
            {store.auth ? (
              <button className="nav2Button me-3 nav-item  ">
                <Link to="/Profile" className="nav2Button">
                  PROFILE
                </Link>
              </button>
            ) : null}{" "}
            {/*-----------------------------------------------------------ADMIN HIDE TAB -------------------------------------------------------------*/}
            {/* ---admin uth ---- */}
            {store.auth ? (
              <div>
                {store.admin ? (
                  <div className="dropdown">
                    <button className="nav2Button">
                      <Link to="/Admin" className="nav2Button">
                        ADMIN
                      </Link>
                    </button>
                    <div className="dropdown-content">
                      <a className="dropdown-item">
                        <Link className="linkToView" to="/AdminPackages">
                          EDIT PACKAGES
                        </Link>
                      </a>
                      <a className="dropdown-item">
                        <Link className="linkToView" to="/AdminUsers">
                          EDIT USERS
                        </Link>
                      </a>

                      {/* <a className="dropdown-item">
                        <Link className="linkToView" to="/Admin">
                          EDIT COMMENTS
                        </Link>
                      </a> */}
                    </div>
                  </div>
                ) : null}{" "}
              </div>
            ) : null}{" "}

            
          {store.premium ? (
              
              <i className="OthServIconPremium bt-5 fa fa-award"></i>
              
              
            ) : null}{" "}

          </div>
        </nav>
      </div>
    </div>
  );
};
