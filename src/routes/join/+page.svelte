<script>
  import Button from '$lib/components/button.svelte';
  import { getFileUrl } from "$lib/getFileUrl.js"
  let placeholder = "3491bdaa-7f9a-42aa-8ad6-3292af72d65e.jpeg"; 
</script>

<div class="container">
  <div class="column is-8 is-offset-2 my-4">
    <h1 class="has-text-centered my-4">Join Us</h1>
    <h5>We are a small group trying to make a big difference, and would appreciate all the help we can get. Generally, we're looking for helpers in the form of volunteers and donors. Continue reading for descriptions and interest forms for both!</h5>  
    <figure class="image_container image_border my-4">
      <img class="image" src={getFileUrl(placeholder)} loading="lazy" />
    </figure>
    <h2 class="mt-2">Volunteers</h2>
    <p>Change 1 is here to provide support and nurturing for foster youths entering adulthood. Currently, most of our volunteers belong to the UT chapter of Change 1, but we welcome individuals from all walks of life. Your skills and resources can help with the following initiatives:</p>
    <div class="list mt-2">
      <p>• Mentorship for foster alumni</p>
      <p>• Policy and advocacy</p>
      <p>• Organizing and aiding with events</p>
      <p>• Social media management</p>
      <p>• And more!</p>
    </div>
    <h2 class="mt-2">Donors</h2>
    <p>Change 1 provides support to a number of foster alumni, many of which lack daily necessities. We would greatly appreciate any donations that could go to support our youth. Please check out our interest form for common necessities or donate to us directly via Paypal.</p>
    <div class="my-5 interest_forms">
      <h2>Interest Forms</h2>
      <div>
        <Button address={"/join"} text={'Volunteer →'} />
        <Button address={"/join"} text={'Donate →'} />
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    .item_list {
      margin-top: 1em;
      display: flex;
      flex-direction: row;
      gap: 2em;
      .item_genre {
        font-weight: 600;
        max-width: 4em;
      }
      :nth-child(2) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 0.6em;
      }
    }
    .interest_forms {
      display: flex;
      flex-direction: column;
      align-items: center;
      
    }
  }
</style>