import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import get from "lodash/get";

import TextContainer from "../components/TextContainer";
import { Heading, Paragraph } from "../components/Typography";

import "../styles/styles.scss";
import "../styles/layouts/about.scss";

import AboutImage from "../components/AboutImage";

const RootIndex = ({ data, location }) => {
    console.log(data);
    return (
        <Layout location={location}>
            <section className="text-container--about">
                <div className="container--col">
                    <AboutImage
                        imageSource={
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bradypus.jpg/220px-Bradypus.jpg"
                        }
                        textSource={
                            "UX Engineer based in Tel Aviv. Interfacing research, design and technology to shape intuitive digital experiences."
                        }
                    />

                    <Paragraph>
                        The past five years have been a combination of technology, humans
                        and design. Connecting development, design, data and
                        entrepreneurship to create digital products and services. Solving
                        complex problems with design is always the common thread. Whether
                        it’s experience, service, graphic or interactive design.
                        Previously worked at Van Lennep in Amsterdam as their digital
                        project manager and creative developer. This while finishing the
                        bachelor of Communication and Multimedia Design. Previously
                        freelance under my agency devign.it while studying in Amsterdam,
                        Seville and Aarhus. My interests vary from health/biotech, the
                        ethics of technology, working out handstands, to being partly a
                        cyborg. Right now I am looking for a next step in the tech scene
                        in Tel Aviv. One thing is certain: it will be something in between
                        humans and computers.
                    </Paragraph>

                    <Heading type="h6">Keep in touch</Heading>

                    <TextContainer>
                        <li>
                            <a
                                className="link external mail"
                                href="mailto:daan@devign.it"
                            >
                                Email
                            </a>
                        </li>
                        <li>
                            <a className="link external" href="tel:+972586895605">
                                Phone
                            </a>
                        </li>
                        <li>
                            <a
                                className="link external"
                                target="_blank"
                                href="https://www.linkedin.com/in/daanvanderzwaag/"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                className="link external"
                                target="_blank"
                                href="https://codepen.io/danoszz/"
                            >
                                Codepen
                            </a>
                        </li>
                        <li>
                            <a
                                className="link external"
                                target="_blank"
                                href="https://github.com/danoszz"
                            >
                                Github
                            </a>
                        </li>
                        <li>
                            <a
                                className="link external"
                                target="_blank"
                                href="https://www.behance.net/daanvanderzwaag"
                            >
                                Behance
                            </a>
                        </li>
                    </TextContainer>
                </div>
            </section>
        </Layout>
    );
};

export default RootIndex;

// export const pageQuery = graphql`
//     query AboutQuery {
//         contentfulAbout {
//             edges {
//                 node {
//                     introduction
//                     childContentfulAboutDescriptionRichTextNode {
//                         description
//                     }
//                     image {
//                         file {
//                             url
//                             fileName
//                             contentType
//                         }
//                     }
//                 }
//             }
//         }
//     }
// `;

// query AboutQuery {
//     allContentfulAbout {
//         edges {
//             node {
//                 id
//                 children {
//                     id
//                 }
//                 childContentfulAboutDescriptionRichTextNode {
//                     description
//                 }
//                 image {
//                     file {
//                         url
//                         fileName
//                         contentType
//                     }
//                 }
//             }
//         }
//     }
// }

// query AboutQuery {
//     contentfulAbout {
//         image {
//             file {
//                 url
//                 fileName
//                 contentType
//             }
//         }
//         introduction
//         description {
//             childContentfulRichText {
//                 html
//             }
//         }
//     }
// }
