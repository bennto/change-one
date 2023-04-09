import { getDirectusClient } from "$lib/directus.js";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const id = params.slug;
  const directus = await getDirectusClient();

  const response = await directus.items("events").readOne(id, {
    fields: ["*"],
  });
  if (!response) {
    console.log("error");
    throw error(404, {
      message: JSON.stringify(params.slug),
    });
  }

  return {
    event: {
      id: response.id,
      thumbnail: response.Event_thumbnail,
      name: response.Event_name,
      description: response.Event_description,
      date: response.Event_date,
      address: response.Event_address,
      csz: response.Event_citystatezip,
      url: response.Event_url,
      slug: response.slug,
    },
  };
}
