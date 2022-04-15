import axios from "axios";
import { useQuery } from "react-query";
import { typeOfBlogData } from "../Types/blogContent";

const getSingleBlogPost = async (postID: string | string[] | undefined) => {
  if (typeof postID === "string") {
    const url = `https://6144e843411c860017d256f0.mockapi.io/api/v1/posts?id=${postID}&limit=1&page=1`;
    const { data } = await axios.get(url);

    return data;
  }
};
export const useSinglePosts = (postID: string | string[] | undefined) => {
  return useQuery<typeOfBlogData[], Error>(
    ["blogs", { postID }],
    () => getSingleBlogPost(postID),
    { keepPreviousData: true }
  );
};
