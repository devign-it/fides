import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import "./styles.scss";
import TagsList from "../TagsList";

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
                    {/* <h4 className="item--name typography__medium">{project.client} -- {project.title}</h4>
                        <h3 className="item--title">{project.title}</h3> */}
                    {/* <div className="item--tags">
                            <TagsList showTagsBlack={project.darkText} tagSource={project.categoryTags} />
                        </div> */}
                    {/* <span className="project-item--button">Check project</span> */}
                    <div className="image">
                        <Img fluid={project.heroImage.fluid} />
                    </div>
                </article>
                <div className="project-post--info">
                    <h3 className="item--name typography__large">
                        {project.client} — {project.title}
                    </h3>
                </div>
            </div>
        </Link>
    );
};

export default ProjectPreview;
