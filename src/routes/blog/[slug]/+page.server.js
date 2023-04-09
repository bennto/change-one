import { getDirectusClient } from "$lib/directus.js";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const slug = params.slug;

  const directus = await getDirectusClient();

  let response;
  try {
    response = await directus.items("blog_posts").readByQuery({
      filter: {
        slug: {
          _eq: slug,
        },
      },
    });
  } catch (err) {
    console.log("slug error");
    return {
      status: 404,
    };
  }
  let post = response.data[0];
  let uuid = post.user_created;
  try {
    response = await directus.users.readByQuery({
      filter: {
        id: {
          _eq: uuid,
        },
      },
    });
  } catch (err) {
    console.log("slug error");
    return {
      status: 404,
    };
  }
  let author = response.data[0];
  return {
    post,
    author,
  };
}
