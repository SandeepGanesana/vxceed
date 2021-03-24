<template>
  <div>
    <b-card
      [img-src]="postDetail.avatar"
      [img-alt]="postDetail.first_name + ' ' + postDetail.last_name"
      img-right
    >
      <b-card-text>
        {{ postDetail.first_name + " " + postDetail.last_name }}
      </b-card-text>
    </b-card>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "postDetail",
  data() {
    return {
      postDetail: {},
    };
  },
  computed: {
    ...mapGetters(["StatePosts"]),
  },
  created() {
    let postId = this.$route.params ? this.$route.params : "";
    if (postId) {
      this.postDetail.id = postId;
      if (this.postDetail.id !== "") {
        this.postDetail = this.StatePosts.find(
          (post) => post.id === this.postDetail.id
        );
      }
    }
  },
};
</script>