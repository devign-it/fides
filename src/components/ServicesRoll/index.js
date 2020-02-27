import React from "react";
import ServicePreview from "../ServicePreview";
import "./styles.scss";

class ServicesRoll extends React.Component {
    render() {
        return this.props.items.map(({ node }) => {
            return <ServicePreview service={node} key={node.slug} />;
        });
    }
}

export default ServicesRoll;
