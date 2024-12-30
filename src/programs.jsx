import React from "react";
import "./programss.css";
import program1 from "../edusity_assets/program-1.png"
import program2 from "../edusity_assets/program-2.png"
import program3 from "../edusity_assets/program-3.png"
import program4 from "../edusity_assets/program-icon-1.png"
import program5 from "../edusity_assets/program-icon-2.png"
import program6 from "../edusity_assets/program-icon-3.png"
const Program=()=>{
    return(<div className="main">
        <div className="program">
            <img src={program1} alt="one" />
            <div className="override">
                <img src={program4} alt="p4" srcset="" />
                <p>Graduation</p>
            </div>
        </div>
        <div className="program">
            <img src={program2} alt="two" />
            <div className="override">
                <img src={program5} alt="p4" srcset="" />
                <p>Post Graduation</p>
            </div>
        </div>
        <div className="program">
            <img src={program3} alt="three" />
            <div className="override">
                <img src={program6} alt="p4" srcset="" />
                <p>Masters</p>
            </div>
        </div>
    </div>
    )
}
export default Program;