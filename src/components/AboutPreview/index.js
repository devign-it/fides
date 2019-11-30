import React from "react";
import { Link } from "gatsby";
import "./styles.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import AboutImage from "../AboutImage";

const AboutPreview = ({ source }) => {
    return (
        <div className="about-preview--wrapper">
            <div className="col__left">
                <div className="introduction--text">{documentToReactComponents(source.extensiveDescription.json)}</div>
                <Link className="button__wide inverted" to="/about">
                    Read More
                </Link>
            </div>
            <div className="col__right">
                <div className="about-image--preview">
                    <AboutImage topImage={source.topImage.fluid} bottomImage={source.bottomImage.fluid}></AboutImage>
                </div>
                <a
                    className="button__wide"
                    href={"./resume-daanvanderzwaag_2019-2020.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download Resume
                </a>
            </div>
        </div>
    );
};

export default AboutPreview;
