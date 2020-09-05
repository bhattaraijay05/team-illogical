import React from "react";
import {
  MDBIcon,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";

const SamplePost = () => {
  return (
    <div>
      <MDBCard reverse>
        <MDBCardImage
          cascade
          style={{ height: "20rem", width: "100%" }}
          src="https://www.tutorialrepublic.com/lib/images/javascript-illustration.png"
        />
        <MDBCardBody cascade className="text-center">
          <MDBCardTitle>Title</MDBCardTitle>
          <h5 className="indigo-text">
            <strong>Subtitle</strong>
          </h5>
          <MDBCardText>Content</MDBCardText>
          <MDBIcon fab icon="js" />
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default SamplePost;
