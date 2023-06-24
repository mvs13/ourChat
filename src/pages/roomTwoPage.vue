<template>
  <room-block title="Room Two" id="roomTwo"></room-block>
</template>

<script>
import { defineComponent } from "vue";
import roomBlock from "src/components/roomBlock.vue";

export default defineComponent({
  name: "roomTwoPage",
  components: {
    roomBlock,
  },
});
</script>
