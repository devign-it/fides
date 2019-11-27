import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import anime from "animejs/lib/anime.es.js";
import "./styles.scss";

const ProjectPreview = ({ project }) => {
    let darkText = project.darkText;
    let classInfo = "info";

    if (darkText) {
        classInfo += " dark-text";
    }

    return (
        <Link to={`/projects/${project.slug}`}>
            {/* <div ref={ref} className={`review-wrapper__${project.slug}`}> */}
            <div className={`preview-wrapper`}>
                <article
                    className={`project-post--preview project-post--preview__${project.slug}`}
                    style={{ backgroundColor: project.color }}
                >
                    <div className={classInfo}>
                        <h4 className="item--name">{project.client}</h4>
                        <h3 className="item--title">{project.title}</h3>
                        <span className="project-item--button">Check project</span>
                    </div>
                    <div className="image">
                        <Img alt="" fluid={project.featuredImage.fluid} />
                    </div>
                </article>
            </div>
        </Link>
    );
};

export default ProjectPreview;
