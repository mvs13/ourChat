<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal bordered class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Welcome to Our Chat!
        </q-toolbar-title>
        <div class="q-pa-md q-gutter-sm">
          <q-btn
            color="secondary"
            icon="fa-solid fa-right-to-bracket"
            label="Connect to Chat"
            @click="connectToSocket()"
          />
          <q-btn
            color="secondary"
            icon="fa-solid fa-right-from-bracket"
            label="Disconnect"
            @click="disconnectFromSocket()"
          />
        </div>
      </q-toolbar>

      <q-tabs v-if="ourChatStore.activeUserID" align="center">
        <q-route-tab
          v-for="tab in roomsList"
          :key="tab.id"
          :to="`/${tab.id}`"
          :label="tab.name"
        />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useOurChatStore } from "./stores/our-chat-store";
const { io } = require("socket.io-client");
import axios from "axios";
let roomsList = ref(null);

export default defineComponent({
  name: "App",
  setup() {
    const ourChatStore = useOurChatStore();
    if (ourChatStore.socket === null)
      ourChatStore.socket = io("http://localhost:3001");

    ourChatStore.socket.on("bcst-servertime", (data) => {
      console.log(data);
    });
    ourChatStore.socket.on("has-new-join", (data) => {
      console.log(data);
    });
    ourChatStore.socket.emit("join", "Just joined to the Our Chat!");
    return { roomsList, ourChatStore };
  },
  methods: {
    connectToSocket() {
      // this.socket.emit()
      return true;
    },
    disconnectFromSocket() {
      ourChatStore.socket.emit("disconnect");
      return true;
    },
  },
  mounted() {
    (async () => {
      const response = await axios.get("http://localhost:3000/room");
      // console.log(data);
      if (response.status == 200) this.roomsList = response.data;
      // console.log(this.roomsList);
    })();
  },
});
</script>
