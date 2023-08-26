<script>
  import { onMount } from "svelte";
  import { slide, fly } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  import Burger from "./burger.svelte";
  import { active } from "../stores.js";

  let activity;
  active.subscribe((bool) => {
    activity = bool;
  });
  function handleClick() {
    active.set(!activity);
  }

  let menuHover = false;
  function setMenuHover() {
    menuHover = !menuHover;
  }

  let dropdown = false;
  let mobile;
  let innerWidth;
  function setDropDown() {
    if (innerWidth <= 768) {
      dropdown = true;
      mobile = true;
    } else {
      dropdown = false;
      mobile = false;
    }
  }
  function dropDropdown() {
    if (!mobile) {
      dropdown = !dropdown;
    }
  }
  onMount(() => {
    setDropDown();
    addEventListener("resize", setDropDown());
  });
</script>

<svelte:window bind:innerWidth />

<div class="nav_container">
  <div class="navbar_container">
    <a href="/" on:click={activity ? handleClick : ""}
      ><h5 class="logo">Change 1</h5></a>
    <!-- <div class="nav_links">
      <a class="nav_button" href="/about"><p>about</p></a>
      <a class="nav_button" href="/blog"><p>blog</p></a>
      <a class="nav_button" href="/events"><p>events</p></a>
      <a class="nav_button" href="/join"><p>join</p></a>
      <a class="nav_button" href="/partners"><p>partners</p></a>
    </div> -->
    <div>
      <div />
      <div class="menu_hit_container">
        {#if menuHover || activity}
          <h5 in:fly={{ x: 10 }} out:fly={{ x: 10 }}>menu</h5>
        {/if}
        <div
          class="burger_container"
          on:mouseenter={setMenuHover}
          on:mouseleave={setMenuHover}>
          <Burger class="nav_burger" />
        </div>
      </div>
    </div>
  </div>
  {#if activity}
    <div
      class="menu_container image_border"
      in:slide={{ delay: 100 }}
      out:slide={{ y: -120, duration: 600, delay: 320, easing: cubicOut }}>
      <div class="grid_container">
        <div class="image_block" />
        <div class="list_container" on:click={handleClick}>
          <!-- <img class="event_image" src={getFileUrl('2eeb8eda-3533-42d2-8c00-5c7b10c7cd38.jpg')} loading="lazy" /> -->
          <div
            class="menu_item"
            in:fly={{ x: -10, delay: 240 }}
            out:fly={{ x: -10, delay: 240 }}>
            <a href="/about"><h3>About</h3></a>
          </div>
          <div on:mouseenter={dropDropdown} on:mouseleave={dropDropdown}>
            <div
              class="menu_item"
              in:fly={{ x: -10, delay: 300 }}
              out:fly={{ x: -10, delay: 180 }}>
              <a><h3>Our Work</h3></a>
            </div>
            {#if dropdown}
              <div class="menu_item drop" in:slide={{ delay: 120 }} out:slide>
                <a href="/advocacy"><h4>Advocacy</h4></a>
              </div>
              <div class="menu_item drop" in:slide={{ delay: 180 }} out:slide>
                <a href="/public_education"><h4>Public Education</h4></a>
              </div>
              <div class="menu_item drop" in:slide={{ delay: 240 }} out:slide>
                <a href="/support-services"><h4>Support Services</h4></a>
              </div>
              <div class="menu_item drop" in:slide={{ delay: 300 }} out:slide>
                <a href="/training"><h4>Training</h4></a>
              </div>
            {/if}
          </div>
          <div
            class="menu_item"
            in:fly={{ x: -10, delay: 360 }}
            out:fly={{ x: -10, delay: 120 }}>
            <a href="/blog"><h3>Blog</h3></a>
          </div>
          <div
            class="menu_item"
            in:fly={{ x: -10, delay: 420 }}
            out:fly={{ x: -10, delay: 60 }}>
            <a href="/events"><h3>Events</h3></a>
          </div>
          <!-- <div class="menu_item" in:fly={{ x: -10, delay: 480 }} out:fly={{ x: -10, delay: 60}} ><a href="/partners" ><h3>Partners</h3></a></div> -->
          <div
            class="menu_item"
            in:fly={{ x: -10, delay: 480 }}
            out:fly={{ x: -10 }}>
            <a href="/join"><h3>Join</h3></a>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>

<style lang="scss">
  .nav_container {
    .navbar_container {
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      padding: 0 24px 0 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background-color: $background-color;
      border: 0.08em solid $border-color;
      border-top: none;
      border-left: none;
      border-right: none;
      z-index: 10;
      .logo {
        padding: 0.6rem;
        font-size: 1em;
        font-weight: 700;
        border: 0.08rem solid $primary-text;
        border-top: none;
        border-left: none;
        border-bottom: none;
        margin: -0.03em;
        cursor: pointer;
        transition-duration: 0.3s;
        &:hover {
          background-color: $primary-text;
          color: $background-color;
        }
      }
      .nav_links {
        display: flex;
        .nav_button {
          padding: 0 1.2rem;
          text-decoration: none;
          &:hover {
            cursor: pointer;
          }
        }
        @media screen and (max-width: 640px) {
          display: none;
        }
      }
      .menu_hit_container {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.8em;
      }
    }
    .menu_container {
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      width: 101vw;
      height: 101vh;
      background-color: $background-color;
      .block {
        height: 2.2em;
      }
      .grid_container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
        // margin-left: 4.7em;
        height: 100vh;
        border: 0.08rem solid $border-color;
        margin-left: 4.73rem;
        border-top: none;
        border-right: none;
        border-bottom: none;
        overflow: hidden;
        .image_block {
          border: 0.08rem solid $border-color;
          border-left: none;
          border-top: none;
          overflow: hidden;
        }
        .list_container {
          margin-top: 4em;
          display: flex;
          flex-direction: column;
          align-items: end;
          .menu_item {
            font-family: $serif;
            padding: 0 4px;
            padding-top: 10px;
            padding-right: 4.2em;
            width: 100%;
            height: 3em;
            transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            overflow: hidden;
            cursor: pointer;
            h3,
            h4 {
              text-align: right;
              height: 3em;
            }
            h3 {
              height: 2em;
            }
            h4 {
            }
            &:hover {
              padding-right: 5.4em;
            }
          }
          .drop {
            margin-right: 1em;
          }
        }
      }
    }
  }
</style>
