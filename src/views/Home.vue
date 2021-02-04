<template>
  <div class="home container">
    <div id="home">
      <Highlights />
      <Last />
      <List />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Highlights from "@/components/Highlights.vue";
import Last from "@/components/Last.vue";
import List from "@/components/List.vue";

export default {
  name: "Home",
  components: {
    Highlights,
    Last,
    List,
  },
  created() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
#home {
  width: 986px !important;
  max-width: 986 !important;
  margin: 0 auto;
}
</style>