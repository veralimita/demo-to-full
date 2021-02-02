<template>
  <b-carousel :indicator-inside="false" v-if="highlights">
    <b-carousel-item v-for="(carousel, i) in highlights" :key="i">
      <section :class="`hero is-large`">
        <div class="hero-body">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <img :src="getHeader(carousel)" alt="Placeholder image" />
              </figure>
              <div class="css-gradient"></div>
              <div class="content has-text-left">
                <h1 class="white is-size-3">{{ carousel.name }}</h1>
                <div class="white is-size-6 ellipsis is-ellipsis-2">
                  {{ carousel.short }}
                </div>
                <div class="buttons" style="margin-top: 1em">
                  <b-button type="is-danger"> Show more </b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </b-carousel-item>
    <template #indicators="props">
      <div class="card highlight-card">
        {{ highlights[props.i].name }}
      </div>
    </template>
  </b-carousel>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  async created() {
    try {
      await this.fetchHighlights();
    } catch (e) {
      this.addError(e);
    }
  },
  methods: {
    ...mapActions(["addError", "fetchHighlights"]),
    getHeader(demo) {
      return `https://cdn.akamai.steamstatic.com/steam/apps/${demo.appid}/capsule_616x353.jpg`;
    },
  },
  computed: mapState({
    highlights: (state) =>
      state.highlights ? state.highlights.slice(0, 5) : null,
  }),
};
</script>

<style>
.card {
  margin: 2px 0;
}

.carousel {
  display: grid;
  grid-template-columns: auto 25%;
  align-items: center;
}

.carousel-indicator {
  flex-direction: column;
  height: 100%;
}

.indicator-item {
  margin-right: initial !important;
  display: block;
  width: 100%;
}

.indicator-item .card.highlight-card {
  width: 100%;
  background-color: black;
  padding: 1em;
  color: white;
}

.indicator-item.is-active .card.highlight-card {
  width: 100%;
  background-color: black;
  padding: 1em;
  color: white;
}

.hero.is-large .hero-body {
  padding: 0 !important;
}

.card-image {
  position: relative;
}

.card-image .content {
  position: absolute;
  bottom: 2em;
  left: 3em;
  width: 70%;
}

.card-image .css-gradient {
  position: absolute;
  width: 100%;
  top: 0;
  height: 100%;
  z-index: 0;
  opacity: 0.9;
  background: linear-gradient(180deg, transparent 0%, #0b0b0b 60%);
}

.white {
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

.is-ellipsis-2 {
  -webkit-line-clamp: 2;
}
</style>