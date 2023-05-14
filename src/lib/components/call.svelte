<script>
  import Button from '$lib/components/button.svelte';
  import { getFileUrl } from '$lib/getFileUrl';
  let vert_ph = "a1e649eb-4980-46ad-a5f6-3c2f99540f12.jpg";
</script>

<div class="call border">
  <div class="text">
    <h2 class="custom_title mb-4">Help Us Do What We Do</h2>
    <div class="sub_section">
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
  </div>
  <div class="image_placeholder image_border">
    <img class="image" src={getFileUrl(vert_ph)} loading="lazy" />
  </div>
</div>

<style lang="scss">
  .call {
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
        color: $primary-text;
      }
      .sub_section {
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(320px, 1fr));
        gap: 2em;
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
</style>