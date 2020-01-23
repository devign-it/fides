import React from "react";
// import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';
import { ButtonWide } from "../components/Buttons";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
    title: "Buttons",
    component: ButtonWide,
    decorators: [withKnobs],
    parameters: {
        backgrounds: [
            { name: "Black", value: "#000", default: true },
            { name: "Dark", value: "#0d0d0d" },
            { name: "Light", value: "#f9f9f9" },
            { name: "White", value: "#ffffff" },
            { name: "Green", value: "#5f0" },
            { name: "Blue", value: "#0000ED" },
        ],
    },
};

export const Wide = () => (
    <ButtonWide
        inverted={boolean("Inverted", false)}
        internal={boolean("Internal", false)}
        text={text("Label", "Download this item")}
        to="#"
    ></ButtonWide>
);
