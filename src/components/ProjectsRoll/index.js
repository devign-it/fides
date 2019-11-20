import React from "react";
import ProjectPreview from "../ProjectPreview";
import "./styles.scss";

class ProjectsRoll extends React.Component {
    render() {
        return (
            <section className="project-list">
                {this.props.items.map(({ node }) => {
                    return (
                        <article className="project-item--wrapper" key={node.slug}>
                            <ProjectPreview project={node} />
                        </article>
                    );
                })}
            </section>
        );
    }
}

export default ProjectsRoll;
