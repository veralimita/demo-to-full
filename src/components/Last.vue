<template>
  <div id="last">
    <section class="hero is-large is-bold" style="padding: 6rem 0">
      <div class="has-text-left title-wrapper">
        <h1 class="title white">New arrivals</h1>
      </div>
      <b-carousel-list
        v-if="latests"
        v-model="activeCard"
        :data="latests"
        :items-to-show="3"
        :icon-size="'is-large'"
      >
        <template #item="demo">
          <div class="card">
            <div class="card-image">
              <figure class="image is-16by9">
                <a @click="info(demo.index)">
                  <img :src="getHeader(demo)" alt="Placeholder image"
                /></a>
              </figure>
              <b-tag
                type="is-danger"
                rounded
                style="position: absolute; top: 4px; right: 4px"
                ><b>{{ getDistance(demo) }}</b></b-tag
              >
            </div>
            <div class="card-content">
              <div class="content">
                <p class="title is-4 has-text-left ellipsis is-ellipsis-1">
                  {{ demo.name }}
                </p>
                <p class="subtitle is-6 has-text-left ellipsis is-ellipsis-2">
                  {{ demo.short }}
                </p>
                <b-field grouped>
                  <p class="control" v-if="demo.rating">
                    <b-rate :value="demo.rating" show-score disabled />
                  </p>
                  <p class="control" style="margin-left: auto">
                    <b-button size="is-small" type="is-danger" outlined
                      >Go to Steam</b-button
                    >
                  </p>
                </b-field>
              </div>
            </div>
          </div>
        </template>
      </b-carousel-list>
    </section>
  </div>
</template>

<script>
import { formatDistance } from "date-fns";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return { activeCard: 0 };
  },
  async created() {
    try {
      await this.fetchLatests();
    } catch (e) {
      this.addError(e);
    }
  },
  methods: {
    ...mapActions(["addError", "fetchLatests"]),
    getHeader(demo) {
      return `https://cdn.akamai.steamstatic.com/steam/apps/${demo.appid}/capsule_616x353.jpg`;
    },
    info(value) {
      this.activeCard = value;
    },
    getDistance(value) {
      return formatDistance(new Date(value.release), new Date(), {
        addSuffix: true,
      });
    },
  },
  computed: mapState({
    latests: (state) => state.latests,
  }),
};
</script>

<style>
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
</style>