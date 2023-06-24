<template>
  <img
    alt="Welcome to Our Chat"
    src="~assets/welcome-chat.png"
    class="welcome__img"
  />
  <h1 class="page__title">Welcome to Our Chat</h1>
  <h2 class="page__subtitle">Who are you?</h2>
  <q-select
    class="select__user"
    v-model="ourChatStore.activeUserID"
    :options="userList"
    label="I am"
  />
</template>

<script>
import { ref, defineComponent } from "vue";
import axios from "axios";
import { useOurChatStore } from "../stores/our-chat-store";

let userList = ref(null);

export default defineComponent({
  name: "IndexPage",
  setup() {
    const ourChatStore = useOurChatStore();

    return { userList, ourChatStore };
  },
  mounted() {
    (async () => {
      const response = await axios.get("http://localhost:3000/user");
      if (response.status == 200) this.userList = response.data;
    })();
  },
});
</script>

<style scoped>
.welcome__img {
  display: block;
  width: 150px;
  height: 150px;
  margin: 0 auto;
}
.page__title {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
}
.page__subtitle {
  font-size: 22px;
  text-align: center;
}
.select__user {
  width: 80%;
  margin: 0 auto;
}
</style>
