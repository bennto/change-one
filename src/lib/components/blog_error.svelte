<script>
  import Publish from '$lib/assets/publish_article.png';
  import Button from '$lib/components/button.svelte';
</script>

<div class="the-container">
  <div class="icon-container">
    <img src={Publish} alt="A graphic design of a person publishing a blog article">
  </div>
  <div class="text-container">
    <h3 class="my-title">No Blog Posts</h3>
    <hr />
    <h5 class="my-body">It seems we're fresh out of blog posts...</h5>
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
      max-width: 400px;
      margin: auto;
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