import React, { Component } from "react";
import Waypoint from "react-waypoint";
import { Link, NavLink } from "react-router-dom";
import MediaQuery from "react-responsive";

import Navbar from "../../components/navbar";
import Connect from "./connect";
export default class Contact extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Navbar transparent={false} />
                <div className="spacer-nav" />
                <Connect />
            </div>
        );
    }
}
