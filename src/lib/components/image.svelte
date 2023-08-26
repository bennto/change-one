<script>
  import { getFileUrl } from "$lib/getFileUrl.js";
  export let url, alt;
</script>

<figure class="image_container image_border">
  <img class="image" src={url} {alt} />
</figure>

<style lang="scss">
  .image_container {
    display: flex;
    align-items: center;
    width: auto;
    max-height: 24em;
    overflow: hidden;
    .image {
      object-fit: cover;
      height: 100%;
      min-width: 100%;
    }
  }
</style>
