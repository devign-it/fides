import React from "react";
/* TODO: source from Img */
import Img from "gatsby-image";

import { AboutPicture } from "./styles";

const AboutImage = ({ imageSource, textSource }) => (
    <AboutPicture>
        <Img src={imageSource} alt="Profile picture of Daan van der Zwaag" />
        <blockquote>{textSource}</blockquote>
    </AboutPicture>
);

export default AboutImage;
