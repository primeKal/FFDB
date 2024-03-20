import React from "react";
import { Link, useNavigate  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


export const Navigation = (props) => {
  const isLoggedIn = useSelector(state => state.loggedInStatus.isLoggedIn);
  const userData = useSelector(state => state.loggedInStatus.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const handleLogout = (e) => {
    e.preventDefault(); // Prevent the default action of the Link
    // Dispatch a logout action
    dispatch({ type: 'LOGOUT' });
    // Navigate to the login page or any other page after logout
    navigate('/login')
 };
 const handleLinkClick = (e) => {
 }

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            FFDB
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {/* <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li> */}
            {/* <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li> */}
            <li>
              <Link to="/" className="page-scroll">
                Home
              </Link>
            </li>
            <li>
              <Link to="/heros" className="page-scroll">
                Heroes
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="page-scroll">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/stories" className="page-scroll">
                Stories
              </Link>
            </li>
            { !isLoggedIn &&             <li>
            <Link to="/login">Login</Link>
            </li>}
            {
              isLoggedIn && 
              <div>
                Hi, {userData.name}
                <li>
                <Link onClick={handleLogout}>Log Out</Link>
              </li>
              </div>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};
