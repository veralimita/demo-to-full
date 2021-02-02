<template>
  <a href="#" class="game-item" @click.prevent="goToSteam">
    <div class="card" style="margin-bottom: 2rem">
      <div class="card-image hover-highligth">
        <figure class="image">
          <img :src="getHeader(demo)" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media-content has-text-left" style="margin-bottom: 1rem">
          <p class="title white is-6">{{ demo.name }}</p>
        </div>
        <div class="content white has-text-left">
          <div class="is-7 ellipsis is-ellipsis-2" style="margin-bottom: 1rem">
            {{ demo.short }}
          </div>
          <time :datetime="demo.release">{{ getRelease(demo) }}</time>
        </div>
      </div>
    </div>
  </a>
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
    getHeader(demo) {
      return `https://cdn.akamai.steamstatic.com/steam/apps/${demo.appid}/capsule_616x353.jpg`;
    },
    getRelease(value) {
      try {
        return format(new Date(value.release), "MMM dd, yyyy");
      } catch (e) {
        return value.release;
      }
    },
    goToSteam() {
      console.log(this.demo);
    },
  },
};
</script>

<style lang="scss">
.title.white {
  color: white;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  -webkit-transition: opacity 200ms cubic-bezier(0.42, 0, 0.58, 1);
  transition: opacity 200ms cubic-bezier(0.42, 0, 0.58, 1);
}

.content.white {
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
  font-size: 0.9rem;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.is-ellipsis-2 {
  -webkit-line-clamp: 2;
}

.is-ellipsis-1 {
  -webkit-line-clamp: 1;
}

.game-item .hover-highligth::after {
  -webkit-transition: opacity 125ms ease-in-out;
  transition: opacity 125ms ease-in-out;
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  z-index: 1;
  border-radius: 0;
}

.game-item .hover-highligth:hover::after {
  opacity: 0.1;
}

.game-item .card {
  background-color: transparent;
  min-height: 318px;
}

.game-item .card-content {
  padding: 1.5rem 0 0;
}
</style>