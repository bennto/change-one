<script>
  import { getFileUrl } from '$lib/getFileUrl.js';
  import Card from '$lib/components/card.svelte';
  import EventError from '$lib/components/event_error.svelte';
  export let data;
  let events = data.events;
</script>

{#if events.length > 0}
  <div class="events_container">
    <h1 class="title">Upcoming Events</h1>
    <div class="card_container">
      {#each events as event}
        <Card class="event_card" event={event}></Card>
      {/each}
    </div>
  </div>
{:else}
  <EventError />
{/if}



<style lang="scss">
  .events_container {
    min-height: 100vh;
    .title {
      text-align: center;
      margin-top: 2em;
      margin-bottom: 48px;
      color: $primary-text;
    }
    .card_container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      grid-gap: 1rem;
      margin: 1em;
    }
  }
</style>
