<script>
  import { getFileUrl } from '$lib/getFileUrl';
  import Call from '$lib/components/call_2.svelte';
  import Button from '$lib/components/button.svelte';
  let placeholder = "b5f9e69a-ba55-4606-a0b8-e0ec32042a0b.jpg";
  let utChapter = "61ce10ee-d469-454f-8e3b-4c549b79ffea.jpg";
</script>

<div class="contain m-0 p-0">
  <div class="text">
    <h1>About Us</h1>
    <h5>Change 1 is a nonprofit organization founded to support youths transitioning out of foster care, children and families who experience the Child Welfare and Human & Health Services systems, and people working with them and their communities.</h5>
  </div>
  <div class="image_container image_border">
    <img class="image" src={getFileUrl(placeholder)} alt="placeholder" loading="lazy" />
  </div>
  <div class="text">
    <h3>What We Do</h3>
    <h5>We helps foster youth, ages 15-26, realize their full potential by bridging any gaps in equal opportunities for housing, education, medical care, and employment. In doing this, we empower them to make meaningful contributions to their communities and build strong families of their own.</h5>
  </div>
  <div class="image_container image_border">
    <img class="image" src={getFileUrl(placeholder)} alt="placeholder" loading="lazy" />
  </div>
  <div class="text">
    <h3>Every Single Year...</h3>
    <div class="list">
      <h5>• 250,000 children enter the Foster Care system due to abuse and neglect</h5>
      <h5>• 20,000 teens are “emancipated” at age 18</h5>
      <h5>• 40% of those teens experience homelessness within 18 months</h5>
    </div>
    <h5>With the loss of their safety nets, it is imperative that former foster kids have access to stability through equal housing, medical care, education, and employment opportunities available to them. We never give up on children. It’s our time to make a change...</h5>
  </div>
  <div class="focus_text">
    <h4>Change 1 seeks to improve the capacity of youth-led and youth-serving institutions and engage young people, their families, and communities so that youth can reach their full potential.</h4>
  </div>
  <div class="grid_text border">
    <div class="left_container image_border">
      <img class="image" src={getFileUrl(placeholder)} loading="lazy" />
    </div>
    <div class="right_container">
      <h2 class="align_title">Meet Our Founder</h2>
      <h5 class="align_sub">Courtney Jones is a social worker with over a decade of experience in child welfare and advocacy. But before that, she was an emancipated youth who transitioned through twenty five different homes, shelters, adoptions, and reunifications.</h5>
      <h5 class="align_sub">Courtney founded Change 1 with the hopes of using her experiences to ensure the success of youths who are undergoing similar tribulations.</h5>
      <!-- <Button address={"/about"} text={'About our cause'}></Button> -->
    </div>
  </div>
  <div class="text">
    <h3>UT Chapter</h3>
    <h5 class="body">Change1 has joined forces with the University of Texas at Austin to help students take more part in their community. Students may directly engage in making a change via a multitude of fundraising, volunteering, and community-outreach events and opportunities. If you're a UT student, please consider...</h5>
    <Button address={"/join"} text={'Joining the cause →'}></Button>
  </div>
  <div class="image_container image_border">
    <img class="image" src={getFileUrl(utChapter)} loading="lazy" />
  </div>
  <Call />
</div>

<style lang="scss">
  .text {
    max-width: 38em;
    margin: 32px auto;
    padding: 0 1em;
    h1 {
    margin-bottom: 16px;
    text-align: center;
    }
    h3 {
    margin-top: 56px;
    margin-bottom: 16px;
    }
    .body {
      margin-bottom: 24px;
    }
    .list {
      margin-bottom: 16px;
    }
  }
  .focus_text {
    border: 0.08rem solid $primary-text;
    border-left: none;
    border-right: none;
    :nth-child(1) {
      max-width: 26em;
      margin: 0 auto;
      padding: 56px 1em;
    }
  }
  .image_container {
    display: flex;
    align-items: center;
    margin: 2em auto;
    max-width: 36em;
    max-height: 20em;
    overflow: hidden;
    .image {
      object-fit: cover;
      height: 100%;
      min-width: 100%;
    }
  }
  .grid_text {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    grid-gap: 0 1rem;
    .left_container {
      display: flex;
      align-items: center;
      width: auto;
      max-height: 32em;
      overflow: hidden;
      .image {
        object-fit: cover;
        height: 100%;
        min-width: 100%;
      }
    }
    .right_container {
      margin: auto 0;
      padding: 3em 1em;
      .align_title {
        margin-bottom: 0.2em;
      }
      .align_sub {
        max-width: 48ch;
        margin-bottom: 0.8em;
      }
    }
  }
</style>