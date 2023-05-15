<script>
  import { page } from '$app/stores';
  import { getFileUrl } from '$lib/getFileUrl.js';
  import Button from '$lib/components/button.svelte'
  
  export let data;
  let event = data.event;
  let dates = data.dates;
</script>

<div class="event_container">
  <div class="image_container image_border">
    <img class="event_image" src={getFileUrl(event.thumbnail)} loading="lazy" />
  </div>
  <div class="grid_container">
    <h4 class="event_name">{event.name}</h4>
    <hr />
    <div class="is-flex is-flex-row is-justify-content-space-evenly is-flex-wrap-wrap">
      <div>
        <h5 class="event_date static">Start</h5>
        <h5 class="event_date">{dates.start_date}</h5>
        <h5 class="event_date">{dates.start_time}</h5>
      </div>
      <div>
        <h5 class="event_date static">End</h5>
        <h5 class="event_date">{dates.end_date}</h5>
        <h5 class="event_date">{dates.end_time}</h5>
      </div>
    </div>
    <div>
      <h5 class="event_location static">Location</h5>
      <div>
        <h5 class="event_location">{event.address}</h5>
        <h5 class="event_location">{event.csz}</h5>
      </div>
    </div>
    <div class="event_body">
      <h5 class="event_description static">Event Description</h5>
      <div class="passage">
        {@html event.description}
      </div>
    </div>
      <div class="event_button">
        <Button class="events_item button" address={event.url} text={'Attend This Event →'}></Button>
      </div>
  </div>
</div>

<style lang="scss">
  .image_container {
    display: flex;
    align-items: center;
    max-width: 100vw;
    max-height: 400px;
    overflow: hidden;
    .event_image {
      width: 100%;
    }
  }
  .grid_container {
    display: flex;
    flex-direction: column;
    background-color: rgb(224, 210, 173);
    max-width: 56vw;
    margin: 24px auto;
    padding: 1em;
    gap: 24px 0; 
    border-radius: 0.3em;
    hr {
      border-color: $border-color;
      margin: 0.3em 0;
      opacity: 0.4;
    }
    .event_name {
      text-align: center;
    }
    .event_date, .event_location {
      text-align: center;
    }
    .event_body {
      .event_description {
        text-align: left;
        margin-bottom: 1em;
      }
      .passage {
          :global(p) {
            margin-bottom: 8px;
          }
        }
    }
    .event_button {
      margin: 16px auto;
    }
    .static {
      text-align: center;
      font-weight: 700;
    }
  }
</style>