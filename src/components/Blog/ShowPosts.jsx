import React, { useEffect, useState } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import FetchPosts from "./FetchPosts";
import { db } from "../Firebase/firebase";

const ShowPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("post")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            title: doc.data().title,
            subtitle: doc.data().subtitle,
            picture: doc.data().picture,
            content: doc.data().content,
          }))
        );
      });
  }, []);
  return (
    <div id="posts" className="container">
      <MDBRow>
        <MDBCol className="m-3 p-3" data-aos="fade-down-right">
          {posts.map((post) => (
            <FetchPosts
              id={post.id}
              title={post.title}
              subtitle={post.subtitle}
              picture={post.picture}
              content={post.content}
            />
          ))}
          <hr />
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default ShowPosts;
