<script>
  import AmusementPark from '$lib/assets/amusement_park.png';
  import Button from '$lib/components/button.svelte';
</script>

<div class="the-container">
  <div class="icon-container">
    <img src={AmusementPark} alt="A graphic design of an amusement park">
  </div>
  <div class="text-container">
    <h3 class="my-title">No Events</h3>
    <hr />
    <h5 class="my-body">It seems we don't have any upcoming events scheduled at the moment.</h5>
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