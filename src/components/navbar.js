import React, { Component } from "react";
import Waypoint from "react-waypoint";
import { Link, NavLink } from "react-router-dom";
import Signature from "./signature";

import "../../style/components/navbar.scss";

export default class Navbar extends Component {
    constructor() {
        super();

        this.state = {
            navListItems: [
                { name: "Home", route: "/" },
                { name: "Portfolio", route: "#" },
                { name: "Contact", route: "#" }
            ],
            Active: ""
        };

        this.setActiveListItem = this.setActiveListItem.bind(this);
        this.renderNavListItems = this.renderNavListItems.bind(this);
    }

    setActiveListItem(Active) {
        this.setState({ Active });
    }

    renderNavListItems() {
        const { navListItems, Active } = this.state;

        return navListItems.map(listItem => {
            const { name, route } = listItem;

            return (
                <li className={`nav-item ${Active === name ? "active" : ""}`}>
                    <NavLink
                        className="nav-link"
                        isActive={() => this.setActiveListItem(name)}
                        to={route}
                    >
                        {name}
                    </NavLink>
                </li>
            );
        });
    }

    render() {
        return (
            <div className="container-fluid cmpnt-navbar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <Link className="navbar-brand" to="/">
                        <Signature />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {this.renderNavListItems()}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
