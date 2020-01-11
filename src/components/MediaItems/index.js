import React from "react";
import Img from "gatsby-image";
import "./styles.scss";

const MediaItems = ({ source }) => {
    return (
        <div>
            {source.map(({ node }, i) => (
                <div className={source[i].isVideo ? "body--showcase-item video" : "body--showcase-item"} key={i}>
                    {source[i].needFrameDesktop && (
                        <div className="frame--top">
                            <div className="dot" />
                            <div className="dot" />
                            <div className="dot" />
                        </div>
                    )}
                    {source[i].isVideo ? (
                        <div className={source[i].needFrameDesktop ? "video--wrapper hasFrame" : "video--wrapper"}>
                            {source[i].videoURL ? (
                                <iframe
                                    src={source[i].videoURL}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullscreen
                                    title={source[i].title}
                                />
                            ) : (
                                <video playsInline loop controls autoPlay muted>
                                    <source src={source[i].media.file.url} type="video/mp4" />
                                    <p>
                                        Video could not be found. <a href="mailto:daan@devign.it">Please let me know</a>
                                    </p>
                                </video>
                            )}
                        </div>
                    ) : (
                        <div className={source[i].needFrameDesktop ? "image--wrapper hasFrame" : "image--wrapper"}>
                            <Img
                                key={i}
                                className="showcase-item-image"
                                alt={source[i].title}
                                fluid={source[i].media.fluid}
                            />
                        </div>
                    )}
                    {source[i].title && source[i].extensiveDescription ? (
                        <div className="showcase-item--description">
                            <h4>{source[i].title}</h4>
                            <p className="project-item--description small--text">
                                {source[i].extensiveDescription.extensiveDescription}
                            </p>
                        </div>
                    ) : null}
                </div>
            ))}
        </div>
    );
};

export default MediaItems;
