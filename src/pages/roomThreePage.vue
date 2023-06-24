<template>
  <room-block title="Room Three" id="roomThree"></room-block>
</template>

<script>
import { defineComponent } from "vue";
import roomBlock from "src/components/roomBlock.vue";

export default defineComponent({
  name: "roomThreePage",
  components: {
    roomBlock,
  },
});
</script>
