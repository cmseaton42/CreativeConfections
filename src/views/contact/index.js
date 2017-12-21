import React, { Component } from "react";
import Waypoint from "react-waypoint";
import { Link, NavLink } from "react-router-dom";
import MediaQuery from "react-responsive";

import Navbar from "../../components/navbar";
export default class Contact extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Navbar transparent={false} />
                <h1>Contact Page!</h1>
            </div>
        );
    }
}
