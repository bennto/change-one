<script>
  import Construction from '$lib/assets/under_construction.png';
  import Button from '$lib/components/button.svelte';
</script>

<div class="the-container">
  <div class="icon-container">
    <img src={Construction} alt="A graphic design of a construction site" />
  </div>
  <div class="text-container">
    <h3 class="my-title">Under Construction</h3>
    <hr />
    <h5 class="my-body">Hey there! It seems you've discovered an unfinished part of the website.</h5>
    <Button address={"/"} text={'Go Home →'} />
  </div>
</div>

<style lang="scss">
  .the-container {
    max-width: 600px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 48px 10px 0 10px;
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
      .my-body {
        margin-bottom: 12px;
      }
    }
  }
</style>