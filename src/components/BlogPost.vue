<template>
<article v-if="currentArticle" class="blog-post fadeInOut">
<h1> {{ currentArticle.Title }} </h1>
<span class="article-content"> {{ currentArticle.Description }}
    <h3> {{ $t('tags') }} </h3>
    <p v-for="tag in currentArticle.Tags" v-bind:key="tag" class="article-tags"> {{ tag }} </p>
    <p class="article-author"> {{ `${$t('author')} : ${currentArticle.Author}` }} </p>
    <p class="article-date">{{ `${$t('date')} : ${currentArticle.created_at.substring(0, currentArticle.created_at.indexOf('T'))}`}} </p>
</span>
</article>
</template>
<script>
import DatabaseService from "../services/Database.service";
export default {
    name: 'BlogPost',
    data(){
        return{
        id: this.$route.params.id,
        postData: null,
        }
    },
    async created(){
     const database = new DatabaseService();
    this.database = database.getInstance();
    if(!this.$store.getters.getArticlesById(parseInt(this.id))){
      this.postData = await this.fetchData();
    }
    },
    methods: {
     /**
      * @description Method to fetch the article from the database in case it is not on the vuex store
      * @return Error in case the data is not found, an object with the data otherwise
      */
     async fetchData(){
      const { error, data } = await this.database
        .from('Blog')
        .select()
        .order('id')
        .eq('id', this.id);
        if (error) {
        console.error(error)
        return
      }
      this.$store.dispatch('setArticle', data[0]);
      return data[0];
    }
    },
    computed:{
       currentArticle(){
        return this.$store.getters.getArticlesById(parseInt(this.id)) ? this.$store.getters.getArticlesById(parseInt(this.id)): this.postData;
       }
    }
}
</script>
<style lang="scss">
@import 'src/styles/BlogPost.scss';
</style>