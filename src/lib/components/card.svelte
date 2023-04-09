<script>
  import { getFileUrl } from '$lib/getFileUrl';
  export let event;
</script>

<a class="link" href={`/events/${event.id}`}>
  <div class="card_container">
    <div class="card_placeholder">
      <img class="card_image" src={getFileUrl(event.thumbnail)} loading="lazy" />
    </div>
    <div class="card_text">
      <h4>{event.name}</h4>
      <h6>{event.start_date}</h6>
    </div>
  </div>
</a>

<style lang="scss">
  .link {
    .card_container {
      display: inline-block;
      vertical-align: top;
      overflow: hidden;
      cursor: pointer;
      width: 100%;
      height: 22em;
      border: 0.08em solid $primary-text;

      transition-duration: 0.3s;
      &:hover {
        // border-radius: 0.8em;
        transform: scale(1.02);
        .card_text {
          background-color: $primary-text;
          transition-duration: 0.3s;
          transition-timing-function: ease-out;
          * {
            color: $background-color;
            transition-duration: 0.3s;
            transition-timing-function: ease-out;
          }
        }
        .card_placeholder {
          .card_image {
            filter: grayscale(0%);
          }
        }
      }
      .card_placeholder {
        display: flex;
        align-items: center;
        height: 60%;
        overflow: hidden;
        border: 0.08em solid $primary-text;
        margin: -0.07em;
        transition: filter 1s;
        .card_image {
          object-fit: cover;
          min-width: 100%;
          min-height: 100%;
          filter: grayscale(50%);
        }
      }
      .card_text {
        padding: 0.6em;
        height: 42%;
        transition-duration: 0.3s;
        transition-timing-function: ease-out;
        :nth-child(1) {
          line-height: 1.05em;
          margin-bottom: 20px;
          transition-duration: 0.3s;
          transition-timing-function: ease-out;
        }
      }
    }
  }
  
</style>