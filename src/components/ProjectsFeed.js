import React from "react";
import ProjectItem from "./ProjectItem/ProjectItem";
import Swiper from "swiper";

export const initializeSwiper = () =>
    new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 50,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

export const ProjectsFeed = ({ feedSource }) => {
    return (
        <section className="text-container--projects">
            <div className="projects--container">
                {feedSource.map(({ node }) => {
                    return <ProjectItem project={node} key={node.slug} />;
                })}
            </div>
        </section>
    );
};
