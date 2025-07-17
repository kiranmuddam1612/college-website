import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./programss.css";
import program1 from "../edusity_assets/program-1.png"
import program2 from "../edusity_assets/program-2.png"
import program3 from "../edusity_assets/program-3.png"
import program4 from "../edusity_assets/program-icon-1.png"
import program5 from "../edusity_assets/program-icon-2.png"
import program6 from "../edusity_assets/program-icon-3.png"

const Program = () => {
    return (
        <div className="d-flex justify-content-space-evenly">
            <div className="row g-4">
                <div className="col-md-4">
                    <div className="program position-relative">
                        <img src={program1} alt="one" className="img-fluid rounded" />
                        <div className="override position-absolute bottom-0 start-0 w-100 text-center text-white">
                            <img src={program4} alt="p4" className="mb-2" />
                            <p>Graduation</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="program position-relative">
                        <img src={program2} alt="two" className="img-fluid rounded" />
                        <div className="override position-absolute bottom-0 start-0 w-100 text-center text-white">
                            <img src={program5} alt="p5" className="mb-2" />
                            <p>Post Graduation</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="program position-relative">
                        <img src={program3} alt="three" className="img-fluid rounded" />
                        <div className="override position-absolute bottom-0 start-0 w-100 text-center text-white">
                            <img src={program6} alt="p6" className="mb-2" />
                            <p>Masters</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Program;
