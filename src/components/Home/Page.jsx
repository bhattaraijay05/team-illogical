import React, { Component } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCollapse,
  MDBCollapseHeader,
  MDBCard,
  MDBCardBody,
  MDBIcon,
} from "mdbreact";
class Page extends Component {
  state = {
    collapseID: "collapse1",
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  render() {
    return (
      <MDBContainer id="page" data-aos="fade-down" className="container-fluid">
        <MDBCard
          className="card-image"
          style={{
            backgroundImage: `url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)`,
          }}
        >
          <div className="rgba-black-strong py-5 px-4">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol md="10" xl="8">
                <MDBContainer className="accordion md-accordion accordion-5">
                  <MDBCard className="mb-4" id="hacking">
                    <MDBCollapseHeader
                      onClick={this.toggleCollapse("collapse1")}
                      className="p-0 z-depth-1"
                      tag="h4"
                      tagClassName="text-uppercase white-text mb-0 d-flex justify-content-start align-items-center"
                    >
                      <div
                        className="d-flex justify-content-center align-items-center mr-4"
                        style={{ backgroundColor: "#fff", minWidth: "100px" }}
                      >
                        <MDBIcon
                          icon="theater-masks"
                          size="2x"
                          className="m-3 black-text"
                        />
                      </div>
                      Hacking
                    </MDBCollapseHeader>

                    <MDBCollapse id="collapse1" isOpen={this.state.collapseID}>
                      <MDBCardBody className="rgba-black-light white-text z-depth-1">
                        <p className="p-md-4 mb-0">
                          Learn and practice ethical hacking, and use your
                          skills in the real world with us.
                        </p>
                      </MDBCardBody>
                    </MDBCollapse>
                  </MDBCard>

                  <MDBCard className="mb-4" id="freelancing">
                    <MDBCollapseHeader
                      onClick={this.toggleCollapse("collapse2")}
                      className="p-0 z-depth-1"
                      tag="h4"
                      tagClassName="text-uppercase white-text mb-0 d-flex justify-content-start align-items-center"
                    >
                      <div
                        className="d-flex justify-content-center align-items-center mr-4"
                        style={{ backgroundColor: "#fff", minWidth: "100px" }}
                      >
                        <MDBIcon
                          icon="laptop"
                          size="2x"
                          className="m-3 black-text"
                        />
                      </div>
                      Freelancing
                    </MDBCollapseHeader>

                    <MDBCollapse id="collapse2" isOpen={this.state.collapseID}>
                      <MDBCardBody className="rgba-black-light white-text z-depth-1">
                        <p className="p-md-4 mb-0">
                          Learn Web development, Android App Development and IOS
                          app development with us.
                        </p>
                      </MDBCardBody>
                    </MDBCollapse>
                  </MDBCard>

                  <MDBCard className="mb-4" id="ai">
                    <MDBCollapseHeader
                      onClick={this.toggleCollapse("collapse3")}
                      className="p-0 z-depth-1"
                      tag="h4"
                      tagClassName="text-uppercase white-text mb-0 d-flex justify-content-start align-items-center"
                    >
                      <div
                        className="d-flex justify-content-center align-items-center mr-4"
                        style={{ backgroundColor: "#fff", minWidth: "100px" }}
                      >
                        <MDBIcon
                          icon="robot"
                          size="2x"
                          className="m-3 black-text"
                        />
                      </div>
                      Artificial Intelligence
                    </MDBCollapseHeader>

                    <MDBCollapse id="collapse3" isOpen={this.state.collapseID}>
                      <MDBCardBody className="rgba-black-light white-text z-depth-1">
                        <p className="p-md-4 mb-0">
                          Teach the computers. Learn how to make computers think
                          like a human being. Start your Machine Learning Career
                          with us.
                        </p>
                      </MDBCardBody>
                    </MDBCollapse>
                  </MDBCard>
                </MDBContainer>
              </MDBCol>
            </MDBRow>
          </div>
        </MDBCard>
      </MDBContainer>
    );
  }
}

export default Page;
