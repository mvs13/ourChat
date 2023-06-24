<template>
  <roomBlock title="Room One" id="roomOne"></roomBlock>
</template>

<script>
import { defineComponent } from "vue";
// import { useOurChatStore } from "src/stores/our-chat-store";
// const { io } = require("socket.io-client");

import roomBlock from "src/components/roomBlock.vue";

export default defineComponent({
  name: "roomOnePage",
  components: {
    roomBlock,
  },
  setup() {
    // let activeRoom = useOurChatStore().activeRoom;
    // activeRoom = "roomOne";
    // let socket = useOurChatStore().socket;
    // if (socket === null) socket = io("http://localhost:3001");
    // socket.emit("connection2room", {
    //   room: activeRoom,
    //   message: `Hello ${activeRoom}`,
    // });
    // socket.on("inroom", (arg) => {
    //   console.log(arg);
    // });
  },
});
</script>
