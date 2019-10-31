import React from "react";
import { Seo } from "../components/seo";
import { Hero } from "../components/hero";
import { Layout } from "../components/layout";
import { WhatWeCanDoForYou } from "../components/what-do-we-do";
import { InstagramFeed } from "../components/instagram-feed";
import { ContactUs } from "../components/contact-us";
import { Section } from "../components/section";

const Index = () => (
    <Layout>
        <Seo />
        <Hero />
        <Section>
            <WhatWeCanDoForYou />
        </Section>
        <Section>
            <ContactUs />
        </Section>
        <Section>
            <InstagramFeed />
        </Section>
    </Layout>
);

export default Index;
