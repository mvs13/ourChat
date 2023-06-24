<template>
  <h1 class="page__title">{{ roomTitle }}</h1>
  <p class="page__subtitle">{{ currentDateTime }}</p>
  <p>{{ msgList.length }}</p>
  <div class="q-pa-md row justify-center">
    <div v-if="msgList.length" class="messages__list">
      <!-- <q-chat-message name="me" :text="['hey, how are you?']" sent /> -->
      <!-- <q-chat-message name="Jane" :text="['doing fine, how r you?']" /> -->
      <q-chat-message
        v-for="msg in msgList"
        :key="msg.id"
        :name="msg.message_of_user"
        :text="msg.message"
      />
    </div>
    <div v-else class="messages__list"><p>No any message!</p></div>
  </div>
</template>

<script>
import { ref, toRef, defineComponent } from "vue";
import { useOurChatStore } from "src/stores/our-chat-store";
const { io } = require("socket.io-client");
import axios from "axios";
// let msgList = ref([]);
let msgList = [];

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "Some room",
    },
    id: {
      type: String,
      default: "roomSome",
    },
  },
  setup(props) {
    const ourChatStore = useOurChatStore();

    // const { id: roomID } = toRefs(props);
    const roomID = toRef(props, "id");
    // const { title: roomTitle } = toRefs(props);
    const roomTitle = toRef(props, "title");

    ourChatStore.activeRoom = roomID.value;
    // console.log(msgList);
    (async () => {
      const response = await axios.get(
        `http://localhost:3000/msg/${ourChatStore.activeRoom}`
      );
      console.log(response.data);

      msgList = response.data;
      console.log(msgList);
    })();

    if (ourChatStore.socket === null)
      ourChatStore.socket = io("http://localhost:3001");
    ourChatStore.socket.emit("connection2room", {
      room: roomID.value,
      message: `Hello ${roomID.value}`,
    });
    ourChatStore.socket.on("inroom", (arg) => {
      console.log(arg);
    });

    let currentDateTime = ref(new Date());

    setInterval(() => {
      currentDateTime.value = new Date();
    });
    return { ourChatStore, roomID, roomTitle, msgList, currentDateTime };
  },
  methods: {
    async getMessages4Room(id) {
      // console.log(`http://localhost:3000/msg/${id}`);
      const response = await axios.get(`http://localhost:3000/msg/${id}`);
      // if (response.status == 200) return response.data;
      return [];
    },
  },
  mounted() {
    // console.log(roomID.value);
    // getMessages4Room(roomID.value);
    // (async () => {
    // const response = await axios.get(
    //   `http://localhost:3000/msg/${ourChatStore.activeRoom}`
    // );
    //   this.msgList = await this.getMessages4Room(this.ourChatStore.activeRoom);
    //   console.log(this.msgList);
    // })();
  },
});
</script>
<style>
.messages_list {
  display: block;
  width: 100%;
  max-width: 400px;
}
</style>
