import React, { Component } from "react";
import Waypoint from "react-waypoint";
import { Link, NavLink } from "react-router-dom";
import MediaQuery from "react-responsive";

import Navbar from "../../components/navbar";

import Cover from "./cover";
import WeddingInfo from "./wedding-info";

export default class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Navbar transparent={true} />
                <Cover />
                <WeddingInfo />
            </div>
        );
    }
}
