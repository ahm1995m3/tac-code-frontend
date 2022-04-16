import { typeOfBlogData, typeOfBlogAuthorData } from "../Types/blogContent";
import UserComment from "../Components/Blog/UserComment";

import React from "react";
import MainPageTemplate from "./Core/MainPageTemplate";
import { Stack, Group, Avatar, Image, Space } from "@mantine/core";
import prettyDate from "../Utils/Functions/PrettyDate";

type Props = {
  blogData: typeOfBlogData[];
};

function PostTemplate({ blogData }: Props) {
  const blogOnDisplay: typeOfBlogData = Array.isArray(blogData)
    ? blogData[0]
    : blogData;

  return (
    <MainPageTemplate
      pageSEO={{
        title: blogOnDisplay.title,
        description: "great blog written by a cool person ",
      }}
    >
      <section className="blog-content">
        <Stack align="center" spacing="xs">
          <strong>
            <p className="font-size-xs text-color-blue">The Fake Blog</p>
          </strong>

          <h1 className="font-size-xl">{blogOnDisplay.title}</h1>
          <Group spacing="xs" className="authors">
            {blogOnDisplay.authors.map((authorData: typeOfBlogAuthorData) => {
              return (
                <>
                  <p className="font-size-xs text-color-light-grey">
                    {authorData.name}
                  </p>

                  <Avatar size="sm" src={authorData.avatar} />
                </>
              );
            })}
          </Group>

          <p className="font-size-xs text-color-light-grey font-italic">
            Last Updated:
            <strong>{prettyDate(blogOnDisplay.updatedAt)}</strong>
          </p>
          <Space h="md" />

          <Image
            id="featuredImage"
            radius="md"
            src="/assets/placeholder.JPG"
            alt="Random placeholder image"
          />
          <Space h="md" />

          <p className="font-double-spaced">{blogOnDisplay.description}</p>

          <Space h={50} />

          <h3 className="font-size-lg text-color-blue ">
            {" "}
            <strong>Comments </strong>
          </h3>
          <Space h="md" />

          <section className="blog-comment-section">
            <UserComment blogComments={blogOnDisplay.comments} />
          </section>
        </Stack>
      </section>
    </MainPageTemplate>
  );
}

export default PostTemplate;
