import React from "react";
// import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';
import NavigationNew from "../components/NavigationNew";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
    title: "Navigation",
    component: NavigationNew,
    decorators: [withKnobs],
};

export const Main = () => (
    <NavigationNew
        isSticky={boolean("isSticky", true)}
        showHome={boolean("isSticky", true)}
        showGoBack={boolean("isSticky", true)}
        showResume={boolean("isSticky", true)}
    />
);
