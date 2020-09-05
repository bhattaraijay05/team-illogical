import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
  MDBSmoothScroll,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class Navbar extends React.Component {
  state = {
    collapsed: false,
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id="apppage">
        <Router>
          <div>
            <MDBNavbar
              color="black"
              dark
              expand="md"
              fixed="top"
              scrolling
              transparent
            >
              <MDBContainer>
                <MDBNavbarBrand>
                  <MDBSmoothScroll to="apppage">illogical</MDBSmoothScroll>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                <MDBCollapse isOpen={this.state.collapsed} navbar>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      {/* <MDBNavLink to="#!">Home</MDBNavLink>*/}

                      <MDBSmoothScroll to="apppage">Home</MDBSmoothScroll>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBSmoothScroll to="posts">Posts</MDBSmoothScroll>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBSmoothScroll to="about">About</MDBSmoothScroll>
                    </MDBNavItem>

                    <MDBNavItem>
                      <MDBSmoothScroll to="contact">Contact</MDBSmoothScroll>
                    </MDBNavItem>

                    <MDBNavItem>
                      <MDBSmoothScroll to="footer">Connect</MDBSmoothScroll>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapsed && overlay}
          </div>
        </Router>
      </div>
    );
  }
}

export default Navbar;
