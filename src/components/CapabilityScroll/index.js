import React from "react";
import "./styles.scss";

const CapabilityScroll = ({ dataSource, name }) => {
    return (
        <div className={`scroll--container ${name.toLowerCase()}`}>
            <h3>{name}</h3>
            <ul className="list--capabilities">
                {dataSource.map(({ node }, i) => {
                    return <li key={i}>{dataSource[i]}</li>;
                })}
            </ul>
        </div>
    );
};

export default CapabilityScroll;
