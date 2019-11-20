import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { useInView } from "react-intersection-observer";
import anime from "animejs/lib/anime.es.js";
import "./styles.scss";

const ProjectPreview = ({ project }) => {
    const [ref, inView] = useInView({
        rootMargin: "0px 0px",
        triggerOnce: true,
        threshold: 0.1,
    });

    let thisItem = document.querySelector(`.review-wrapper__${project.slug}`);

    let animationZoomIn = anime({
        targets: thisItem,
        scale: [0.9, 1],
        opacity: [0.5, 1],
        duration: 640,
        loop: false,
        autoplay: false,
        easing: "easeOutQuint",
    });

    if (inView) {
        animationZoomIn.play();
        console.log("inview", thisItem);
    } else if (!inView) {
        console.log("outofview", thisItem);
        animationZoomIn.reverse();
    }

    // thisItem.addEventListener(
    //     "mouseenter",
    //     function(event) {
    //         // highlight the mouseenter target
    //         event.target.style.color = "purple";

    //         // reset the color after a short delay
    //         setTimeout(function() {
    //             event.target.style.color = "";
    //         }, 500);
    //     },
    //     false,
    // );

    console.log(thisItem);

    return (
        <>
            <Link to={`/projects/${project.slug}`}>
                <div ref={ref} className={`review-wrapper__${project.slug}`}>
                    <article
                        className={`project-post--preview project-post--preview__${project.slug}`}
                        style={{ backgroundColor: project.color }}
                    >
                        <div className="info">
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
        </>
    );
};

export default ProjectPreview;
