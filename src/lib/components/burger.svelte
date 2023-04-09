<script>
  import { active } from '../stores.js';
  
  let activity;
  active.subscribe(bool => {
    activity = bool;
  });
  function handleClick() {
    active.set(!activity); 
  }
</script>

<div class="nav-icon {activity ? 'open' : ''}" on:click={handleClick}>
  <span></span>
  <span></span>
</div>

<style lang="scss">
  * {
    margin: 0;
    padding: 0; 
  }

  .nav-icon {
    position: relative;
    height: 11px;
    width: 32px;
    margin: auto;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 250ms ease-out;
    -moz-transition: 250ms ease-out;
    -o-transition: 250ms ease-out;
    transition: 250ms ease-out;
    cursor: pointer;
    z-index: 12;

    &:hover {
    }
  }

  .nav-icon span {
    display: block;
    position: absolute;
    height: 3px;
    width: 32px;
    background: $primary-text;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 250ms ease-out;
    -moz-transition: 250ms ease-out;
    -o-transition: 250ms ease-out;
    transition: 250ms ease-out;
  }

  .nav-icon span:nth-child(1) {
    top: 0px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  .nav-icon span:nth-child(2) {
    top: 8px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  .nav-icon.open span {
    background: $secondary-text;
  }

  .nav-icon.open span:nth-child(1) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg) translateX(3.6px) translateY(-3.6px);
    top: -7px;
  }

  .nav-icon.open span:nth-child(2) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg) translateX(3.6px) translateY(3.6px);
    top: 15px;
  }
</style>