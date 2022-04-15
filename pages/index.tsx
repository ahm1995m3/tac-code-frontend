import type { NextPage } from "next";
import { useState } from "react";

import BlogHomeTemplate from "../PageTemplates/BlogHomeTemplate";
import Transition from "../PageTemplates/Utils/Transition";
import { usePosts } from "../Hooks/usePosts";
import { QueryClient, QueryClientProvider } from "react-query";

import SC_Button1 from "../styles/Basic/SC_Button1";
import { Group } from "@mantine/core";

const Home: NextPage = () => {
  const [page, setPage] = useState(1);

  const blockSize = 5;

  const { status, error, data } = usePosts(page, 5);

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      {data && status === "success" && (
        <>
          <BlogHomeTemplate allBlogData={data}>
            {!data.length && (
              <div style={{ height: "500px" }}>
                <h3>No More Results</h3>
              </div>
            )}
            <Group position="center" spacing="xl">
              <SC_Button1
                className="font-size-md"
                onClick={prevPage}
                disabled={page <= 1}
              >
                Prev
              </SC_Button1>

              <SC_Button1
                disabled={!data.length || data.length < blockSize}
                className="font-size-md"
                onClick={nextPage}
              >
                Next
              </SC_Button1>
            </Group>
          </BlogHomeTemplate>
        </>
      )}
      <Transition status={status} error={error} />
    </>
  );
};

export default Home;
