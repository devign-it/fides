import React from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import "./styles.scss";

export default class EmailSignup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null,
        };
        // preserve the initial state in a new object
        this.baseState = this.state;
    }

    // function myFunction() {
    //     myVar = setTimeout(alertFunc, 3000);
    //   }

    handleReset = () => {
        this.setState(this.baseState);
    };

    showMessage = (msg, result) => {
        const messageContainer = document.querySelectorAll("#message")[0];

        if (result !== "success") {
            messageContainer.classList.remove("isHidden");
            messageContainer.classList.add("isShown");

            messageContainer.innerHTML = `<p>${msg}</p>`;
            setTimeout(() => {
                messageContainer.classList.remove("isShown");
                messageContainer.classList.add("isHidden");
            }, 6000);
        } else {
            messageContainer.classList.add("isShown");

            messageContainer.innerHTML = `<p>${msg}</p>`;
            setTimeout(() => {
                messageContainer.classList.remove("isShown");
                messageContainer.classList.add("isHidden");
            }, 3000);
        }
    };

    _handleChange = (e) => {
        this.setState({
            [`${e.target.name}`]: e.target.value,
        });
    };

    _handleSubmit = (e) => {
        e.preventDefault();

        addToMailchimp(this.state.email, this.state)
            .then(({ msg, result }) => {
                if (result !== "success") {
                    this.showMessage(msg);
                }

                this.showMessage(msg);
            })
            .catch((err, result) => {
                this.showMessage(err, result);
            });
    };

    render() {
        return (
            <div className="newsletter--wrapper">
                <div>
                    <form onSubmit={this._handleSubmit}>
                        <div className="msg-succes" id="message"></div>
                        <input type="text" onChange={this._handleChange} placeholder="Name" name="name" />
                        <input type="email" onChange={this._handleChange} placeholder="Email" name="email" />
                        <input type="submit" />
                    </form>
                    <div className="disclaimer">
                        <p>
                            Your email, your data. We will never user your data for other purposes than notifying you
                            about our project. We use Mailchimp as our marketing platform. By clicking below to
                            subscribe, you acknowledge that your information will be transferred to Mailchimp for
                            processing.{" "}
                            <a href="https://mailchimp.com/legal/" target="_blank">
                                Learn more about Mailchimp's privacy practices here.
                            </a>
                        </p>
                    </div>
                    <div className="copyright">
                        <p>
                            © All rights reserved by{" "}
                            <a href="https://devign.it" target="blank">
                                Devign.it
                            </a>{" "}
                            - {new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
