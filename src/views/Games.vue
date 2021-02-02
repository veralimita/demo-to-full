<template>
  <div class="games container">
    <ul class="pagination">
      <li class="page-item disabled">
        <a href="#" tabindex="-1">Previous</a>
      </li>
      <li class="page-item active">
        <a href="#">1</a>
      </li>
      <li class="page-item">
        <a href="#">2</a>
      </li>
      <li class="page-item">
        <a href="#">3</a>
      </li>
      <li class="page-item">
        <span>...</span>
      </li>
      <li class="page-item">
        <a href="#">12</a>
      </li>
      <li class="page-item">
        <a href="#">Next</a>
      </li>
    </ul>
    <div class="tile is-ancestor">
      <div class="tile is-vertical" v-if="list">
        <HorizontalItem
          :demo="demo"
          class="tile"
          v-for="demo in list"
          :key="demo.appid"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HorizontalItem from "../components/HorizontalItem";
import { mapState, mapActions } from "vuex";

export default {
  components: { HorizontalItem },
  data() {
    return {};
  },
  async created() {
    try {
      await this.fetchGames();
    } catch (e) {
      this.addError(e);
    }
  },
  methods: {
    ...mapActions(["addError", "fetchGames", "changePage"]),
  },
  computed: mapState({
    list: (state) => state.games,
  }),
};
</script>

<style lang="scss">
.games {
  max-width: 986px !important;
}
</style>