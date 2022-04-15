import React from "react";
import { useRouter } from "next/router";

import PostTemplate from "../../PageTemplates/PostTemplate";
import Transition from "../../PageTemplates/Utils/Transition";
import { useSinglePosts } from "../../Hooks/useSinglePost";

export default function PostMaster() {
  const router = useRouter();
  const { postid } = router.query;

  const { status, error, data } = useSinglePosts(postid);

  return (
    <>
      <Transition status={status} error={error} />
      {data && status === "success" && data !== undefined && (
        <PostTemplate blogData={data} />
      )}
    </>
  );
}
