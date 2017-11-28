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
                <svg id="signature-svg">
                    <text className="signature-C1">C</text>
                    <text className="signature-reative">reative </text>
                    <text className="signature-C2">C</text>
                    <text className="signature-onfections">onfections</text>
                </svg>
            </div>
        );
    }
}
