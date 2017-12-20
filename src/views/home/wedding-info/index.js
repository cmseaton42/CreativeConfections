import React, { Component, Fragment } from "react";
import Waypoint from "react-waypoint";
import MediaQuery from "react-responsive";

import "./wedding-info.scss";

export default class WeddingInfo extends Component {
    constructor() {
        super();

        this.state = {
            loaded: false
        }

        this._load = this._load.bind(this);
    }

    _load() {
        console.log('load');
        this.setState({ loaded: true });
    }

    render() {
        return (
            <Waypoint onEnter={this._load} bottomOffset={'10%'}>
                <div className="container cmpnt-wedding-info">
                    <div className="row h-100 align-items-center justify-content-center">
                        {!this.state.loaded ? null : (
                            <Fragment>
                                <div className="col-8 col-md-6 col-lg-5 animated fadeInLeft">
                                    <img
                                        src="https://i.imgur.com/MiPss1H.jpg"
                                        alt=""
                                        className="img-fluid img-bulletin"
                                    />
                                </div>
                                <div className="col-12 col-md-6 col-lg-7 text-center animated fadeInRight">
                                    <h1 className="font-cursive header">From Helping to Make Your Special Day Perfect</h1>
                                </div>
                            </Fragment>
                        )}
                    </div>
                </div>
            </Waypoint>
        );
    }
}
