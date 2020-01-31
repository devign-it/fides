import React from "react";
import "./styles.scss";

const HomeModal = () => {
    return (
        <div className="modal-info">
            <div className="info-modal--text-container">
                {/* <div className="text-container--logo">
                    <img src={logoDevignBlack} alt="Devign.it" />
                </div>
                <p className="text-container--text">
                    Digital agency focused on digital product development & brand and experience design since 2014.
                    Curious to see some work? Get in touch. Don't be shy.
                </p> */}
                <h1 className="text-container--title">
                    Untangling complex problems with human designed technology is what we like and do
                </h1>
                <a href="mailto:info@devign.it" className="info-modal--button">
                    <span>Get in touch</span>
                </a>
            </div>
        </div>
    );
};

export default HomeModal;
