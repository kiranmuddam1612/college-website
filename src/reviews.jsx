import React, { useRef } from "react";
import right from "../edusity_assets/next-icon.png";
import left from "../edusity_assets/back-icon.png";
import user1 from "../edusity_assets/user-1.png"
import user2 from "../edusity_assets/user-2.png"
import user3 from "../edusity_assets/user-3.png"
import user4 from "../edusity_assets/user-4.png"
import "./reviews.css"


const Reviews=()=>{
    const slides=useRef();
    let tc=0
    const forward=()=>{
        if(tc>-50){
            tc-=25;
        }
        slides.current.style.transform=`translateX(${tc}%)`

    }
    const backward=()=>{
        if(tc<0){
            tc+=25;
        }
        slides.current.style.transform=`translateX(${tc}%)`
        }


    return(<div className="review">
            <img src={right} alt="r" className="rclick" onClick={forward}/>
            <img src={left} alt="l" className="lclick" onClick={backward}/>
            <div className="changes">
                <ul ref={slides}>
                    <li>
                        <div className="Review-Container">
                            <div className="texts">
                            <img src={user1} alt="u1" />
                            <div>
                                <h3>Review-1</h3>
                                <h3>Anna</h3>
                            </div>
                            </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="Review-Container">
                        <div className="texts">
                            <img src={user2} alt="u1" />
                            <div>
                                <h2>Review-2</h2>
                                <h3>Alex</h3>
                            </div>
                            </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have 
                        truly exceeded my expectations.</p>
                   </div>
                    </li>
                    <li>
                        <div className="Review-Container">
                        <div className="texts">
                            <img src={user3} alt="u1" />
                            <div>
                                <h2>Review-3</h2>
                                <h3>Julie</h3>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="Review-Container">
                        <div className="texts">
                            <img src={user4} alt="u1" />
                            <div>
                                <h2>Review-4</h2>
                                <h3>Josh</h3>
                            </div>
                            </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                </ul>
            </div>
    </div>)
}
export default Reviews;