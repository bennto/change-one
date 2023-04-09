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
      <h1 class="py-4">Support Services</h1>
      <h5 class="block">Change 1 provides support services to aid foster alumni in their transition from foster care to independence. Our goal is to provide alumni with the resources and support they need to succeed in all aspects of life. Whether it be help with education, housing, employment, or just someone to talk to, we are here to help.</h5>
      <h5 class="block">The specific services we offer include:</h5>
    </div>
    <div class="image_container column is-8 pw-2 m-0">
      <Image url={placeholder} />
    </div>
    <div class="column is-8">
      <p class="block">Change 1 advocates to raise the voices of those with lived experience in the foster care system by actively including them in the process of enhancing policy, research, and legislation.  Change 1 creates opportunities for youth and young adults to "be at the table" -- and to train them how to be at the table. It aims to influence the environment of systems, ensuring that youth and young adults are engaged as equal partners with system staff and leaders in policy development and procedural and practice changes.</p>
    </div>
    <div class="column is-8">
      <p class="block">Change 1 advocates to raise the voices of those with lived experience in the foster care system by actively including them in the process of enhancing policy, research, and legislation.  Change 1 creates opportunities for youth and young adults to "be at the table" -- and to train them how to be at the table. It aims to influence the environment of systems, ensuring that youth and young adults are engaged as equal partners with system staff and leaders in policy development and procedural and practice changes.</p>
    </div>
    <div class="column is-8">
      <p class="block">Change 1 advocates to raise the voices of those with lived experience in the foster care system by actively including them in the process of enhancing policy, research, and legislation.  Change 1 creates opportunities for youth and young adults to "be at the table" -- and to train them how to be at the table. It aims to influence the environment of systems, ensuring that youth and young adults are engaged as equal partners with system staff and leaders in policy development and procedural and practice changes.</p>
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