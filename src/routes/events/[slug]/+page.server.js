import { getDirectusClient } from "$lib/directus.js";
import { getDate } from "$lib/getDate.js";
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

  let event = response;

  // format date and time
  const startDate = new Date(event.start_date);
  const endDate = new Date(event.end_date);

  let dates = setDate(startDate, endDate);

  return {
    event,
    dates,
  };
}

function setDate(start, end) {
  let output = getDate(start);
  let start_date = output.outDate;
  let start_time = output.outTime;

  output = getDate(end);
  let end_date = output.outDate;
  let end_time = output.outTime;

  return { start_date, start_time, end_date, end_time };
}
