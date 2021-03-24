<template>
  <div>
    <b-table striped hover :items="posts" :fields="fields">
      <!-- <template #cell(first_name)>
        <b-button size="sm" @click="navigateToView($event)" class="mr-2">
          {{ item.first_name }}
        </b-button>
      </template> -->
    </b-table>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  name: "home",
  data() {
    return {
      fields: ["first_name", "last_name", "email"],
      posts: [],
    };
  },
  methods: {
    ...mapActions(["GetPosts"]),
    navigateToView(event) {
      event.preventDefault();
      console.log("event", event);
      if (event) {
        //
      }
    },
  },
  created() {
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      console.log("posts loaded", res.data.data);
      this.posts = res.data.data;
      this.GetPosts(this.posts);
    });
  },
};
</script>
<style scoped>
</style>