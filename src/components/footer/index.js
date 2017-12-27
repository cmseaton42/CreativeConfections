import React, { Component } from "react";
import { Link } from "react-router-dom";
import validator from "validator";

import "./footer.scss";

export default class Footer extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            valid: false,
            sending: false,
            message: "",
            sending: false,
            info: {
                phone: "(618) 599-7778",
                dialable: "tel:618-599-7778",
                address: "Johnson City, IL",
                email: "CreativeConfections.Steph@gmail.com"
            }
        };

        this._emailChange = this._emailChange.bind(this);
        this._onSubmit = this._onSubmit.bind(this);
        this._sendEmail = this._sendEmail.bind(this);
    }

    componentDidMount() {
        emailjs.init(process.env.EMAILJS_USER_ID);
    }

    _emailChange(event) {
        if (!this.state.sending) {
            const { value } = event.target;
            let valid = false;
            let email = value;

            if (validator.isEmail(email)) valid = true;

            this.setState({ email, valid });
        }
    }

    _sendEmail(cb) {
        emailjs
            .send("gmail", "contact_form", {
                email: this.state.email,
                name: "Mailing List Request",
                message: "Requested to be added to mailing list."
            })
            .then(
                response => {
                    cb(true);
                },
                err => {
                    cb(false);
                }
            );
    }

    _onSubmit(event) {
        event.preventDefault();
        const { email, valid } = this.state;

        if (!valid) {
            this.setState({
                message: "Please Enter a Valid Email Address"
            });
        } else {
            this.setState({ sending: true });
            this._sendEmail(status => {
                let message =
                    status == true
                        ? "Thanks for reaching out! =]"
                        : "Something went wrong. Try again later.";
                let email = status == true ? "" : this.state.email;
                const sending = false;

                this.setState({ email, message, sending });
            });
        }
    }

    render() {
        const { email, message } = this.state;

        return (
            <div className="cmpnt-footer container-fluid">
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-4 col-lg-3">
                        <h5 className="font-primary color-white font-weight-bold">
                            STAY CONNECTED
                        </h5>
                        <p className="footer-detail">
                            I am proud to invite you to join my mailing list so that we can keep in
                            touch.
                        </p>
                        <form onSubmit={this._onSubmit} className="form-footer-contact">
                            {message === "" ? null : <p className="footer-message">{message}</p>}
                            <div className="form-control">
                                <input
                                    className="form-control"
                                    id="name"
                                    type="text"
                                    placeholder="Email Address"
                                    onChange={this._emailChange}
                                    value={email}
                                />
                                {this.state.sending == true ? (
                                    <i className="fa fa-spinner footer-spinner" />
                                ) : null}
                            </div>
                        </form>
                        <div>
                            <Icon
                                link="https://www.facebook.com/Creative-Confections-203839296308118/"
                                icon="facebook"
                            />
                            <Icon link="#" icon="instagram" />
                            <Icon link="#" icon="linkedin" />
                            <Icon link="#" icon="twitter" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-3">
                        <h5 className="font-primary color-white font-weight-bold">
                            MISSION STATEMENT
                        </h5>
                        <p className="footer-detail">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tortor
                            metus, dignissim consectetur volutpat a, volutpat id risus. Maecenas
                            bibendum suscipit leo rhoncus porttitor. Fusce accumsan porta felis in
                            elementum. Nulla gravida dolor convallis mauris semper bibendum.
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-2 col-lg-1 text-center">
                        <div className="directory-container">
                            <h5 className="font-primary color-white font-weight-bold">DIRECTORY</h5>
                            <ul className="nav flex-column directory text-left">
                                <li className="nav-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Gallery">Gallery</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row align-items-center justify-content-center">
                    <div className="col-12 footer-info text-center">
                        <a href={this.state.info.dialable}>
                            <span>
                                <strong>{this.state.info.phone}</strong>
                            </span>
                        </a>
                        {"  "}
                        <i className="fa fa-circle" />
                        {"  "}
                        <span>{this.state.info.address}</span>
                        {"  "}
                        <i className="fa fa-circle" />
                        {"  "}
                        <span>{this.state.info.email}</span>
                    </div>
                </div>
                <hr />
                <div className="row align-items-center justify-content-center">
                    <div className="developer-plug">
                        This site was developed by{" "}
                        <strong>
                            <a href="http://www.canaanseaton.com">Canaan Seaton</a>
                        </strong>
                    </div>
                </div>
            </div>
        );
    }
}

let Icon = ({ link, icon }) => {
    return (
        <span className="cmpnt-icon-footer">
            <a className="icon-link" href={link}>
                <i className={`fa fa-${icon}`} />
            </a>
        </span>
    );
};
