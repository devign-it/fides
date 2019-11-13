import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styles from "./styles.scss";
// import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import anime from "animejs/lib/anime.es.js";

const ProjectPreview = ({ project }) => {
    // function getScrollPercent() {
    //     var h = document.documentElement,
    //         b = document.body,
    //         st = "scrollTop",
    //         sh = "scrollHeight";
    //     return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
    // }

    function getScrollPercent(el) {
        var h = document.documentElement,
            b = document.body,
            st = "scrollTop",
            sh = "scrollHeight";

        // let theWindow = document.documentElement;
        // var intElemScrollHeight = theEl.scrollHeight;
        return el.clientHeight;
        // return (100 * h.scrollTop) / el.clientHeight - h.clientHeight;

        // var h = document.documentElement,
        //     b = document.body,
        //     st = "scrollTop",
        //     sh = "scrollHeight";
        // return ((h[st] || b[st]) / ((intElemScrollHeight[sh] || b[sh]) - h.clientHeight)) * 100;
    }

    const [ref, inView] = useInView({
        rootMargin: "100px 0px",
    });

    // var tl = anime.timeline({
    //     targets: ".loaderThingy",
    //     keyframes: [{ scale: 0.5 }, { scale: 0.9 }],
    //     duration: 1000,
    //     autoplay: false,
    //     easing: "easeInOutSine",
    // });

    var animation = anime({
        targets: ".loaderThingy",
        keyframes: [{ opacity: 0.5 }, { scale: 1 }],

        direction: "alternate",
        loop: true,
        autoplay: true,
        easing: "easeInOutSine",
    });

    // let theEl = document.getElementsByClassName("loaderThingy");
    // if (inView === true) {
    //     animation.play;
    //     console.log("hey");
    // }
    window.addEventListener("scroll", () => {
        // const percentage = getScrollPercent(theEl[0]);
        // if (inView === true) {
        //     console.log("rekt");
        // }
        // tl.seek(tl.duration * (percentage * 0.01));
        // console.log("percentage", percentage);
    });
    // if (inView === true) {
    // }
    // if (inView === true) {
    //     tl.play;
    // }

    return (
        <Link to={`/projects/${project.slug}`}>
            <div ref={ref} id="loaderThingy" className="loaderThingy">
                <article
                    className={`project-post--preview project-post--preview__${project.slug}`}
                    style={{ backgroundColor: project.color }}
                >
                    <div className="info">
                        <h4 className="item--name">{project.client}</h4>
                        <h3 className="item--title">{project.title}</h3>
                        <a href={project.link} target="_blank" className="project-item--button">
                            Check project
                        </a>
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
