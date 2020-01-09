import React from "react";
import { ButtonWide } from "../Buttons";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import AboutImage from "../AboutImage";
import "./styles.scss";

const AboutPreview = ({ source }) => {
    return (
        <div className="about-preview--wrapper">
            <div className="col__left">
                <div className="introduction--text">{documentToReactComponents(source.shortDescription.json)}</div>
                <ButtonWide inverted={false} text="Read More" to="/about" internal></ButtonWide>
            </div>
            <div className="col__right">
                <div className="about-image--preview">
                    <AboutImage
                        showTopImage={false}
                        topImage={source.topImage.fluid}
                        bottomImage={source.bottomImage.fluid}
                    />
                </div>
                <ButtonWide
                    inverted={true}
                    text="Download Resume"
                    to="./resume-daanvanderzwaag_2019-2020.pdf"
                    internal={false}
                ></ButtonWide>
            </div>
        </div>
    );
};

export default AboutPreview;
