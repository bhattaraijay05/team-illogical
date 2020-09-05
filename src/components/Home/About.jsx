import React from "react";

const About = () => {
  return (
    <div>
      <section
        id="about"
        data-aos="fade-down"
        className="section feature-box mb-5"
      >
        <h2
          className="text-center text-uppercase my-5 pt-5 wow fadeIn"
          data-wow-delay="0.2s"
        >
          About <strong>Us</strong>
        </h2>
        <p
          className="text-center w-responsive mx-auto wow fadeIn my-5"
          data-wow-delay="0.2s"
        >
          We are <strong>Team ILLOGICAL</strong>
        </p>
        <div
          className="row features-big text-center wow fadeIn"
          data-wow-delay="0.4s"
        >
          <div className="col-md-4 mb-5" data-aos="zoom-in-down">
            <div className="card card-body cyan hoverable">
              <i className="fas fa-laptop fa-3x mb-4" aria-hidden="true" />
              <h5 className="font-weight-bold text-uppercase mb-4">
                Freelancer
              </h5>
              <p className="dark-grey-text">Android, IOS and Web Developers.</p>
            </div>
          </div>
          <div className="col-md-4 mb-5" data-aos="zoom-in-up">
            <div className="card card-body yellow hoverable">
              <i
                className="fas fa-theater-masks fa-3x mb-4"
                aria-hidden="true"
              />
              <h5 className="font-weight-bold text-uppercase mb-4">Hacker</h5>
              <p className="dark-grey-text">Ethical Hackers</p>
            </div>
          </div>
          <div className="col-md-4 mb-5" data-aos="zoom-in-down">
            <div className="card card-body orange hoverable">
              <i className="fas fa-robot fa-3x mb-4" aria-hidden="true" />
              <h5 className="font-weight-bold text-uppercase mb-4">AI</h5>
              <p className="dark-grey-text">
                Artificial Intelligence and Machine Learning Enthusiast
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <hr />
    </div>
  );
};

export default About;
