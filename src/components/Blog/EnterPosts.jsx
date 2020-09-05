import React, { useState, useEffect } from "react";
import firebase from "firebase";

import { db } from "../Firebase/firebase";
import FetchPosts from "./FetchPosts";
import SamplePost from "./SamplePost";
import { MDBRow, MDBCol } from "mdbreact";
import { motion } from "framer-motion";
const EnterPosts = () => {
  document.post = "Home";
  // const [posts, setPosts] = useState(["Do Something", "Do Nothing"]);
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [picture, setPicture] = useState("");
  const [content, setContent] = useState("");

  // useEffect(function, dependencies)

  // fetching the datas from the database
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

  const addPosts = (event) => {
    //this will happen after clicking the button
    event.preventDefault();
    db.collection("post").add({
      title: title,
      subtitle: subtitle,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      picture: picture,
      content: content,
    });
    setTitle("");
    setSubTitle("");
    setPicture("");
    setContent("");
  };

  return (
    <div
      className="container-fluid"
      style={{ paddingTop: 120, backgroundColor: "black" }}
    >
      <div className="md-form mb-2">
        <form>
          <input
            type="text"
            autoComplete="off"
            id="title"
            className="form-control"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            style={{ textAlign: " center", fontSize: 20, color: "white" }}
            placeholder="Enter the Title"
          />
          <input
            type="text"
            autoComplete="off"
            id="subtitle"
            className="form-control"
            value={subtitle}
            onChange={(event) => setSubTitle(event.target.value)}
            style={{ textAlign: " center", fontSize: 20, color: "white" }}
            placeholder="Enter the Subtitle"
          />
          <input
            type="text"
            id="picture"
            className="form-control"
            value={picture}
            onChange={(event) => setPicture(event.target.value)}
            style={{ textAlign: " center", fontSize: 20, color: "white" }}
            placeholder="Enter the link of the picture you want to add"
          />
          <textarea
            type="text"
            id="content"
            className="form-control"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            style={{ textAlign: " center", fontSize: 20, color: "white" }}
            placeholder="Enter the content"
          />
          <button
            disabled={(!title, !picture, !content)}
            className="btn btn-primary"
            onClick={addPosts}
            type="submit"
          >
            POST
          </button>
        </form>
      </div>

      <div id="posts" className="container">
        <MDBRow data-aos="fade-down-right">
          <MDBCol className="m-3 p-3">
            {posts.map((post) => (
              <>
                <FetchPosts
                  id={post.id}
                  title={post.title}
                  subtitle={post.subtitle}
                  picture={post.picture}
                  content={post.content}
                />
                <motion.button
                  className="btn btn-danger"
                  onClick={() => db.collection("post").doc(post.id).delete()}
                >
                  Delete
                </motion.button>
              </>
            ))}
          </MDBCol>
        </MDBRow>
      </div>

      <div className="container-fluid">
        <h1 style={{ color: "red" }}>Sample Post</h1>
        <SamplePost />
      </div>
    </div>
  );
};

export default EnterPosts;
