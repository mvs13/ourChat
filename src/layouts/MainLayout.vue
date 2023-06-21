<template>
  <q-page-container>
    <router-view />
  </q-page-container>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    const leftDrawerOpen = ref(false);

    return {};
  },
});
</script>
