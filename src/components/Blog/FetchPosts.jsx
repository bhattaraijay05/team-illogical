import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";

function FetchPosts({ title, subtitle, picture, id, content }) {
  return (
    <MDBCard reverse data-aos="fade-down-right">
      <MDBCardImage
        cascade
        style={{ height: "20rem", width: "100%" }}
        src={picture}
        alt={title}
      />
      <MDBCardBody cascade className="text-center">
        <MDBCardTitle>{title}</MDBCardTitle>
        <h5 className="indigo-text">
          <strong>{subtitle}</strong>
        </h5>
        <MDBCardText>{content}</MDBCardText>
      </MDBCardBody>
      <hr />
    </MDBCard>
  );
}

export default FetchPosts;
