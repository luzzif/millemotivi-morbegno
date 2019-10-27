import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Social } from "./styled";
import { Grid } from "../grid";

const socialInfo = {
    facebook: {
        icon: faFacebook,
        url: "https://www.facebook.com/millemotivi.it/",
        name: "Facebook"
    },
    instagram: {
        icon: faInstagram,
        url: "https://instagram.com/morbegno_millemotivi?igshid=c4q7ewup72w2",
        name: "Instagram"
    }
};

export const SocialLink = ({ type }) => {
    const socialSpecificInfo = socialInfo[type];
    return (
        <Social
            type={type}
            href={socialSpecificInfo.url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Grid container spacingRatio={2} align="center">
                <Grid item>
                    <FontAwesomeIcon icon={socialSpecificInfo.icon} />
                </Grid>
                <Grid item>{socialSpecificInfo.name}</Grid>
            </Grid>
        </Social>
    );
};

SocialLink.propTypes = {
    type: PropTypes.oneOf(["facebook", "instagram"])
};

SocialLink.defaultProps = {
    type: "light"
};
