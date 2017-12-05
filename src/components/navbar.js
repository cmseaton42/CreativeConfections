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
            ],
            sidebarOpen: false
        };

        this.renderDesktopNavListItems = this.renderDesktopNavListItems.bind(
            this
        );
        this.renderMobileNavListItems = this.renderMobileNavListItems.bind(
            this
        );
        this.openSidebarClickHandler = this.openSidebarClickHandler.bind(this);
    }

    openSidebarClickHandler(event) {
        const { sidebarOpen } = this.state;
        this.setState({
            sidebarOpen: !sidebarOpen
        });
    }

    renderDesktopNavListItems() {
        const { navListItems, Active } = this.state;

        return navListItems.map(listItem => {
            const { name, route } = listItem;

            return (
                <li key={name} className="nav-item">
                    <NavLink
                        exact={name === "Home" ? true : false}
                        className="nav-link"
                        activeClassName="active"
                        to={route}
                    >
                        {name}
                    </NavLink>
                </li>
            );
        });
    }

    renderMobileNavListItems() {
        const { navListItems, Active } = this.state;

        return navListItems.map(listItem => {
            const { name, route } = listItem;

            return (
                <NavLink
                    exact={name === "Home" ? true : false}
                    className="sidebar-link"
                    activeClassName="active"
                    to={route}
                    key={name}
                >
                    {name}
                </NavLink>
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
                                {this.renderDesktopNavListItems()}
                            </ul>
                        </MediaQuery>

                        {/* For Smaller Screens (e.g. Tablets, Phones) */}
                        <MediaQuery maxWidth={991}>
                            <button
                                className="btn-nav ml-auto"
                                onClick={this.openSidebarClickHandler}
                            >
                                <i className="fa fa-bars" />
                            </button>
                            <Sidebar
                                isOpen={this.state.sidebarOpen}
                                willUnmount={this.unmountingSidebar}
                            >
                                <button
                                    className="btn-close ml-auto"
                                    onClick={this.openSidebarClickHandler}
                                >
                                    <i className="fa fa-close" />
                                </button>
                                {this.renderMobileNavListItems()}
                            </Sidebar>
                        </MediaQuery>
                    </nav>
                </div>
            </div>
        );
    }
}
