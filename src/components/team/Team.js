import React from 'react';
import Card from "@mui/material/Card";
import "./team.css"


const Team = () => {
    return (
        <Card className="sith-container">
            <div className="container text-center mt-5 mb-2">
                <h1 className="mb-2" style={{color: 'white'}}>Meet the Sith</h1>
                <span style={{color: 'white'}}>Driven by passion, fueled by hate, masters kindness to control the Jedi council.</span>
            </div>

            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className=" p-3 text-center rounded box">
                            <img
                                className="img-responsive rounded-circle"
                                src={require("./Redfearn1.jpeg")}
                                width="90"/>
                            <h5 className="mt-3 name">Lance Redfearn</h5>
                            <span className="work d-block">Junior Software Engineer</span>
                            <span className="work d-block"></span>
                            <div className="mt-4 about">
                                <span>"I am not a man of words. But I respect the power of words, for that is what transformed me. The words of the Sith Code..."<br/>
                                    - Code Of The Sith
                                </span>
                            </div>
                            <div className="mt-4">
                                <h6 className="v-profile">View Profile</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className=" p-3 text-center rounded box">
                            <img
                                className="img-responsive rounded-circle"
                                src={require("./Matos1.jpeg")}
                                width="90"/>
                            <h5 className="mt-3 name">Joshua Matos</h5>
                            <span className="work d-block">Senior Software Engineer</span>
                            <span className="work d-block"></span>
                            <div className="mt-4 about">
                                <span>"We take what we desire because we can. We can because we have power. We have power because we are Sith."<br/>
                                    - Sith Proverb.
                                </span>
                            </div>
                            <div className="mt-4">
                                <h6 className="v-profile">View Profile</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className=" p-3 text-center rounded box">
                            <img
                                className="img-responsive rounded-circle"
                                src={require("./Slay1.jpeg")}
                                width="90"/>
                            <h5 className="mt-3 name">Dakota Slay</h5>
                            <span className="work d-block">Architect</span>
                            <span className="work d-block">Junior Software Engineer</span>
                            <div className="mt-4 about">
                                <span>"There will be no truce. There will be no surrender. I don't care how many die. An example will be made of the deserters."&nbsp;
                                    -Darth Maleval.
                                </span>
                            </div>
                            <div className="mt-4">
                                <h6 className="v-profile">View Profile</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className=" p-3 text-center rounded box">
                            <img
                                className="img-responsive rounded-circle"
                                src={require("./Fink1.jpeg")}
                                width="90"/>
                            <h5 className="mt-3 name">Sydney Fink</h5>
                            <span className="work d-block">Product Manager</span>
                            <span className="work d-block">Junior Software Engineer</span>
                            <div className="mt-4 about">
                                <span>"The Sith must be ruled by a single leader: the very embodiment of the strength and power of the dark side."&nbsp;
                                    - Darth Revan.
                                </span>
                            </div>
                            <div className="mt-4">
                                <h6 className="v-profile">View Profile</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className=" p-3 text-center rounded box">
                            <img
                                className="img-responsive rounded-circle"
                                src={require("./Black1.jpeg")}
                                width="90"/>
                            <h5 className="mt-3 name">UI Owner</h5>
                            <span className="work d-block">Comapay agents house</span>
                            <span className="work d-block">Junior Software Engineer</span>
                            <div className="mt-4 about">
                                <span>"The dark side of the force is a pathway to many abilities some consider to be unnatural."<br/>
                                    - Darth Sidious/Emperor Palpatine
                                </span>
                            </div>
                            <div className="mt-4">
                                <h6 className="v-profile">View Profile</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
};

export default Team;
