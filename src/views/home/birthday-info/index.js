import React, { Component, Fragment } from "react";
import Waypoint from "react-waypoint";
import MediaQuery from "react-responsive";

import "./birthday-info.scss";

export default class BirthdayInfo extends Component {
    constructor() {
        super();

        this.state = {
            loaded: false
        };

        this._load = this._load.bind(this);
    }

    _load() {
        this.setState({ loaded: true });
    }

    render() {
        return (
            <Waypoint onEnter={this._load} bottomOffset={"15%"}>
                <div className="container-fluid cmpnt-birthday-info">
                    <div className="container">
                        <div className="row h-100 align-items-center justify-content-center">
                            {!this.state.loaded ? null : (
                                <Fragment>
                                    <div className="col-sm-12 col-md-6 col-lg-7 text-center animated fadeInLeft">
                                        <h1 className="font-cursive header">
                                            Completing the Perfect Birthday Theme
                                        </h1>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-5 align-self-center text-center animated fadeInRight">
                                        <img
                                            src="https://i.imgur.com/sR5m6Xp.jpg"
                                            alt=""
                                            className="img-birthday"
                                        />
                                    </div>
                                </Fragment>
                            )}
                        </div>
                    </div>
                </div>
            </Waypoint>
        );
    }
}
