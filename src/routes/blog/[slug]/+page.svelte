<script>
  import { getFileUrl } from "$lib/getFileUrl.js";

  export let data;
  let post = data.post;
  let author = data.author;
</script>

<div class="post_container">
  <div class="head">
    <h2 class="post_title">{post.title}</h2>
    <h5>Written by {author.first_name} {author.last_name}</h5>
  </div>
  <figure class="image_container image_border">
    <img
      class="image"
      src={getFileUrl(post.thumbnail)}
      alt="post thumbnail"
      loading="lazy" />
  </figure>
  <div class="passage">
    {@html post.body}
  </div>
</div>

<style lang="scss">
  .post_container {
    max-width: 28em;
    padding: 0.4em;
    margin: 60px auto;
    .head {
      .post_title {
        line-height: 1.2em;
        margin-bottom: 0.2em;
      }
    }
    .image_container {
      display: flex;
      align-items: center;
      height: auto;
      margin: 24px 0;
      overflow: hidden;
      .image {
        object-fit: cover;
        height: 100%;
        min-width: 100%;
      }
    }
    .passage {
      :global(p) {
        margin-bottom: 1em;
      }
    }
  }
</style>
