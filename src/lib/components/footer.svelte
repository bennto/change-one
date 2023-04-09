<div class="footer">
  <div class="head_container">
    <h4>Change 1.</h4>
    <h5>2023</h5>
  </div>
  <hr />
  <div class="icon_container">
    <a><h5>Instagram</h5></a>
    <a><h5>Facebook</h5></a>
    <a><h5>Twitter</h5></a>
    <a><h5>Email</h5></a>
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
    background-color: $primary-text;
    padding: 1em 2em;

    h4, h5 {
      color: $secondary-color;
    }

    hr {
      border: 0.2px dashed $secondary-color;
      width: 100%;
      opacity: 0.7;
      border-radius: 1px;
    }
    .head_container, .icon_container {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .head_container {
      width: 100%;
      justify-content: space-between;
    }
    .icon_container {
      justify-content: center;
      gap: 1.4em;
      a, h5 {
        font-weight: 300;
        font-size: 0.8em;
        cursor: pointer;
      }
      h5 {
        transition: all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        &:hover {
          font-weight: 700;
        }
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