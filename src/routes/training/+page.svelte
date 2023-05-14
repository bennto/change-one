<script>
  import Call from '$lib/components/call_2.svelte';
  import Image from '$lib/components/image.svelte';
  import { getFileUrl } from "$lib/getFileUrl.js"
  let banner = "4ae57dcd-e401-4efa-bf96-c4ac75023064.jpg";
  let hero = "fc35c1a1-d0ec-469b-a534-d6c17d1c9d8a.avif";
</script>

<div class="advocacy_container">
  <figure class="image_container image_border">
    <img class="image" src={getFileUrl(banner)} loading="lazy" />
  </figure>
  <div class="mb-6 is-flex is-flex-direction-column is-align-items-center">
    <div class="column is-8">
      <h1 class="py-4">Training</h1>
      <h5 class="block mb-3">A major part of Change 1's initiative is to help emancipated youths gain employable skills and thrive within the workforce. Several things we have historically done to achieve this include:</h5>
      <div class="list">
        <h5>• Hiring trained youths and young adults to conduct a pilot survey of younger youths in foster care</h5>
        <h5>• Disbursing $275,000 in emergency COVID-19 relief funding to recently transitioned young adults</h5>
        <h5>• Partnering with Travis County in 2022 to provide summer employment to youths in foster care</h5>
      </div>
    </div>
    <div class="image_container column is-8 pw-2 m-0">
      <Image url={hero} />
    </div>
    <div class="column is-8">
      <h3 class="py-2">Summer Youth Employment Program</h3>
      <p class="block mb-1">Change 1 advocates to raise the voices of those with lived experience in the foster care system by actively including them in the process of enhancing policy, research, and legislation.  Change 1 creates opportunities for youth and young adults to "be at the table" -- and to train them how to be at the table. It aims to influence the environment of systems, ensuring that youth and young adults are engaged as equal partners with system staff and leaders in policy development and procedural and practice changes.</p>
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