import React from "react";
import {
  MDBView,
  MDBMask,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBAnimation,
  MDBBtn,
  MDBIcon,
  MDBSmoothScroll,
} from "mdbreact";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div>
      <div id="apppage">
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBCol
                  md="6"
                  className="white-text text-left text-md-left mt-xl-5 mb-2"
                >
                  <MDBAnimation type="fadeInLeftBig" delay=".4s">
                    <motion.h1
                      className="font-weight-bold mt-sm-5"
                      whileHover={{ scale: 1.1, color: "red" }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Team illogical
                    </motion.h1>
                    <hr className="hr-light" />

                    <h6 className="mb-2 col-8 text-left">
                      <h3 mb-2>What We Do?</h3>
                      <MDBAnimation type="fadeInLeftBig" delay=".7s">
                        <MDBSmoothScroll to="freelancing">
                          <MDBIcon icon="angle-double-right" />
                          Web Development
                        </MDBSmoothScroll>
                      </MDBAnimation>
                      <MDBAnimation type="fadeInLeftBig" delay=".8s">
                        <MDBSmoothScroll to="freelancing">
                          <MDBIcon icon="angle-double-right" /> Android/IOS
                          Development
                        </MDBSmoothScroll>
                      </MDBAnimation>
                      <MDBAnimation type="fadeInLeftBig" delay=".9s">
                        <MDBSmoothScroll to="hacking">
                          <MDBIcon icon="angle-double-right" /> Hacking
                        </MDBSmoothScroll>
                      </MDBAnimation>
                      <MDBAnimation type="fadeInLeftBig" delay="1s">
                        <MDBSmoothScroll to="ai">
                          <MDBIcon icon="angle-double-right" /> AI/ML
                        </MDBSmoothScroll>
                      </MDBAnimation>
                    </h6>
                    <MDBBtn color="white" style={{ padding: 5 }}>
                      <MDBSmoothScroll to="about">
                        <MDBAnimation type="bounceInLeft" delay="0.9s">
                          About Us
                        </MDBAnimation>
                      </MDBSmoothScroll>
                    </MDBBtn>
                    <MDBBtn outline color="white" style={{ padding: 3 }}>
                      <MDBSmoothScroll to="contact">
                        <MDBAnimation type="bounceInLeft" delay="0.9s">
                          Contact Us
                        </MDBAnimation>
                      </MDBSmoothScroll>
                    </MDBBtn>
                  </MDBAnimation>
                </MDBCol>

                <MDBCol md="6" xl="5" className="mt-xl-5">
                  <MDBAnimation type="bounceInUp" delay=".9s">
                    <img
                      src="https://svgsilh.com/svg/2745398.svg"
                      alt=""
                      className="img-fluid"
                      style={{ opacity: 0.9 }}
                    />
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
              <motion.div
                className="container text-center"
                whileHover={{ scale: 1.4 }}
                transition={{
                  scale: 2,
                }}
              >
                <MDBSmoothScroll
                  to="page"
                  className="btn btn-floating btn-large wow fadeIn"
                  data-wow-delay="0.4s"
                  data-offset="100"
                >
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </MDBSmoothScroll>
              </motion.div>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
      <hr />
      <hr />
    </div>
  );
};

export default Home;
