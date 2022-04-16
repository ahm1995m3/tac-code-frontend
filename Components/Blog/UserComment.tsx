import React from "react";
import getDifferenceInTimeFromToday from "../../Utils/Functions/getDifferenceInTime";

import { typeOfBlogCommentMeta } from "../../Types/blogContent";
import { Group, Space, Blockquote, Paper } from "@mantine/core";
type Props = {
  blogComments: typeOfBlogCommentMeta[];
};

const userCommentWrittenDate = (commentData: typeOfBlogCommentMeta) => {

  if (commentData.updatedAt) {
    return (
      <>
        <p>
          {" "}
          <span className="font-size-xs"> edited </span>{" "}
          {getDifferenceInTimeFromToday(commentData.updatedAt)} {" ago"}
        </p>
      </>
    );
  } else {
    return (
      <p>
        {" "}
        {getDifferenceInTimeFromToday(commentData.createdAt)} {" ago"}{" "}
      </p>
    );
  }
};

export default function UserComment({ blogComments }: Props) {
  return (
    <>
      {blogComments.map((blogCommentsData: typeOfBlogCommentMeta) => {
        return (
          <>
            <Paper
              key={blogCommentsData.id + "user comment container"}
              shadow="xs"
              radius="md"
              p="xl"
              withBorder
            >
              <Space h="md" />
              <Group
                key={blogCommentsData.id + "user comment content"}
                style={{ width: "100%" }}
              >
                <strong>
                  {" "}
                  <p className="text-color-blue">Some User</p>
                </strong>
                <p className="font-italic font-size-sm">
                  <strong> {userCommentWrittenDate(blogCommentsData)}</strong>
                </p>
              </Group>
              <Space h="md" />
              <Blockquote className="font-size-md ">
                {blogCommentsData.description}
              </Blockquote>
            </Paper>
            <Space h="xl" />
          </>
        );
      })}
    </>
  );
}
