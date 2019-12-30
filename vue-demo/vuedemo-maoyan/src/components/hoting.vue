<template>
  <div>
    <div class="hoting">

      <movieList v-for="(h_item,index) in hotList" :key="index" :mitem="h_item"></movieList>


    </div>

  </div>

</template>

<script>
    import axios from "axios"
    import movieList from "./movieList";

    export default {
        name: "hoting",
        components: {
            movieList
        },
        data() {
            return {
                hotList: []

            }
        },
        methods: {
            dataDetail() {
                this.$router.push({name: "movieDetail"})
            },
        },
        created() {
            axios.get("http://www.softeem.xin/maoyanApi/ajax/movieOnInfoList").then(res => {
                this.hotList = res.data.movieList
            })
        }
    }
</script>

<style scoped>

</style>
