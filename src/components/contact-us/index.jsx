import React, { useCallback, useState, useEffect } from "react";
import { Grid } from "../grid";
import { Input, StyledLink, TextArea, SubmitButton, TextGrid } from "./styled";
import emailValidator from "email-validator";

export const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const [submitEnabled, setSubmitEnable] = useState("");

    const handleSubmit = useCallback(() => {
        // TODO: finalize submission logic.
        console.log("clicked");
    }, []);

    const handleNameChange = event => {
        setName(event.target.value);
    };

    const handleEmailChange = event => {
        setEmail(event.target.value);
    };

    const handleTextChange = event => {
        setText(event.target.value);
    };

    useEffect(() => {
        setSubmitEnable(
            name && email && emailValidator.validate(email) && text
        );
    }, [email, name, text]);

    return (
        <Grid
            id="contact-us"
            container
            xs={12}
            align="center"
            direction="column"
            spacingRatio={4}
        >
            <Grid item>
                <h1>Contattaci</h1>
            </Grid>
            <TextGrid item xs={11} md={10} lg={6} justify="center">
                Per maggiori informazioni o per avere un preventivo,{" "}
                <StyledLink href="tel:+390342601203">
                    chiamaci al +39 0342 601203
                </StyledLink>{" "}
                o riempi il modulo qui sotto indicandoci cosa desideri:
                provvederemo a ricontattarti.
            </TextGrid>
            <Grid
                item
                container
                direction="column"
                align="center"
                spacingRatio={8}
                xs={11}
                md={10}
                lg={6}
            >
                <Grid item xs={12}>
                    <Input
                        type="text"
                        placeholder="Nome"
                        onChange={handleNameChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Input
                        type="text"
                        placeholder="E-mail"
                        onChange={handleEmailChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextArea
                        placeholder="Cosa desideri?"
                        onChange={handleTextChange}
                    />
                </Grid>
                <Grid item>
                    <SubmitButton
                        disabled={!submitEnabled}
                        onClick={handleSubmit}
                    >
                        Invia
                    </SubmitButton>
                </Grid>
            </Grid>
        </Grid>
    );
};
