import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBAnimation,
  MDBSmoothScroll,
} from "mdbreact";

const Footer = () => {
  return (
    <div className="container-fluid m-0 p-0" id="footer">
      <MDBFooter
        color="unique-color-dark"
        className="page-footer font-small pt-0"
      >
        <div style={{ backgroundColor: "#6351ce" }}>
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow className="py-4 d-flex align-items-center">
              <MDBCol
                md="6"
                lg="5"
                className="text-center text-md-left mb-4 mb-md-0"
              >
                <h6 className="mb-0 white-text">
                  Get connected with us on social networks!
                </h6>
              </MDBCol>
              <MDBCol md="6" lg="7" className="text-center text-md-right">
                <a
                  className="tw-ic m-1"
                  href="https://www.twitter.com/team_illogical"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter white-text mr-lg-4"> </i>
                </a>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <MDBContainer className="mt-5 mb-4 text-center text-md-left">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Illogical</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </MDBCol>
            <MDBCol md="2" lg="2" xl="2" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>What we do?</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <a href="#!">Web Development</a>
              </p>
              <p>
                <a href="#!">Mobile App Development</a>
              </p>
              <p>
                <a href="#!">Hacking</a>
              </p>
              <p>
                <a href="#!">Artificial Intelligence</a>
              </p>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Connect</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <a href="#!">Join Us</a>
              </p>
              <p>
                <MDBSmoothScroll to="about" className="m-0 p-0">
                  About
                </MDBSmoothScroll>
              </p>
              <p>
                <a href="#!">Help</a>
              </p>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Contact</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <i className="fa fa-home mr-3" /> Bangalore
              </p>
              <p>
                <i className="fa fa-envelope mr-3" />
                business.soycaesim@gmail.com
              </p>
              <p>
                <i className="fa fa-phone mr-3" /> + 00 000 000 00
              </p>
            </MDBCol>
            <MDBCol md="2" className="mb-4">
              <MDBAnimation type="bounceInLeft" delay=".9s">
                <img
                  src="https://svgsilh.com/svg/2745398.svg"
                  alt=""
                  className="img-fluid"
                  style={{
                    opacity: 0.9,
                    width: 200,
                    height: 100,
                    margin: 0,
                    padding: 0,
                  }}
                />
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:
            <a href="https://team-illogical.web.app/"> Team Illogical</a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
