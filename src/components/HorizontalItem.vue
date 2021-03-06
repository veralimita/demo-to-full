<template>
  <div class="tile">
    <div class="card is-horizontal" style="margin-bottom: 2rem">
      <div class="card-image">
        <figure class="image">
          <img :src="getHeader(demo)" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <div class="media-content has-text-left" style="margin-bottom: 1rem">
            <p class="title is-4">{{ demo.name }}</p>
          </div>
          <div class="content has-text-left">
            <div
              class="ellipsis is-ellipsis-4 is-size-6-5"
              style="margin-bottom: 1rem"
            >
              {{ demo.short }}
            </div>
            <div class="block">
              <div>
                Demo release date:
                <time :datetime="demo.release">{{
                  getDate(demo.release)
                }}</time>
              </div>
              <div v-if="demo.parent_release">
                Game release date:
                <time :datetime="demo.parent_release">{{
                  getDate(demo.parent_release)
                }}</time>
              </div>
              <div>
                Platform{{ demo.platforms.length > 1 ? "s" : "" }}:
                {{ demo.platforms.map((platform) => platform.name).join(", ") }}
              </div>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <div class="card-footer-item has-text-left">
            <b-button type="is-danger is-link" outlined @click="openSteam"
              >Go to Steam</b-button
            >
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from "date-fns";

export default {
  props: { demo: Object },
  data() {
    return {};
  },
  async created() {},
  methods: {
    openSteam() {
      window.open(
        `https://store.steampowered.com/app/${this.demo.appid}`,
        "_blank"
      );
    },
    getHeader(demo) {
      return `https://cdn.akamai.steamstatic.com/steam/apps/${demo.appid}/capsule_616x353.jpg`;
    },
    getDate(value) {
      try {
        return format(new Date(value), "MMM dd, yyyy");
      } catch (e) {
        return value;
      }
    },
  },
};
</script>

<style lang="scss">
h1.title.white {
  color: white;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  -webkit-transition: opacity 200ms cubic-bezier(0.42, 0, 0.58, 1);
  transition: opacity 200ms cubic-bezier(0.42, 0, 0.58, 1);
}

.content h1.white {
  color: white;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  -webkit-transition: opacity 200ms cubic-bezier(0.42, 0, 0.58, 1);
  transition: opacity 200ms cubic-bezier(0.42, 0, 0.58, 1);
}

.title-wrapper {
  margin-bottom: 1rem;
}

.ellipsis {
  display: block;
  /* Fallback for non-webkit */
  display: -webkit-box;
  /*   max-width: 400px; */
  /*   height: 109.2px; */
  /* Fallback for non-webkit */
  margin: 0 auto;
  /*   font-size: 26px; */
  line-height: 1.4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.is-ellipsis-4 {
  -webkit-line-clamp: 5;
}

.is-ellipsis-2 {
  -webkit-line-clamp: 2;
}

.is-ellipsis-1 {
  -webkit-line-clamp: 1;
}

.carousel-arrow .icon {
  background: #dfdcd6;
}

.icon.is-large {
  height: 8rem;
  width: 3rem;
}

.card {
  &.is-horizontal {
    display: flex;
    width: 100%;
    .card-image {
      width: 100%;
      height: 100%;
    }

    .card-stacked {
      flex-direction: column;
      display: flex;
      position: relative;

      .card-content {
        flex-grow: 1;
        width: 400px !important;
      }
    }
  }

  &.is-fullimage {
    background-color: transparent;
    .card-image {
      color: #fff !important;
      .card-stacked {
        position: absolute;
        bottom: 0;
        width: 100%;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.65) 100%
        );
        text-shadow: 0px 0px 2px #000000;

        .card-footer {
          border-color: transparent;
        }

        .title,
        .subtitle {
          color: inherit;
        }

        a {
          color: inherit;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}

#list .tile.is-ancestor {
  margin: 0;
}

.ellipsis {
  display: block;
  /* Fallback for non-webkit */
  display: -webkit-box;
  /*   max-width: 400px; */
  /*   height: 109.2px; */
  /* Fallback for non-webkit */
  margin: 0 auto;
  /*   font-size: 26px; */
  line-height: 1.4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.is-size-6-5 {
  font-size: 0.9rem;
}

#list .card-content {
  padding: 1.5rem 1.5rem 0rem;
}
</style>