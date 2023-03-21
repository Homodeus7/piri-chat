<template>
  <form class="card center" @submit.prevent="onSubmit">
    <h1>Sign in</h1>

    <div class="form-control">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" />
    </div>
    <div class="form-control">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" />
    </div>

    <button class="btn primary" type="submit">Enter</button>
  </form>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useField, useForm } from "vee-validate";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const { handleSubmit } = useForm();

    const { value: email } = useField("login");
    const { value: password } = useField("password");

    const onSubmit = handleSubmit(async (values) => {
      console.log("Form:", values);
      await store.dispatch("auth/login", values);
      router.push("/");
    });
    return {
      onSubmit,
      email,
      password,
    };
  },
};
</script>

<style lang="scss" scoped></style>
