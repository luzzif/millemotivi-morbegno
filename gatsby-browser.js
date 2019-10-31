require("./static/index.css");

if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]', {
        easing: "easeInOutQuad",
        offset: 100
    });
}
