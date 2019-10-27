import React from "react";
import { Seo } from "../components/seo";
import { Hero } from "../components/hero";
import { Layout } from "../components/layout";
import { WhatWeCanDoForYou } from "../components/what-do-we-do";

const Index = () => (
    <Layout>
        <Seo title="Home" />
        <Hero />
        <WhatWeCanDoForYou />
    </Layout>
);

export default Index;
