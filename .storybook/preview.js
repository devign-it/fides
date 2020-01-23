import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { action } from "@storybook/addon-actions";

// simple layout component that generates a mocked Global Style in Styled components
// import GlobalStyle from "../src/components/GlobalStyle";

// system wide decorator that all of the stories will use
addParameters({
    options: { panelPosition: "bottom" },
    backgrounds: [
        { name: "Black", value: "#000", default: true },
        { name: "Dark", value: "#0d0d0d" },
        { name: "Light", value: "#f9f9f9" },
        { name: "White", value: "#ffffff" },
        { name: "Green", value: "#5f0" },
        { name: "Blue", value: "#0000ED" },
    ],
    viewport: {
        viewports: [
            {
                name: "Testing breakpoint",
                styles: {
                    width: `600px`,
                    height: "768px",
                },
            },
        ],
    },
});

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
    enqueue: () => {},
    hovering: () => {},
};

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = "";

// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = (pathname) => {
    action("NavigateTo:")(pathname);
};

// system wide decorator to allow the addon to be used
addDecorator(withA11y);
//
// system wide decorator that will inject the global style component into Storybook
// the story function in conjunction with the children prop will make so that all the "descendants"
// will inherit the styles
addDecorator((story) => (
    <>
        {/* <GlobalStyle /> */}
        {story()}
    </>
));
