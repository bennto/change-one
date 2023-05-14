<script>
  import Call from '$lib/components/call_2.svelte';
  import Image from '$lib/components/image.svelte';
  import { getFileUrl } from "$lib/getFileUrl.js"
  let banner = "a9d7a8ec-35c0-4cd6-9f5e-cc5e5e8d1841.jpeg";
  let hero = "a9d7a8ec-35c0-4cd6-9f5e-cc5e5e8d1841.jpeg";
</script>

<div class="advocacy_container">
  <figure class="image_container image_border">
    <img class="image" src={getFileUrl(banner)} loading="lazy" />
  </figure>
  <div class="mb-6 is-flex is-flex-direction-column is-align-items-center">
    <div class="column is-8">
      <h1 class="py-4">Advocacy</h1>
      <h5 class="block mb-3">Change 1 advocates to raise the voices of those with lived experience in the foster care system by actively including them in the process of enhancing policy, research, and legislation. We enable youths and young adults to "be at the table" and advocate for their causes. We hope to ensure that youth and young adults are engaged as equal partners with system staff and leaders in policy development in creating procedural and practice changes that will influence the next generations.</h5>
    </div>
    <div class="image_container column is-8 pw-2 m-0">
      <Image url={hero} />
    </div>
    <div class="column is-8">
      <h3 class="py-2">Testimonials</h3>
      <p class="block mb-1">A major part of Change 1's advocacy work involves testifying before Congress to advocate for the passing or rejecting of certain bills. In doing this, we enable people who are actually impacted by these bills to have a say in the institutions affecting their lives.</p>
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