import React, { Component } from "react";
import Waypoint from "react-waypoint";
import Map from "../map";
import validator from "validator";
import humanize from "humanize";

import "./connect.scss";

export default class Connect extends Component {
    constructor() {
        super();

        this.state = {
            map_data: {
                center: { lat: 37.819502, lng: -88.929691 },
                zoom: 10,
                marker: { position: { lat: 37.819502, lng: -88.929691 }, defaultAnimation: 2 }
            },
            message_sent: false,
            show_modal: false,
            sending: false,
            form: {
                name: { value: "", isValid: false },
                email: { value: "", isValid: false },
                message: { value: "", isValid: true }
            }
        };

        this._submitHandler = this._submitHandler.bind(this);
        this._nameChange = this._nameChange.bind(this);
        this._emailChange = this._emailChange.bind(this);
        this._messageChange = this._messageChange.bind(this);
        this._sendEmail = this._sendEmail.bind(this);
        this._closeModal = this._closeModal.bind(this);
    }

    _nameChange(event) {
        if (!this.state.sending) {
            const { value } = event.target;
            let { form } = this.state;

            form.name.value = value;

            if (validator.isLength(form.name.value, { min: 5 })) form.name.isValid = true;
            else form.name.isValid = false;

            this.setState({ form });
        }
    }

    _emailChange(event) {
        if (!this.state.sending) {
            const { value } = event.target;
            let { form } = this.state;

            form.email.value = value;

            if (validator.isEmail(form.email.value)) form.email.isValid = true;
            else form.email.isValid = false;

            this.setState({ form });
        }
    }

    _messageChange(event) {
        if (!this.state.sending) {
            const { value } = event.target;
            let { form } = this.state;

            form.message.value = value;

            if (validator.isLength(form.message.value, { min: 25 })) form.message.isValid = true;
            else form.message.isValid = false;

            this.setState({ form });
        }
    }

    _submitHandler(event) {
        event.preventDefault();

        const { form, message_sent, show_modal } = this.state;

        if (form.name.isValid && form.email.isValid && form.message.isValid) {
            this.setState({ sending: true });

            this._sendEmail(status => {
                form.name.value = "";
                form.email.value = "";
                form.message.value = "";
                form.message.isValid = true;
                const message_sent = status;
                const show_modal = true;
                const sending = false;

                this.setState({ form, message_sent, show_modal, sending });
            });
        }
    }

    _sendEmail(cb) {
        const { form } = this.state;
        emailjs
            .send("gmail", "contact_form", {
                email: form.email.value,
                name: form.name.value,
                message: form.message.value
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

    _closeModal() {
        const message_sent = false;
        const show_modal = false;

        this.setState({ message_sent, show_modal });
    }

    render() {
        const { map_data, form } = this.state;
        return (
            <div id="Contact" className="cmpnt-contact container">
                <div className="row align-items-center justify-content-center">
                    <div className={`col-sm-12 col-md-6 map-wrapper animated slideInLeft`}>
                        <div className="map">
                            <Map {...map_data} />
                        </div>
                    </div>
                    <div
                        className={`col-sm-12 col-md-6 contact-form-wrapper align-self-center animated slideInRight`}
                    >
                        <div className="text-center">
                            <div className={`contact-header animated zoomIn`}>Connect with Me</div>
                        </div>
                        <div className="text-left">
                            <form onSubmit={this._submitHandler}>
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        id="name"
                                        type="text"
                                        placeholder="Name"
                                        onChange={this._nameChange}
                                        value={form.name.value}
                                    />
                                    {form.name.isValid && form.name.value !== "" ? (
                                        <i className="fa fa-check" />
                                    ) : null}

                                    {!form.name.isValid && form.name.value !== "" ? (
                                        <i className="fa fa-times" />
                                    ) : null}

                                    {!form.name.isValid && form.name.value !== "" ? (
                                        <div className="form-control-feedback">
                                            Please Enter Your Name, Thanks!
                                        </div>
                                    ) : null}
                                </div>

                                <div className="form-group">
                                    <input
                                        className="form-control form-control-success"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        onChange={this._emailChange}
                                        value={form.email.value}
                                    />
                                    {form.email.isValid && form.email.value !== "" ? (
                                        <i className="fa fa-check" />
                                    ) : null}

                                    {!form.email.isValid && form.email.value !== "" ? (
                                        <i className="fa fa-times" />
                                    ) : null}

                                    {!form.email.isValid && form.email.value !== "" ? (
                                        <div className="form-control-feedback">
                                            Please Provide a Valid Email, Thanks!
                                        </div>
                                    ) : null}
                                </div>

                                <div className="form-group">
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        rows="5"
                                        placeholder="Message"
                                        onChange={this._messageChange}
                                        value={form.message.value}
                                    />
                                    {form.message.isValid && form.message.value !== "" ? (
                                        <i className="fa fa-check" />
                                    ) : null}

                                    {!form.message.isValid && form.message.value !== null ? (
                                        <div className="form-control-feedback">
                                            Tell Me About How I Can Help You! (25 Chars Min)
                                        </div>
                                    ) : null}
                                </div>

                                <div className="form-group text-center">
                                    {this.state.sending ? (
                                        <div className="form-control-sending animated infinite flash">
                                            Sending...
                                        </div>
                                    ) : (
                                        <button type="submit" className="btn btn-custom">
                                            Get Connected
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>

                        {this.state.show_modal ? (
                            <div className="contact-modal text-center animated slideInDown">
                                <div className="contact-modal-content">
                                    <div className="contact-modal-close" onClick={this._closeModal}>
                                        <i className="fa fa-times" />
                                    </div>
                                    {this.state.message_sent ? (
                                        <div>
                                            <i className="fa fa-thumbs-up" />
                                        </div>
                                    ) : (
                                        <div>
                                            <i className="fa fa-thumbs-down" />
                                        </div>
                                    )}
                                    {this.state.message_sent
                                        ? "Success! I will get back to you ASAP!"
                                        : "Whoops! Looks like something went wrong."}
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}
