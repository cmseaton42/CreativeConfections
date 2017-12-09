import React, { Component } from "react";
import Waypoint from "react-waypoint";

import "../../style/components/signature.scss";

export default class Signature extends Component {
    constructor() {
        super();

        this.state = {
            loaded: false
        };
    }

    render() {
        return (
            <div className="cmpnt-signature">
                Creative Confections
            </div>
        );
    }
}
