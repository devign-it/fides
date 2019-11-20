export const vars = {
    ratio: 1.68,
    delayMain: 168,
    delay1: 168 * 2,
};

export const delays = {
    delayTotal: `${vars.delay1}ms * 5`,
};

export const animations = {
    fadeInBottom: `${vars.delayTotal} ${vars.tSmoothOne} ${vars.tSmoothOne} forwards`,
};

export const easings = {
    transitionSmooth: "cubic-bezier(0.86, 0, 0.07, 1)",
    tSmoothOne: "cubic-bezier(0.86, 0, 0.24, 1)",
    tSmoothTwo: "cubic-bezier(0.43, 0, 0.12, 0.5)",
};

export const sizes = {
    magicNumber: "60px",
    columnWidthFlex: "100vw / 12",
};

export const colors = {
    black: "#000000",
    white: "#ffffff",
    blue: "#0000ED",
};

export const breakpoints = {
    smallPhoneBreakpoint: "22em",
    phabletBreakpoint: "35em",
    tabletBreakpoint: "48em",
    desktopBreakpoint: "64em",
    largeDesktopBreakpoint: "80em",
};
