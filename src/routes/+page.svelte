<script>
  import Button from '$lib/components/button.svelte';
  import Card from '$lib/components/card.svelte';
  import Call from '$lib/components/call.svelte';
  import Image from '$lib/components/image.svelte';
  import { getFileUrl } from '$lib/getFileUrl';

  let changeFamily = "3491bdaa-7f9a-42aa-8ad6-3292af72d65e.jpeg";
  let utChapter = "61ce10ee-d469-454f-8e3b-4c549b79ffea.jpg";
  let placeholder = "2ef8bd5b-3e86-4af0-b92b-f60782eb6699.jpeg";
  
  export let data;
  let events = data.events;
</script>

<!-- Home Page -->
<main class="main_container">
  <div class="hero section p-0 hero border">
    <Image url={changeFamily} alt="Change One and volunteers together at an event"/>
    <div class="right_container my-auto p-5">
      <h1 class="align_title py-4">Change One Mind. Change 1 Life.</h1>
      <h5 class="align_sub pb-4">We are a nonprofit organization dedicated to advocating for and building community with post-foster care alumni.</h5>
      <Button address={"/about"} text={'About our cause'}></Button>
    </div>
  </div>
  <div class="video section border is-flex is-flex-direction-column is-align-items-center">
    <h3 class="center_text pb-2">We Are Change 1</h3>
    <iframe width="532" height="300" src="https://www.youtube.com/embed/gNz7eNAwvic" title="Change One Mind Change One Life" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  <div class="section events border">
    <div class="events_head">
      <h3 class="events_item events_title">Upcoming Events</h3>
      <p class="events_item events_body">We host a number of events throughout the year. No matter who you are, don’t hesitate to come out and meet the community!</p>
      <div class="events_button">
        <Button class="events_item button" address={"/events"} text={'More events →'}></Button>
      </div>
    </div>
    <div class="events_list">
      {#each events.slice(0, 3) as event}
        <Card class="event_card" event={event}></Card>
      {/each}
    </div>
  </div>
  <div class="section p-0 chapter border">
    <div class="image_container image_border">
      <img class="image" src={getFileUrl(utChapter)} alt={"Courtney and Change 1's UT Austin members at Basil Thai"} loading="lazy" />
    </div>
    <div class="text_container">
      <h2>UT Austin Chapter</h2>
      <p>We’re also a student organization at the University of Texas at Austin! If you’re a student looking to make a difference, we’d love to have you!</p>
      <div class="chapter_button">
        <Button address={"/join"} text={'Learn more →'} />
      </div>
    </div>
  </div>
  <Call />
</main>

<style lang="scss">
  .main_container {
    .section {
      &.hero {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
        grid-gap: 0 1rem;
      }
      &.events {
          padding: 2rem 1rem 3rem 1rem;
          .events_head {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin-bottom: 2rem;
            .events_item {
              margin-right: 1rem;
            }
            .events_title {
              margin-right: 2rem;
            }
            .events_body {
              max-width: 24em;
            }
            :not(.events_title) {
              margin-top: 1.2rem;
            }
          }
        .events_list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          grid-gap: 1rem;
        }
      }
      &.chapter {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(342px, 1fr));
        grid-gap: 0 1rem;
        height: 80vh;
        .image_container {
          display: flex;
          justify-content: center;
          overflow: hidden;
          .image {
            object-fit: cover;
            min-height: 100%;
            min-width: 100%;
          }
        }
        .text_container {
          padding: 1em;
          align-self: center;
          * {
            margin-bottom: 1rem;
          }
        }
      }
      &.call {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 1em;
        max-width: 100%;
        max-height: 80vh;
        overflow: hidden;
        .text {
          grid-column: span 1;
          margin: 2em 0 0 2em;
          .title {
            margin-bottom: 0.6em;
          }
          .sub_section {
            display: grid;
            grid-template-columns: repeat(auto-fit,minmax(320px, 1fr));
            gap: 1em;
            .call_buttons > .button_container {
                margin-bottom: 1em;
            }
          }
        }
        .image_placeholder {
          height: 100%;
          overflow: hidden;
          .image {
            object-fit: cover;
            max-width: 120%;
            min-height: 100%;
          }
        }
        @media screen and (max-width: 420px) {
          .text {
            grid-column: span 2;
            margin: 1em;
          }
          .image_placeholder {
            display: none;
          }
        }
      }
    }
  }
</style>