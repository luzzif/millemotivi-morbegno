import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Grid } from "../grid";
import {
    InstagramPost,
    SquareContainer,
    ShowMoreContainer,
    PostOverlay,
    StyledLink,
    StyledIcon
} from "./styled";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { theme } from "../../styles/theme";
import useWindowSize from "@rehooks/window-size";

export const InstagramFeed = () => {
    let windowSize = { outerWidth: 0 };
    if (typeof window !== "undefined") {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        windowSize = useWindowSize();
    }

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

    const [postsAmount, setPostsAmount] = useState(0);

    useEffect(() => {
        const { innerWidth } = windowSize;
        let postsAmount = 6;
        if (innerWidth <= theme.breakpoints.md) {
            postsAmount = 4;
        }
        const rawPostsAmount = posts.length;
        postsAmount =
            rawPostsAmount < postsAmount ? rawPostsAmount : postsAmount;
        setPostsAmount(postsAmount);
    }, [posts, windowSize]);

    return (
        <Grid
            container
            xs={12}
            align="center"
            direction="column"
            id="our-socials"
        >
            <Grid item>
                <h1>Dai nostri social</h1>
            </Grid>
            <Grid item container xs={12}>
                {posts.slice(0, postsAmount).map(({ node: post }, index) => (
                    <Grid item key={post.id} xs={6} sm={3} md={2}>
                        {index < postsAmount - 1 && (
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
                        {index === postsAmount - 1 && (
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
            </Grid>
        </Grid>
    );
};
