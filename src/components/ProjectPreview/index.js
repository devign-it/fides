import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const ProjectPreview = ({ project }) => (
    <Link to={`/projects/${project.slug}`}>
        <article className={`project-item project-item__${project.slug}`} style={{ backgroundColor: project.color }}>
            <div className="project-item--info">
                <h4 className="item--name">{project.client}</h4>
                <h3 className="item--title">{project.title}</h3>
                <a href={project.link} target="_blank" className="project-item--button">
                    Check website
                </a>
            </div>
            <div className="project-item--slider swiper-container black">
                <Img alt="" fluid={project.featuredImage.fluid} />

                {/* <div className="slider--items swiper-wrapper">
                    {project.images.map(({ node }, i) => (
                        <div className="swiper-slide">
                            <Img
                                fadeIn={false}
                                key={i}
                                className="project-item--image"
                                alt={project.images.description}
                                fluid={project.images[i].fluid}
                            />
                            <p className="project-item--description">{project.images[i].description}</p>
                        </div>
                    ))}

                    <div className="swiper-slide">
                        <div
                            className="project-item--description__text"
                            dangerouslySetInnerHTML={{
                                __html: project.description.childMarkdownRemark.html,
                            }}
                        />
                    </div>
                </div>
                {appendSwiperControls()} */}
            </div>
        </article>
    </Link>
);

export default ProjectPreview;
