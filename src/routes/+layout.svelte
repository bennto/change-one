<script>
  import "modern-normalize";
  import "../stylesheets/app.scss";
  import Transition from "$lib/components/transition.svelte";
  import Navbar from "$lib/components/navbar.svelte";
  import Block from "$lib/components/block.svelte"
  import Footer from "$lib/components/footer.svelte";

  // export let data;
</script>

<Navbar />
<Block />
<slot class="main_content" />
<Footer />
