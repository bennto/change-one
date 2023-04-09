import { getDirectusClient } from "$lib/directus.js";

export async function load() {
  const directus = await getDirectusClient();

  let response;
  try {
    response = await directus.items("events").readByQuery({
      fields: ["*"],
    });
  } catch (err) {
    console.log("error");
    return {
      status: 404,
    };
  }
  const events = response.data;
  return {
    events,
  };
}
