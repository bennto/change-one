<script>
  import Button from '$lib/components/button.svelte';
  import { getFileUrl } from '$lib/getFileUrl';
  let vert_ph = "2eeb8eda-3533-42d2-8c00-5c7b10c7cd38.jpg";
</script>


<div class="call">
  <h1 class="title">Help Us Do What We Do</h1>
  <p class="desc">Our organization is still here today because of our generous volunteers, partners, and donors. Please consider supporting us so we can continue doing what we do.</p>
  <div class="call_buttons">
    <div class="button_container">
      <Button address={"/join"} text={'Join Us →'} />
    </div>
    <div class="button_container">
      <Button address={"/partners"} text={'Partner →'} />
    </div>
    <div class="button_container">
      <Button address={"/join"} text={'Donate →'} />
    </div>
  </div>

</div>


<style lang="scss">
  .call {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 40em;
    padding: 0 2em;
    margin: 0 auto 80px auto;
    .title {
      margin-bottom: 0.6em;
      color: $primary-text;
    }
    .call_buttons {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      .button_container {
        margin: 40px 1em;
      }
    }
  }
</style>