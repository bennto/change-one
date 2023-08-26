<script>
  export let text;
  export let address;
</script>

<!-- example usage -->
<!-- <Button address={"/join"} text={'Join Us →'} /> -->

<button class="button" type="button">
  <a class="btn" href={address}><p>{text}</p></a>
</button>

<style lang="scss">
  .button {
    background-color: $primary-color;
    border: 0.08rem solid $border-color;
    transition-duration: 0.3s;
    max-height: 50px;
    cursor: pointer;
    :nth-child(1) {
      transition-duration: 0.3s;
    }
    .btn > :nth-child(1) {
      padding: 8px 0;
      color: $button-text;
    }
    &:hover {
      background-color: $secondary-color;
      :nth-child(1) {
        color: $background-color;
      }
    }
  }
</style>
