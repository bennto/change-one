<script>
  import Button from '$lib/components/button.svelte';
  import Image from '$lib/components/image.svelte';
  import { getFileUrl } from "$lib/getFileUrl.js"
  import Icon from "$lib/assets/placeholder_icon.jpg";
  let placeholder = "3491bdaa-7f9a-42aa-8ad6-3292af72d65e.jpeg";
</script>

<div class="advocacy_container">
  <figure class="image_container image_border">
    <img class="image" src={getFileUrl(placeholder)} loading="lazy" alt="placeholder" />
  </figure>
  <div class="mb-6 is-flex is-flex-direction-column is-align-items-center">
    <div class="column is-8">
      <h1 class="py-4">Support Services</h1>
      <h5 class="block">Change 1 provides support services to aid foster alumni in their transition from foster care to independence. Our goal is to provide alumni with the resources and support they need to succeed in all aspects of life. Whether it be help with education, housing, employment, or just someone to talk to, we are here to help.</h5>
    </div>
    <div class="card_container column is-8">
      <div class="custom_card">
        <img class="image" src={Icon} loading="lazy" alt="placeholder icon" />
        <h5>Job Security</h5>
      </div>
      <div class="custom_card">
        <img class="image" src={Icon} loading="lazy" alt="placeholder icon" />
        <h5>Health</h5>
      </div>
      <div class="custom_card">
        <img class="image" src={Icon} loading="lazy" alt="placeholder icon" />
        <h5>Food Insecurity</h5>
      </div>
      <div class="custom_card">
        <img class="image" src={Icon} loading="lazy" alt="placeholder icon" />
        <h5>Banking</h5>
      </div>
      <div class="custom_card">
        <img class="image" src={Icon} loading="lazy" alt="placeholder icon" />
        <h5>Housing</h5>
      </div>
      <div class="custom_card">
        <img class="image" src={Icon} loading="lazy" alt="placeholder icon" />
        <h5>Education</h5>
      </div>
    </div>
    <h2 class="pt-4">Our Process</h2>
    <div class="column is-8 mb-4">
      <h3 class="pb-2">Intake</h3>
      <p class="block mb-2">Change 1 advocates to raise the voices of those with lived experience in the foster care system by actively including them in the process of enhancing policy, research, and legislation.  Change 1 creates opportunities for youth and young adults to "be at the table" -- and to train them how to be at the table.</p>
      <h3 class="pb-2">Documentation</h3>
      <p class="block mb-2">Change 1 advocates to raise the voices of those with lived experience in the foster care system by actively including them in the process of enhancing policy, research, and legislation.  Change 1 creates opportunities for youth and young adults to "be at the table" -- and to train them how to be at the table.</p>
      <h3 class="pb-2">Assessment</h3>
      <p class="block mb-2">Change 1 advocates to raise the voices of those with lived experience in the foster care system by actively including them in the process of enhancing policy, research, and legislation.  Change 1 creates opportunities for youth and young adults to "be at the table" -- and to train them how to be at the table.</p>
      <h3 class="pb-2">Assignment</h3>
      <p class="block mb-2">Change 1 advocates to raise the voices of those with lived experience in the foster care system by actively including them in the process of enhancing policy, research, and legislation.  Change 1 creates opportunities for youth and young adults to "be at the table" -- and to train them how to be at the table.</p>
    </div>
    <Button address={"/join"} text={'Support Form'} />
  </div>
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
    .card_container {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      flex-wrap: wrap;
      .custom_card {
        width: 144px;
        margin: 16px;
        img {
          width: 70%;
          height: auto;
          margin: auto;
        }
        :nth-child(2) {
          margin-top: 12px;
          text-align: center;
          font-size: 0.9em;
        }
      }
    }
    .image_container:nth-child(2) {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }
  }
</style>