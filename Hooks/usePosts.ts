import { useQuery } from "react-query";
import axios from "axios";
import { typeOfBlogData } from "../Types/blogContent";

const url = `https://6144e843411c860017d256f0.mockapi.io/api/v1/posts?`;

const getBlogByPageResult = async (pageIndex: number, blockSize: number) => {
  const { data } = await axios.get(url);

  return data
    .sort(
      (a: typeOfBlogData, b: typeOfBlogData) =>
        Date.parse(b.createdAt) - Date.parse(a.createdAt)
    )
    .slice((pageIndex - 1) * blockSize, pageIndex * blockSize);
};

export const usePosts = (page: number, blockSize: number) => {
  return useQuery<typeOfBlogData[], Error>(
    ["blogs", { page }],
    () => getBlogByPageResult(page, blockSize),
    { keepPreviousData: true }
  );
};
