<template>
  <div id="list">
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
    <div class="buttons">
      <b-button tag="router-link" to="/games" type="is-link">
        Show more
      </b-button>
    </div>
  </div>
</template>

<script>
import HorizontalItem from "./HorizontalItem";
import { mapState, mapActions } from "vuex";

export default {
  components: { HorizontalItem },
  data() {
    return {};
  },
  async created() {
    try {
      await this.fetchList();
    } catch (e) {
      this.addError(e);
    }
  },
  methods: {
    ...mapActions(["addError", "fetchList"]),
  },
  computed: mapState({
    list: (state) => state.list,
  }),
};
</script>

<style lang="scss">
</style>