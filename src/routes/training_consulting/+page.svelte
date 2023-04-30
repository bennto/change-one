<script>
  import Call from '$lib/components/call_2.svelte';
  import Image from '$lib/components/image.svelte';
  import { getFileUrl } from "$lib/getFileUrl.js"
  let placeholder = "a9d7a8ec-35c0-4cd6-9f5e-cc5e5e8d1841.jpeg";
</script>

<div class="advocacy_container">
  <figure class="image_container image_border">
    <img class="image" src={getFileUrl(placeholder)} loading="lazy" />
  </figure>
  <div class="mb-6 is-flex is-flex-direction-column is-align-items-center">
    <div class="column is-8">
      <h1 class="py-4">Training & Consulting</h1>
      <h5 class="block mb-3">Change 1 advocates to raise the voices of those with lived experience in the foster care system by actively including them in the process of enhancing policy, research, and legislation.  Change 1 creates opportunities for youth and young adults to "be at the table" -- and to train them how to be at the table. It aims to influence the environment of systems, ensuring that youth and young adults are engaged as equal partners with system staff and leaders in policy development and procedural and practice changes.</h5>
      <h5 class="block mb-2">Fuchsia City Yellow Purugly Magmar Pokeball Furret Venomoth. Boulder Badge Spheal Gothitelle Dome Fossil Red Glameow Rhydon. Storm Badge Reshiram Pallet Town make it double Charmander Hitmonchan Herdier. Ut aliquip ex ea commodo consequat Rotom Croagunk Ash Ketchum Rampardos Tyrogue Farfetch'd.</h5>
      <div class="list">
        <h5>• Research</h5>
        <h5>• Policy</h5>
        <h5>• Legislature</h5>
      </div>
    </div>
    <div class="image_container column is-8 pw-2 m-0">
      <Image url={placeholder} />
    </div>
    <div class="column is-8">
      <h3 class="py-2">Research</h3>
      <p class="block mb-1">Change 1 advocates to raise the voices of those with lived experience in the foster care system by actively including them in the process of enhancing policy, research, and legislation.  Change 1 creates opportunities for youth and young adults to "be at the table" -- and to train them how to be at the table. It aims to influence the environment of systems, ensuring that youth and young adults are engaged as equal partners with system staff and leaders in policy development and procedural and practice changes.</p>
      <h3 class="py-2">Policy</h3>
      <p class="block mb-1">Change 1 advocates to raise the voices of those with lived experience in the foster care system by actively including them in the process of enhancing policy, research, and legislation.  Change 1 creates opportunities for youth and young adults to "be at the table" -- and to train them how to be at the table. It aims to influence the environment of systems, ensuring that youth and young adults are engaged as equal partners with system staff and leaders in policy development and procedural and practice changes.</p>
      <h3 class="py-2">Legislature</h3>
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