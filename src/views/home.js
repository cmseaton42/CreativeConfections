import React, { Component } from "react";
import Waypoint from "react-waypoint";
import { Link, NavLink } from "react-router-dom";
import MediaQuery from "react-responsive";

import Cover from "../components/cover";

export default class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Cover />
            </div>
        );
    }
}
