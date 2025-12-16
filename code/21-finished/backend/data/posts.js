import * as fs from "node:fs/promises";

export const getStoredPosts = async () => {
  const rawFileContent = await fs.readFile("posts.json", { encoding: "utf-8" });
  const data = JSON.parse(rawFileContent);
  const storedPosts = data.posts ?? [];
  return storedPosts;
};

export const storePosts = (posts) => {
  return fs.writeFile("posts.json", JSON.stringify({ posts: posts || [] }));
};
