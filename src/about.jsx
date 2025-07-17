import React from "react";
import image1 from "../edusity_assets/about.png";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="d-flex justify-content-space-between align-items-centre gap-2 my-5 py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img src={image1} alt="About" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h5 className="text-muted mb">ABOUT UNIVERSITY</h5>
          <h2 className="mb-2 text-primary fw-bold">Nurturing Tomorrow's Leaders Today</h2>
          <p className="text-secondary mb-3">
            Embark on a transformative educational journey with our university's
            comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the
            knowledge, skills, and experiences needed to excel in the dynamic field of education.With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring
            educators to make a meaningful impact in classrooms, schools, and communities.Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of
            programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the
            future of education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
