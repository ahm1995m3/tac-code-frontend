import React from "react";
import { Container, Space, Paper, MediaQuery } from "@mantine/core";
import { NextSeo } from "next-seo";

type Props = {
  pageSEO: {
    title: string;
    description: string;
  };
  children: React.ReactNode;
};

function MainPageTemplate({ pageSEO, children }: Props) {
  return (
    <>
      <NextSeo title={pageSEO.title} description={pageSEO.title} />

      <section id="page-content">
        <Space h="xl" />

        <MediaQuery
          query="(max-width: 800px)"
          styles={{ paddingRight: "5px", paddingLeft: "5px" }}
        >
          <Container size={"lg"}>
            <MediaQuery query="(max-width: 600px)" styles={{ padding: "20px" }}>
              <Paper p="xl">{children}</Paper>
            </MediaQuery>
          </Container>
        </MediaQuery>

        <Space h={100} />
      </section>
    </>
  );
}

export default MainPageTemplate;
