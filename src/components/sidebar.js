import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link, NavLink } from "react-router-dom";

import "../../style/components/sidebar.scss";

export default class Sidebar extends Component {
    constructor() {
        super();

        this.el = document.getElementById("sidebar-root");
    }

    render() {
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}
