<template>
  <div>
    <div class="comming">即将上映</div>
    <button @click="dataDetail">点击进入电影详情页</button>
    <div class="comming">
      <movieList v-for="(c_item,index) in commingList" :key="index" :mitem="c_item"></movieList>

    </div>
  </div>


</template>

<script>
    import axios from "axios"
    import movieList from "./movieList";

    export default {
        name: "comming",
        components: {
            movieList
        },
        data() {
            return {
                commingList: [],
                hopefulList: [],
                imglistMarginLeft: 0,
                sumMarginLeft: 0
            }
        },

        methods: {
            dataDetail() {
                this.$router.push({name: "movieDetail"})
            },
        },
        created() {
            function getComingList() {
                return axios.get(
                    "http://www.softeem.xin/maoyanApi/ajax/comingList?ci=57&token=&limit=10"
                );
            }

            function getHopefulList() {
                return axios.get(
                    "http://www.softeem.xin/maoyanApi/ajax/mostExpected?ci=57&limit=10&offset=0&token="
                );
            }

            axios.all([getComingList(), getHopefulList()]).then(
                axios.spread((comRes, hopeRes) => {
                    this.comingList = comRes.data.coming;
                    this.hopefulList = hopeRes.data.coming;
                    console.log(this.comingList)
                    console.log(this.hopefulList);
                })
            );
        }


    }
</script>

<style scoped>
  @import "../assets/css/movie-list.css";

</style>
