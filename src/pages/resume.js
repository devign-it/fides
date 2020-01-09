import React from "react";
import Layout from "../components/Layout";

import "../styles/styles.scss";

import styled from "styled-components";

/*
  ResumeItem // resume--item
*/

const ResumeItem = styled.div`
    /*
      max-width: $magicNumber * 8;    
      @include margin-top(1);
      margin-right: $magicNumber / 4;
      @media screen and (min-width: $tablet-breakpoint) {
    */

    display: flex;
    max-width: calc(8rem * 8);
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;

    .resume--item__year {
        margin-top: 5px;
        margin-right: calc(8rem / 4);
        @media screen and (min-width: 800px) {
            margin-right: calc(8rem / 2);
        }
    }
`;

const TextContainerResume = styled.section`
    h3 {
        margin-top: $magicNumber / 2;
        max-width: $magicNumber * 8;
        margin-left: auto;
        margin-right: auto;
        @media screen and (min-width: $tablet-breakpoint) {
            margin-top: $magicNumber;
        }
    }

    h3 + p {
        margin-bottom: $magicNumber / 2;
    }
`;

const ContainerCol = styled.div`
    .container--col {
        // margin: 0 auto;
        blockquote,
        h2,
        p {
            max-width: $magicNumber * 8;
            margin-left: auto;
            margin-right: auto;
        }
    }
`;

export default class pageResume extends React.Component {
    render() {
        // const aboutPage = get(this, "props.data.contentfulAbout");

        return (
            <Layout location={this.props.location}>
                <TextContainerResume>
                    <ContainerCol>
                        <h3>Resume</h3>
                        <p>
                            Call it a resume or milestone timeline. See what kept me busy the past years. Or directly
                            <a rel="noopener noreferrer" href="../assets/files/daanvanderzwaag-resume_summer2018.pdf">
                                download
                            </a>
                            my resume as a PDF.
                        </p>
                        <ResumeItem>
                            <span className="resume--item__year">2018</span>
                            <p>
                                UX Engineer at{" "}
                                <a rel="noopener noreferrer" href="https://dav.network">
                                    DAV Foundation
                                </a>{" "}
                                in Tel Aviv creating decentralized transportation applications.
                            </p>
                        </ResumeItem>
                        <ResumeItem>
                            <span className="resume--item__year">2018</span>
                            <p>
                                Digital project manager and creative developer at{" "}
                                <a
                                    rel="noopener noreferrer"
                                    className="link external"
                                    target="_blank"
                                    href="https://www.vanlennep.eu/"
                                >
                                    Van Lennep
                                </a>
                                .
                            </p>
                        </ResumeItem>
                        <ResumeItem>
                            <span className="resume--item__year">2017</span>
                            <p>
                                Put a{" "}
                                <span className="link doPopup" rel="item__nfc">
                                    NFC chip in my left hand
                                </span>
                                . Can open electronic doors (of a Tesla if I've got one), get free coffee at the
                                university and scan my businesscard. Also started a research with an innovative Dutch
                                bank named <span className="blurryboy">NDA's signed</span> to research the possibilities
                                of 'paying by hand'.
                            </p>
                        </ResumeItem>
                        <ResumeItem>
                            <span className="resume--item__year">2017</span>
                            <p>
                                Member of the{" "}
                                <a
                                    className="link external"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://thenextweb.com/conference/t500"
                                >
                                    T500
                                </a>
                                . A shortlist with the most inspiring under 25’s across the fields of digital hustlers
                                from The Next Web.
                            </p>
                        </ResumeItem>
                        <ResumeItem>
                            <span className="resume--item__year">2017</span>
                            <p>
                                Moved to Denmark for being part of the Innovation and Entrepreneurship pre-master at the
                                Business Academy Aarhus, Denmark.
                            </p>
                        </ResumeItem>
                        <ResumeItem>
                            <span className="resume--item__year">2016</span>
                            <p>
                                Rebranded my first company DVDZ Design to Devign.it. Specializing in digital product
                                development and brand and experience design.
                            </p>
                        </ResumeItem>
                        <ResumeItem>
                            <span className="resume--item__year">2016</span>
                            <p>
                                Did an awesome internship as a Frontend Developer a{" "}
                                <a
                                    rel="noopener noreferrer"
                                    className="link external"
                                    target="_blank"
                                    href="https://www.lucasenmallee.nl/"
                                >
                                    Lucas & Mallee
                                </a>
                                , Amsterdam.
                            </p>
                        </ResumeItem>
                        <ResumeItem>
                            <span className="resume--item__year">2016</span>
                            <p>
                                Launched
                                <a
                                    rel="noopener noreferrer"
                                    className="link external"
                                    target="_blank"
                                    href="http://madebyrens.com/"
                                >
                                    Made By Rens
                                </a>
                                with Studio& and won some awards.
                            </p>
                        </ResumeItem>
                        <ResumeItem>
                            <span className="resume--item__year">2015</span>
                            <p>
                                Co-founded a startup called Releasium in B.Amsterdam. We got far, very far. But decided
                                to study Communication and Multimedia Design in Amsterdam instead and the startup-life
                                ended.
                            </p>
                        </ResumeItem>
                        <ResumeItem>
                            <span className="resume--item__year">2015</span>
                            <p>
                                <a
                                    rel="noopener noreferrer"
                                    className="link external"
                                    target="_blank"
                                    href="https://www.youtube.com/watch?v=WcaEJHYkhCg"
                                >
                                    Bierkini
                                </a>{" "}
                                one of the first Kickstarter project in the Netherlands. The goal was 150 euros, I
                                failed and drank the leftover beers.
                            </p>
                        </ResumeItem>
                        <ResumeItem>
                            <span className="resume--item__year">2014</span>
                            <p>
                                Started DVDZ.Design, my first company and the perfect job next to my study. Offering
                                website development and and almost anything that was digital. First by myself and later,
                                depending on the projects, we grew flexible to 4 freelancers.
                            </p>
                        </ResumeItem>
                        <ResumeItem>
                            <span className="resume--item__year">2014</span>
                            <p>Received a golden dot award with Catmatch; Tinder for asylum cats.</p>
                        </ResumeItem>
                    </ContainerCol>
                </TextContainerResume>
            </Layout>
        );
    }
}

// export const pageQuery = graphql`
//   query resumeQuery {
//     contentfulAbout {
//       image {
//         file {
//           url
//           fileName
//           contentType
//         }
//       }
//       introduction
//       description {
//         childContentfulRichText {
//           html
//         }
//       }
//     }
//   }
// `;
