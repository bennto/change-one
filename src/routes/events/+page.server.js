import { getDirectusClient } from "$lib/directus.js";
import { getDate } from "$lib/getDate.js";

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
  let events = response.data;
  response.data.map((event) => {
    const startDate = new Date(event.start_date);
    let output = getDate(startDate);
    event.start_date = output;
  });

  return {
    events,
  };
}
