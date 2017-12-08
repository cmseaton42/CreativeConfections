import React, { Component } from "react";
import Waypoint from "react-waypoint";
import MediaQuery from "react-responsive";

import "../../style/components/cover.scss"

export default class Cover extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="cmpnt-cover">
                <div className="cover">
                    <div className="c-greeting-outer">
                        <div className="c-greeting-inner">
                            <h1 className="bold animated slideInDown">
                                Creative Confections
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
