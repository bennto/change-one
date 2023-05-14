<script>
  import Construction from '$lib/assets/under_construction.svelte';
</script>

<div class="the-container">
  <div class="icon-container">
    <Construction />
  </div>
  <div class="text-container">
    <h3 class="my-title">Under Construction</h3>
    <hr />
    <h5 class="my-body">Hey there! It seems you've discovered an unfinished part of the website. We promise it'll be done soon. In the meantime, consider using the menu to explore elsewhere or check out our footer for our socials.</h5>
  </div>
</div>

<style lang="scss">
  .the-container {
    width: 54%;
    min-height: 100vh;
    margin: 0 auto;
    padding-top: 48px;
    .icon-container {
    }
    hr {
      margin: 12px auto;
      width: 6%;
      background-color: $primary-text;
    }
    .text-container {
      text-align: center;
      margin-top: 24px;
      .my-title {
        font-family: $sans;
        font-style: normal;
        font-weight: 600;
      }
    }
  }
</style>