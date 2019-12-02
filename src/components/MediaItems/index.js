import React from "react";
import Img from "gatsby-image";
import "./styles.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const MediaItems = ({ source }) => {
    return (
        <div>
            {source.map(({ node }, i) => (
                <div className={source[i].isVideo ? "body--showcase-item video" : "body--showcase-item"} key={i}>
                    {source[i].needFrameDesktop && (
                        <div className="frame--top">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                    )}
                    {source[i].isVideo ? (
                        <div className={source[i].needFrameDesktop ? "video--wrapper hasFrame" : "video--wrapper"}>
                            <video autoPlay>
                                <source src={source[i].media.file.url} type="video/mp4" />
                            </video>
                        </div>
                    ) : (
                        <div className="image--wrapper">
                            <Img
                                key={i}
                                className="showcase-item-image"
                                alt={source[i].title}
                                fluid={source[i].media.fluid}
                            />
                        </div>
                    )}
                    {source[i].title && source[i].description ? (
                        <div className="showcase-item--description">
                            <h4>{source[i].title}</h4>
                            <p className="project-item--description small--text">
                                {documentToReactComponents(source[i].mediaDescription.json)}
                            </p>
                        </div>
                    ) : null}
                </div>
            ))}
        </div>
    );
};

export default MediaItems;
