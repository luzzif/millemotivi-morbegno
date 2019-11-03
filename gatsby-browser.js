import React from "react";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./src/styles/toast/index.css";

if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]', {
        easing: "easeInOutQuad",
        offset: 100
    });
}

export const wrapRootElement = ({ element }) => {
    return (
        <>
            {element}
            <ToastContainer
                hideProgressBar
                className="toast-root"
                toastClassName="toast-container"
                bodyClassName="toast-body"
                position="bottom-right"
                closeButton={false}
                draggable={false}
                transition={Slide}
            />
        </>
    );
};
