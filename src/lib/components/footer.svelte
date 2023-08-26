<script>
  let instagram = "https://www.instagram.com/change1mindchange1life/";
  let facebook = "https://www.facebook.com/change1austintexas/";
  let linktree = "https://linktr.ee/change1one";
  let email = "volunteer@change1.org";
</script>

<div class="footer">
  <div class="head_container">
    <h4>Change 1.</h4>
    <h5>2023</h5>
  </div>
  <br />
  <!-- <hr /> -->
  <div class="icon_container">
    <div class="links">
      <a href={instagram} target="_blank" rel="noreferrer"
        ><h5>Instagram</h5></a>
      <a href={facebook} target="_blank" rel="noreferrer"><h5>Facebook</h5></a>
      <a href={linktree} target="_blank" rel="noreferrer"><h5>Linktree</h5></a>
    </div>
    <a
      ><h5
        on:click={() => {
          alert(email);
        }}>
        {email}
      </h5></a>
  </div>
</div>

<style lang="scss">
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100vw;
    background-color: $background-color;
    padding: 1em 2em;

    h4,
    h5 {
      color: $primary-text;
    }

    hr {
      border: 1px solid $border-color;
      width: 100%;
      opacity: 0.7;
      border-radius: 1px;
    }
    .head_container,
    .icon_container {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
    }
    .head_container {
      justify-content: space-between;
    }
    .icon_container {
      justify-content: space-between;
      gap: 1.4em;
      a,
      h5 {
        cursor: pointer;
      }
      h5 {
        font-weight: 300;
        font-size: 14px;
        transition: all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        &:hover {
          font-weight: 700;
        }
      }
      .links {
        display: flex;
        flex-direction: row;
        gap: 1em;
      }
    }

    :nth-child(1) {
      font-family: $sans;
      font-size: 0.9em;
      font-weight: 600;
      white-space: nowrap;
    }
  }
</style>
