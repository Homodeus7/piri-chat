<template>
  <nav class="navbar">
    <h3>Pickle Rick Chat</h3>

    <ul class="navbar-menu">
      <li>
        <a href="#">Name acc</a>
      </li>
      <li>
        <a href="#" @click.prevent="logout">Exit</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const store = useStore();

    return {
      logout: () => {
        store.commit("auth/logout");
        router.push("/auth");
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
