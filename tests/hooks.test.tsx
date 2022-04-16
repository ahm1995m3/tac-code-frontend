import { renderHook } from "@testing-library/react-hooks";

import { useSinglePosts } from "../Hooks/useSinglePost";
import { usePosts } from "../Hooks/usePosts";
import { createWrapper } from "./utils";

test("testing useSinglePost", async () => {
  const { result, waitFor } = renderHook(() => useSinglePosts("5"), {
    wrapper: createWrapper(),
  });

  await waitFor(() => result.current.isSuccess);

  expect(result.current.data).toBeDefined();
  expect(result.current.data[0].id).toBe("5");
});

test("testing usePosts", async () => {
  const { result, waitFor } = renderHook(() => usePosts(1, 5), {
    wrapper: createWrapper(),
  });

  await waitFor(() => result.current.isSuccess);

  expect(result.current.data).toBeDefined();
  expect(result.current.data.length).toBe(5);
});
