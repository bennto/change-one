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
  response.data.map((post) => {
    const initialDate = new Date(post.date_created);
    let year = initialDate.getFullYear();
    let month = initialDate.getMonth();
    let day = initialDate.getDate();
    let endDate = month + "/" + day + "/" + year;
    post.date_created = endDate;
  });

  return {
    posts,
  };
}
