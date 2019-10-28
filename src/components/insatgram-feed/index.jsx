import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Grid } from "../grid";
import {
    InstagramPost,
    SquareContainer,
    FeedWrapper,
    ShowMoreContainer,
    PostOverlay,
    StyledLink,
    StyledIcon
} from "./styled";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export const InstagramFeed = () => {
    const posts = useStaticQuery(graphql`
        query {
            allInstaNode(sort: { order: DESC, fields: timestamp }) {
                edges {
                    node {
                        id
                        original
                        caption
                    }
                }
            }
        }
    `).allInstaNode.edges;

    return (
        <Grid container xs={12} align="center" direction="column">
            <Grid item>
                <h1>Dai nostri social</h1>
            </Grid>
            <FeedWrapper item container xs={12}>
                {posts.slice(0, 6).map(({ node: post }, index) => (
                    <Grid item key={post.id} xs={6} sm={3} md={2}>
                        {index < 5 && (
                            <SquareContainer>
                                <InstagramPost src={post.original} />
                                <PostOverlay
                                    container
                                    justify="center"
                                    align="center"
                                >
                                    <Grid item>
                                        <StyledLink
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={`https://www.instagram.com/p/${post.id}`}
                                        >
                                            <Grid
                                                container
                                                direction="column"
                                                align="center"
                                                spacingRatio={4}
                                            >
                                                <Grid item>
                                                    <StyledIcon
                                                        icon={faExternalLinkAlt}
                                                    />
                                                </Grid>
                                                <Grid item>Apri</Grid>
                                            </Grid>
                                        </StyledLink>
                                    </Grid>
                                </PostOverlay>
                            </SquareContainer>
                        )}
                        {index === 5 && (
                            <SquareContainer>
                                <ShowMoreContainer
                                    container
                                    justify="center"
                                    align="center"
                                >
                                    <StyledLink
                                        href="https://instagram.com/morbegno_millemotivi?igshid=c4q7ewup72w2"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Mostra tutti
                                    </StyledLink>
                                </ShowMoreContainer>
                            </SquareContainer>
                        )}
                    </Grid>
                ))}
            </FeedWrapper>
        </Grid>
    );
};
