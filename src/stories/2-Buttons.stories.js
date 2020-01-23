import React from "react";
// import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';
import { ButtonWide } from "../components/Buttons";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
    title: "Devign Buttons",
    component: ButtonWide,
    decorators: [withKnobs],
};

export const Button = () => (
    <ButtonWide
        inverted={boolean("Inverted", false)}
        text={text("Label", "Download this item")}
        to="#"
        internal={boolean("Internal", false)}
    ></ButtonWide>
);
