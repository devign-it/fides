import React from "react";
import "./styles.scss";

const ServicePreview = ({ service }) => {
    return (
        <div className="service--row">
            <div className="row--icon">
                <img src={service.icon.file.url} alt={"Icon for " + service.title} />
            </div>
            <div className="row--text">
                <h3>{service.title}</h3>
                <p>{service.text.text}</p>
            </div>
        </div>
    );
};

export default ServicePreview;
