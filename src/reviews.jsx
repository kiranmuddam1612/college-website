import React, { useRef } from "react";
import right from "../edusity_assets/next-icon.png";
import left from "../edusity_assets/back-icon.png";
import user1 from "../edusity_assets/user-1.png";
import user2 from "../edusity_assets/user-2.png";
import user3 from "../edusity_assets/user-3.png";
import user4 from "../edusity_assets/user-4.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Reviews = () => {
  const slides = useRef();
  let tc = 0;
  const forward = () => {
    if (tc > -75) {
      tc -= 25;
    }
    slides.current.style.transform = `translateX(${tc}%)`;
  };
  const backward = () => {
    if (tc < 0) {
      tc += 25;
    }
    slides.current.style.transform = `translateX(${tc}%)`;
  };

  return (
    <div className="review position-relative py-5 bg-light">
      <button className="btn btn-dark position-absolute top-50 start-0 translate-middle-y ms-3" style={{borderRadius:"50%"} }onClick={backward}>
        <img src={left} alt="Previous" />
      </button>
      <button className="btn btn-dark position-absolute top-50 end-0 translate-middle-y me-3" style={{borderRadius:"50%"}} onClick={forward}>
        <img src={right} alt="Next" />
      </button>
      <div className="overflow-hidden container">
        <ul className="d-flex p-0 m-0 list-unstyled" ref={slides} style={{ transition: "0.5s", width: "400%" }}>
          {[user1, user2, user3, user4].map((user, index) => (
            <li key={index} className="w-100 p-4">
              <div className="Review-Container mx-auto">
                <div className="d-flex align-items-center mb-3">
                  <img src={user} alt={`user-${index + 1}`} className="rounded-circle me-3" style={{ width: "80px", height: "80px", objectFit: "cover" }} />
                  <div>
                    <h5>Review-{index + 1}</h5>
                    <h6>{["Anna", "Alex", "Julie", "Josh"][index]}</h6>
                  </div>
                </div>
                <p className="text-muted">
                  Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reviews;
