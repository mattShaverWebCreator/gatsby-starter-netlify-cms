import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import linkedin from "../img/social/linkedin.svg";
import instagram from "../img//social/instagram.svg";
import logo from "../img/logo.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container navbar__container">
          <div className="columns">
          <div className="column is-one-third navbar__brand">
            <Link to="/" className="navbar__brand--item" title="Home">
              <img src={logo} alt="Matt Shaver Web Creator's Logo" />
            </Link>
            <div
              className={`navbar__brand--burger burger is-hidden-tablet ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`column is-one-third navbar__menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar__menu--items navbar-start has-text-centered">
              <Link className="navbar__menu--item" to="/about">
                About
              </Link>
              <Link className="navbar__menu--item" to="/projects">
                Projects
              </Link>
              <Link className="navbar__menu--item" to="/blog">
                Blog
              </Link>
              <Link className="navbar__menu--item" to="/contact">
                Contact
              </Link>
            </div>
          </div>
          <div className="column is-one-third navbar__social navbar-end has-text-centered">
              <a
                className="navbar__social--icon"
                href="https://github.com/mattShaverWebCreator"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
              <a
                className="navbar__social--icon"
                href="https://instagram.com/mattShaverWebCreator"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={instagram} alt="Instagram" />
                </span>
              </a>
              <a
                className="navbar__social--icon"
                href="https://linkedin.com/in/mattliveshere"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={linkedin} alt="LinkedIn" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
