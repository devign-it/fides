const favicon = document.createElement("link");

link.setAttribute("rel", "favicon icon");
head.appendChild(link);

// Listen media change
window.matchMedia("(prefers-color-scheme:light)").addListener((e) => {
    if (!e.matches) {
        return;
    }
    // Apply new favicon source
    const source = document.querySelector('link[rel*="icon",media="(prefers-color-scheme:light)"]');

    if (source === null) {
        return;
    }

    link.setAttribute("type", source.type);
    link.setAttribute("href", source.href);
});
