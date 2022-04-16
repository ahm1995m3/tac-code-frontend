import React, { ReactNode } from "react";
import { typeOfBlogData } from "../Types/blogContent";
import { Grid, Space } from "@mantine/core";

import MainPageTemplate from "./Core/MainPageTemplate";
import BlogCard from "../Components/Blog/BlogCard";

type Props = {
  allBlogData: typeOfBlogData[];
  children: ReactNode;
};

function BlogHomeTemplate({ allBlogData, children }: Props) {
  return (
    <>
      <MainPageTemplate
        pageSEO={{
          title: "The Fake Blog",
          description: "The awesome blog ",
        }}
      >
        <>
          <Space h={"xl"} />
          <h1 className="font-size-xl font-under-line text-color-blue">
            {" "}
            The Fake Blog
          </h1>
          <Space h={"xl"} />

          <Grid
            key={"blog-card-main-grid"}
            align={"stretch"}
            justify={"center"}
          >
            {allBlogData.map((blogData: typeOfBlogData) => (
              <Grid.Col sm={6} md={4} key={blogData.id + "container"}>
                <BlogCard key={blogData.id} blogData={blogData} />
              </Grid.Col>
            ))}
          </Grid>
          <Space h="xl" />
          <> {children}</>
          <Space h="xl" />
        </>
      </MainPageTemplate>
    </>
  );
}

export default BlogHomeTemplate;
