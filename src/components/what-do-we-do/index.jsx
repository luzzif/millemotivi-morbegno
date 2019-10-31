import React from "react";
import { Card } from "./card";
import { Grid } from "../grid";
import { useStaticQuery, graphql } from "gatsby";
import { Root } from "./styled";

export const WhatWeCanDoForYou = () => {
    const {
        gadgetImage,
        wearingImage,
        digitalPrintingImage
    } = useStaticQuery(graphql`
        query {
            gadgetImage: file(relativePath: { eq: "gadget.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            digitalPrintingImage: file(
                relativePath: { eq: "digital-printing.jpg" }
            ) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            wearingImage: file(relativePath: { eq: "wearing.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    const cards = [
        {
            key: "gadget",
            title: "Gadget",
            description:
                "Cerchi la soluzione vincente per valorizzare la tua azienda? MorbegnoPrint fa al caso tuo! A disposizione per voi una vasta scelta di prodotti da personalizzare, dalla classica penna all'accessorio di ultima generazione.",
            image: gadgetImage.childImageSharp.fluid
        },
        {
            key: "wearing",
            title: "Vestiario",
            description:
                "Fai parte di una squadra sportiva, sei il titolare di un'azienda o semplicemente hai un evento da ricordare? Scegli il capo d'abbigliamento più adatto a te, la grafica che più ti piace e il gioco è fatto.",
            image: wearingImage.childImageSharp.fluid
        },
        {
            key: "digital-print",
            title: "Stampa digitale",
            description:
                "Dalla stampa di manifesti, banner ed etichette, alla personalizzazione di vetrine, insegne e automezzi. Questi sono solo alcuni dei servizi che offriamo; vi seguiamo dalla realizzazione della grafica alla scelta del supporto più adatto a te.",
            image: digitalPrintingImage.childImageSharp.fluid
        }
    ];

    return (
        <Root
            id="what-do-we-do"
            container
            xs={12}
            align="center"
            direction="column"
            spacingRatio={4}
        >
            <Grid item>
                <h1>Cosa facciamo</h1>
            </Grid>
            <Grid item container spacingRatio={8} xs={11} md={10} lg={8}>
                {cards.map(card => (
                    <Grid item xs={12} sm={4} key={card.key}>
                        <Card
                            title={card.title}
                            description={card.description}
                            image={card.image}
                        />
                    </Grid>
                ))}
            </Grid>
        </Root>
    );
};
