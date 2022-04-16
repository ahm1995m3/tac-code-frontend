import React from "react";
import { typeOfBlogData, typeOfBlogAuthorData } from "../../Types/blogContent";
import SC_BlogCard from "../../styles/Blog/SC_BlogCard";
import SC_Button2 from "../../styles/Basic/SC_Button2";
import Link from "next/link";
import { Card, Image, Divider, Group, Stack, Avatar } from "@mantine/core";
import prettyDate from "../../Utils/Functions/PrettyDate";

type Props = {
  blogData: typeOfBlogData;
};

export default function BlogCard({ blogData }: Props) {
  return (
    <SC_BlogCard key={blogData.id} className="blog-card">
      <Card shadow="sm" p="lg">
        <Card.Section key={blogData.id + "featured image"}>
          <Image
            key={blogData.id}
            src="https://picsum.photos/400/300"
            alt="placeholder"
          />
        </Card.Section>

        <Stack className="blog-meta-content" justify="space-between">
          <Stack justify={"flex-start"} spacing="xs" style={{ marginTop: 10 }}>
            <h3 className="blog-title">
              <strong className="font-size-md"> {blogData.title} </strong>
            </h3>

            <Group key={"blog-author-main"} spacing="xs">
              {blogData.authors.map((authorData: typeOfBlogAuthorData) => {
                return (
                  <>
                    <p className="font-size-xs ">{authorData.name}</p>
                    <Avatar size="xs" src={authorData.avatar} />
                  </>
                );
              })}
            </Group>
            <p className="font-size-sm text-color-blue">
              {prettyDate(blogData.createdAt)}
            </p>

            <Divider></Divider>
            <p
              key={blogData.id + "describe"}
              className="font-size-sm blog-card-post-description"
            >
              {blogData.description}
            </p>
          </Stack>
          <Link
            key={blogData.id + "link  to blog post"}
            href={`/post/${encodeURIComponent(blogData.id)}`}
          >
            <SC_Button2 name={"Read More"} className="font-size-md">
              Read More
            </SC_Button2>
          </Link>
        </Stack>
      </Card>
    </SC_BlogCard>
  );
}
