<script>
  import { getFileUrl } from '$lib/getFileUrl.js';
  import Postcard from '$lib/components/postcard.svelte';
  export let data;
  let posts = data.posts;
</script>

<div class="events_container">
  <h1 class="title">Blog</h1>
  <div class="card_container columns">
    <!-- <p>{JSON.stringify(posts)}</p> -->
    {#each posts as post}
      <Postcard class="postcard" post={post} />
    {/each}
  </div>
</div>


<style lang="scss">
  .events_container {
    min-height: 100vh;
    .title {
      text-align: center;
      margin-top: 2em;
      margin-bottom: 48px;
      color: $primary-text;
    }
    .card_container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      grid-gap: 1rem;
      margin: 1em;
    }
  }
</style>
