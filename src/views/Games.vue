<template>
  <div class="games container">
    <div class="columns" v-for="(chunk, i) in chunked" :key="i">
      <div class="column is-one-third" v-for="demo in chunk" :key="demo.appid">
        <GameItem :demo="demo" class="tile" />
      </div>
    </div>
    <div class="columns">
      <div class="column is-full">
        <b-button
          type="is-danger"
          expanded
          outlined
          :disabled="loading"
          :loading="loading"
          @click="loadMore"
        >
          LOAD MORE</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import GameItem from "../components/GameItem";
import { mapState, mapActions } from "vuex";

export default {
  components: { GameItem },
  data() {
    return { loading: false };
  },
  async created() {
    await this.loadMore();
  },
  methods: {
    ...mapActions(["addError", "fetchGames", "changePage"]),
    async loadMore() {
      try {
        // this.loading = true;
        await this.fetchGames();
        // this.loading = false;
      } catch (e) {
        console.log(e);
        this.addError(e);
      }
    },
  },
  computed: {
    ...mapState({
      list: (state) => state.games,
    }),
    chunked() {
      if (!this.list) return [[]];
      const chunked = [];
      let i,
        j,
        temparray,
        chunk = 3;
      for (i = 0, j = this.list.length; i < j; i += chunk) {
        temparray = this.list.slice(i, i + chunk);
        chunked.push(temparray);
      }
      return chunked;
    },
  },
};
</script>

<style lang="scss">
.games {
  max-width: 986px !important;
}
</style>