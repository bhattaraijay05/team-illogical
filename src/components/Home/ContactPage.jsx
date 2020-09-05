import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput,
} from "mdbreact";

const ContactPage = () => {
  return (
    <div className="container-fluid m-0 p-0" data-aos="fade-down" id="contact">
      <section className="contact-section my-5">
        <MDBCard>
          <MDBRow>
            <MDBCol lg="8">
              <MDBCardBody className="form">
                <h3 className="mt-4">
                  <MDBIcon icon="envelope" className="pr-2" />
                  Write to us:
                </h3>
                <MDBRow>
                  <MDBCol md="6">
                    <div className="md-form mb-0">
                      <MDBInput
                        type="text"
                        id="form-contact-name"
                        label="Your name"
                      />
                    </div>
                  </MDBCol>
                  <MDBCol md="6">
                    <div className="md-form mb-0">
                      <MDBInput
                        type="text"
                        id="form-contact-email"
                        label="Your email"
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="6">
                    <div className="md-form mb-0">
                      <MDBInput
                        type="text"
                        id="form-contact-phone"
                        label="Your phone"
                      />
                    </div>
                  </MDBCol>
                  <MDBCol md="6">
                    <div className="md-form mb-0">
                      <MDBInput
                        type="text"
                        id="form-contact-company"
                        label="Your company"
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="12">
                    <div className="md-form mb-0">
                      <MDBInput
                        type="textarea"
                        id="form-contact-message"
                        label="Your message"
                      />
                      <MDBBtn rounded color="blue">
                        <MDBIcon icon="paper-plane" />
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCol>
            <MDBCol lg="4">
              <MDBCardBody className="contact text-center h-100 white-text">
                <h3 className="my-4 pb-2">Contact information</h3>
                <ul className="text-lg-left list-unstyled ml-4">
                  <li>
                    <p>
                      <MDBIcon icon="map-marker-alt" className="pr-2" />
                      Bangalore
                    </p>
                  </li>
                  <li>
                    <p>
                      <MDBIcon icon="phone" className="pr-2" />+ 00 000 000 00
                    </p>
                  </li>
                  <li>
                    <p>
                      <MDBIcon icon="envelope" className="pr-2" />
                      business.soycaesim@gmail.com
                    </p>
                  </li>
                </ul>
                <hr className="hr-light my-4" />
                <ul className="list-inline text-center list-unstyled">
                  <li className="list-inline-item">
                    <a
                      href="https://www.twitter.com/team_illogical"
                      target="_blank"
                      className="p-2 fa-lg w-ic"
                      rel="noopener noreferrer"
                    >
                      <MDBIcon fab icon="twitter" />
                    </a>
                  </li>
                </ul>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </section>
      <hr />
      <hr />
    </div>
  );
};

export default ContactPage;
