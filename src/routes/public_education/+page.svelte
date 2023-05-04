<script>
  import Call from '$lib/components/call_2.svelte';
  import Image from '$lib/components/image.svelte';
  import { getFileUrl } from "$lib/getFileUrl.js"
  let placeholder = "3491bdaa-7f9a-42aa-8ad6-3292af72d65e.jpeg";
</script>

<div class="advocacy_container">
  <figure class="image_container image_border">
    <img class="image" src={getFileUrl(placeholder)} loading="lazy" />
  </figure>
  <div class="mb-6 is-flex is-flex-direction-column is-align-items-center">
    <div class="column is-8">
      <h1 class="py-4">Public Education</h1>
      <h5 class="block">Change 1 is a non-profit organization that seeks to raise awareness about the challenges faced by young adults who are aging out of foster care. As they transition to independent adulthood, these individuals often lack the support and resources that many of us take for granted. Change 1 aims to educate the public about these unique challenges and create a more supportive and inclusive society for all young adults, regardless of their background.</h5>
    </div>
    <div class="image_container column is-8 pw-2 m-0">
      <Image url={placeholder} />
    </div>
    <div class="column is-8">
      <h3 class="pb-2">Restorative Practices</h3>
      <p class="block mb-2">A major part of Change 1's mission is to improve the Child Welfare system within the US. Restorative Practices goes towards fulfilling that goal, providing a framework for individuals working in the Child Welfare system to foster peaceful and productive relationships with children in the system.</p>
      <p class="block mb-2">Change 1's founder, Courtney Jones, holds a biannual Restorative Practices workshop in Austin, TX. The workshop is geared towards professionals who work with children or young adults, succh as child welfare, education, law enforcement, and counselling. For those interested in participating, please check our events page for upcoming events or contact us directly via our email.</p>
    </div>
  </div>
  <Call />
</div>

<style lang="scss">
  .advocacy_container {
    .image_container:nth-child(1) {
      display: flex;
      align-items: center;
      height: 20vh;
      margin: 0;
      overflow: hidden;
      .image {
        object-fit: cover;
        height: 100%;
        min-width: 100%;
      }
    }
    h1 {
      text-align: center;
    }
    h5, p {
      text-align: justify;
    }
    .image_container:nth-child(2) {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }
  }
</style>