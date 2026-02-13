import React from "react";
import { IoMdEye } from "react-icons/io";
import { IoIosDocument } from "react-icons/io";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="col-10 py-3 d-flex align-items-center ms-auto">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                            <div>
                                <h1 className="m-0 display-1 fw-bold slide-in-top">Hi,</h1>
                                <h1 className="m-0 display-1  fw-bold  animate-charcter">
                                I'm Rohit Sharma,
                                </h1>
                                <p className="ls-2 mt-2 slide-in-bottom">
                                NextJs Developer / Frontend Developer / Computer Science Engineer
                                </p>
                                <div className="d-flex">
                                <Link
                                    to="https://drive.google.com/file/d/1C0QcHFE5MEm50jV6nlaISEn5xGt4IyYA/view?usp=sharing"
                                    className=" border-0 btns d-flex justify-content-around align-items-center"
                                    style={{
                                    backgroundColor: "#cacccb",
                                    color: "black",
                                    textDecoration: "none",
                                    }}
                                >
                                    <IoIosDocument />
                                    <span className="ml-4">Resume</span>
                                </Link>
                                <Link
                                    to="https://github.com/rohits2404"
                                    className="border-0 btns d-flex justify-content-around align-items-center"
                                    style={{
                                    backgroundColor: "#191919",
                                    color: "white",
                                    marginLeft: "3rem",
                                    textDecoration: "none",
                                    }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IoMdEye />
                                    <span className="ml-4">GitHub</span>
                                </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12">
                            <img className="img-fluid" src="../bitmoji.png" alt="..."></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
