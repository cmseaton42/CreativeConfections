import React, { Component } from "react";
import Waypoint from "react-waypoint";
import { Link, NavLink } from "react-router-dom";
import MediaQuery from "react-responsive";
import Signature from "./signature";
import Sidebar from "./sidebar";

import "../../style/components/navbar.scss";

export default class Navbar extends Component {
    constructor() {
        super();

        this.state = {
            navListItems: [
                { name: "Home", route: "/" },
                { name: "Portfolio", route: "/Portfolio" },
                { name: "Contact", route: "/Contact" }
            ]
        };

        this.renderNavListItems = this.renderNavListItems.bind(this);
    }

    renderNavListItems() {
        const { navListItems, Active } = this.state;

        return navListItems.map(listItem => {
            const { name, route } = listItem;

            return (
                <li key={name} className="nav-item">
                    <NavLink
                        exact={name === "Home" ? true : false}
                        className="nav-link"
                        activeClassName="nav-link-active"
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
                <div className="navbar-solid">
                    <nav className="navbar navbar-expand-lg fixed-top">
                        <Link className="navbar-brand" to="/">
                            <Signature />
                        </Link>

                        {/* For Large Screens (e.g. Desktops) */}
                        <MediaQuery minWidth={991}>
                            <ul className="navbar-nav ml-auto">
                                {this.renderNavListItems()}
                            </ul>
                        </MediaQuery>

                        {/* For Smaller Screens (e.g. Tablets, Phones) */}
                        <MediaQuery maxWidth={991}>
                            <button className="btn btn-nav ml-auto">
                                <i className="fa fa-bars" />
                            </button>
                            <Sidebar />
                        </MediaQuery>
                    </nav>
                </div>
            </div>
        );
    }
}
