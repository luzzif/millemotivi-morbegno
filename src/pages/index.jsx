import React from "react";
import { Seo } from "../components/seo";
import { Hero } from "../components/hero";
import { Layout } from "../components/layout";
import { WhatWeCanDoForYou } from "../components/what-do-we-do";
import { InstagramFeed } from "../components/insatgram-feed";

const Index = () => (
    <Layout>
        <Seo />
        <Hero />
        <WhatWeCanDoForYou />
        <InstagramFeed />
    </Layout>
);

export default Index;
