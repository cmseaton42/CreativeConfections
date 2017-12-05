import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link, NavLink } from "react-router-dom";

import "../../style/components/sidebar.scss";

export default class Sidebar extends Component {
    constructor() {
        super();

        this.sidebar = document.getElementById("sidebar-root");
    }

    componentWillReceiveProps(nextProps) {
        const { isOpen } = nextProps;

        this.sidebar.style.width = isOpen ? "250px" : "0";
    }

    componentWillMount() {
        const { isOpen } = this.props;

        this.sidebar.style.width = isOpen ? "250px" : "0";
    }

    componentWillUnmount() {
        this.sidebar.style.width = "0";
    }

    render() {
        return ReactDOM.createPortal(this.props.children, this.sidebar);
    }
}
