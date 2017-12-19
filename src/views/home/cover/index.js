import React, { Component } from "react";
import Waypoint from "react-waypoint";
import MediaQuery from "react-responsive";

import "./cover.scss";

export default class Cover extends Component {
    constructor() {
        super();
    }

    render() {
        return <div className="cmpnt-cover">
                <div className="cover">
                    <div className="c-greeting-outer">
                        <div className="c-greeting-inner">
                            <p className="animated fadeInDown">
                                Creative<br />
                                Confections
                            </p>
                        </div>
                    </div>
                </div>
            </div>;
    }
}
