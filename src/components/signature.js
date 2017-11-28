import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

import '../../style/components/signature.scss';

export default class Signature extends Component {
    constructor() {
        super();

        this.state = {
            loaded: false,
            text: 'Creative Confections'
        }
    }

    render() {
        return (
            <div className="cmpnt-signature">
                <svg id="signature-svg">
                    <text>{this.state.text}</text>
                </svg>
            </div>
        )
    }
}