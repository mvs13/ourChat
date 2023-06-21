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

      <q-tabs align="center">
        <q-route-tab to="/roomOne" label="Room One" />
        <q-route-tab to="/roomTwo" label="Room Two" />
        <q-route-tab to="/roomThree" label="Room Three" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { useOurChatStore } from "./stores/our-chat-store";
const { io } = require("socket.io-client");

export default defineComponent({
  name: "App",
  setup() {
    const socket = useOurChatStore().socket;
  },
  methods: {
    connectToSocket() {
      this.socket = io("http://localhost:3001");
      // this.socket.emit()
      return true;
    },
    disconnectFromSocket() {
      this.socket.emit("disconnect");
      return true;
    },
  },
});
</script>
