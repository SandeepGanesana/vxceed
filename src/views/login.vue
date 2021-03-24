<template>
  <b-row class="justify-content-md-center mt-4">
    <b-col col md="8">
      <b-card
        header="VXceed"
        header-bg-variant="primary"
        header-text-variant="white"
      >
        <b-card-text>
          <b-form @submit="onSubmit">
            <b-form-group description="Enter your username" label="Username">
              <b-form-input v-model="username" required> </b-form-input>
            </b-form-group>
            <b-form-group description="Enter your password" label="Password">
              <b-form-input v-model="password" required type="password">
              </b-form-input>
            </b-form-group>
            <b-form-group>
              <b-button
                type="sumbit"
                variant="outline-primary"
                :disabled="!loginBtnEnable"
                >Login</b-button
              >
            </b-form-group>
          </b-form>
        </b-card-text>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    onSubmit(event) {
      event.preventDefault();
      console.log(event);
      if ((this.username === "sandeep", this.password === "1234")) {
        const User = new FormData();
        User.append("username", this.username);
        User.append("password", this.password);
        this.LogIn(User);
        this.$router.push("/home").catch(()=>{});
      }
    },
  },
  computed: {
    loginBtnEnable() {
      return this.username.length > 0 && this.password.length > 0
        ? true
        : false;
    },
  },
};
</script>
<style scoped>
</style>