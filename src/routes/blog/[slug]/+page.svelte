<script>
  import { getFileUrl } from "$lib/getFileUrl.js";

  export let data;
  let post = data.post;
  let author = data.author;
</script>

<div class="post_container">
  <div class="head">
    <h2>{post.title}</h2>
    <h5>Written by {author.first_name} {author.last_name}</h5>
  </div>
  <figure class="image_container image_border">
    <img class="image" src={getFileUrl(post.thumbnail)} loading="lazy" />
  </figure>
  {@html post.body}
</div>

<style lang="scss">
  .post_container {
    max-width: 28em;
    padding: 0.4em;
    margin: 60px auto;
    .image_container {
      display: flex;
      align-items: center;
      height: auto;
      margin: 10px 0;
      overflow: hidden;
      .image {
        object-fit: cover;
        height: 100%;
        min-width: 100%;
      }
    }
  }
</style>