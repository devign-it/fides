import React from "react";
import "./styles.scss";

const HomeModal = () => {
    return (
        <div className="modal-info">
            <div className="info-modal--text-container">
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
