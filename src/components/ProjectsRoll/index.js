import React from "react";
import { Link } from "gatsby";
import ProjectPreview from "../ProjectPreview";
import { ButtonWide } from "../Buttons";
import "./styles.scss";

class ProjectsRoll extends React.Component {
    render() {
        let orginalProjects = this.props.items;
        let limitedProjects = orginalProjects.slice(0, 4);
        let mappedProjects = orginalProjects;

        if (this.props.showButton) {
            mappedProjects = limitedProjects;
        }

        return (
            <section className="project-list">
                {mappedProjects.map(({ node }) => {
                    return (
                        <article className="project-item--wrapper" key={node.slug}>
                            <ProjectPreview project={node} />
                        </article>
                    );
                })}
                {this.props.showButton && (
                    <ButtonWide
                        inverted={false}
                        text={"See all " + orginalProjects.length + " projects"}
                        to="/projects"
                    ></ButtonWide>
                )}
            </section>
        );
    }
}

export default ProjectsRoll;
