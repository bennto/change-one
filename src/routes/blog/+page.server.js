import { getDirectusClient } from "../../lib/directus.js";

export async function load() {
  const directus = await getDirectusClient();

  let response;
  try {
    response = await directus.items("blog_posts").readByQuery({
      fields: ["*"],
    });
  } catch (err) {
    console.log("error");
    return {
      status: 404,
    };
  }
  const posts = response.data;

  return {
    posts,
  };
}
