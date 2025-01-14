import React from "react";
import {AiFillGithub} from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { TbBrandLinkedin } from "react-icons/tb";

const Resume = () => {
    return (
        <>
            <div className="col-10 ms-auto p-4">
                <div className="p-4 bg-dark slide-in-top">
                    <div className="row">
                        <div className="col-6">
                            <h2 className="ff-jose fw-bold ls-2">ROHIT SHARMA</h2>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-md-6">
                        <h4 className="ff-jose ls-2">EDUCATION</h4>
                        <ul>
                            <li>
                            <h4 className="ff-jose my-1 text-red">B-tech CSE</h4>
                            <h6 className="blue-label px-2 py-1">2022-2026</h6>
                            <p className="m-0">
                                Maharaja Surajmal Institute of techenology
                            </p>
                            <p>CGPA - 8.824 (upto 4th sem)</p>
                            </li>
                            <li>
                            <h4 className="ff-jose my-1 text-red">12th Result</h4>
                            <h6 className="blue-label px-2 py-1">Passed in 2022</h6>
                            <p className="m-0">Kendriya Vidyalaya Keshav Puram</p>
                            <p>Percentage - 94</p>
                            </li>
                        </ul>
                        </div>
                        <div className="col-md-6">
                        <ul>
                            <li>
                            <h4 className="ff-jose my-1 text-red">10th Result</h4>
                            <h6 className="blue-label px-2 py-1">Passed in 2020</h6>
                            <p className="m-0">Kendriya Vidyalaya Keshav Puram</p>
                            <p>Percentage - 92.8</p>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-md-6">
                            <h4 className="ff-jose ls-2">PROFILE</h4>
                            <h1>
                                <a
                                href="https://github.com/rohits2404"
                                target="/blank"
                                className="text-white text-decoration-none mx-2"
                                >
                                <AiFillGithub className="zoom-on-hover" />
                                </a>
                                <a
                                href="https://www.linkedin.com/in/rohit-sharma-161988258/"
                                target="/blank"
                                className="text-white text-decoration-none mx-2"
                                >
                                <TbBrandLinkedin className="zoom-on-hover" />
                                </a>
                                <a
                                href="mailto:sharmaji6873@gmail.com"
                                target="/blank"
                                className="text-white text-decoration-none mx-2"
                                >
                                <MdOutlineMail className="zoom-on-hover" />
                                </a>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Resume;