import { defineStore } from "pinia";

export const useOurChatStore = defineStore("our-chat-store", {
  state: () => ({ socket: null, activeRoom: null, activeUserID: "" }),
});
