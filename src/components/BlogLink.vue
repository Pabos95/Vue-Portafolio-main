<template>
<div>
<b-card class="mb-3 row-2">
<router-link  :to="{ path: `/blog/${id}`, params: {id} }">
           <a @click="setBlogPost">{{ title }} </a>
          </router-link> <br>
  <span> {{ getShortDescription }}</span>
</b-card>
</div>
</template>
<script>
export default {
  name: "BlogPost",
  props: {
    title: String,
    description: String,
    id: String,
  },
  methos: {
    setBlogPost(){
      this.$store.commit('setTitle', this.title);
    }
  },
  computed: {
    getShortDescription() {
      return `${this.description.substr(0, 100)}...`;
    },
  },
};
</script>
