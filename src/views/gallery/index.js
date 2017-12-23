import React, { Component } from "react";
import Waypoint from "react-waypoint";
import { Link, NavLink } from "react-router-dom";
import MediaQuery from "react-responsive";

import Navbar from "../../components/navbar";

import Portfolio from "./portfolio";

export default class Gallery extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Navbar transparent={false} />
                <Portfolio />
            </div>
        );
    }
}
