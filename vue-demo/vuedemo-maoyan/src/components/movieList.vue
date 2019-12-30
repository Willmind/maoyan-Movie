<template>
  <div>
    <div class="movie-list">
      <div class="movie-img">
        <img :src="mitem.img.replace('w.h','128.180')" alt>
      </div>
      <div class="right-info">
        <ul class="movie-info">
          <!--          name-->
          <li class="name">{{mitem.nm}}</li>
          <li class="score" v-if="mitem.globalReleased && mitem.sc!==0">
            观众评分
            <span>{{mitem.sc}}</span>
          </li>
          <li style="font-size: 14px;color: #888" v-if="mitem.globalReleased && mitem.sc==0">暂无评分</li>
          <li v-if="!mitem.globalReleased" class="score">
            <span>{{mitem.wish}}</span> 想看
          </li>
          <li class="actor">{{mitem.star}}</li>
          <li class="showinfo">{{mitem.showInfo}}</li>
        </ul>
        <div class="btn">
          <button v-if="mitem.globalReleased" class="buy-btn">购票</button>
          <button v-if="!mitem.globalReleased" class="pre-btn">预售</button>
        </div>


      </div>


    </div>

  </div>

</template>

<script>
    export default {
        name: "movieList",
        data() {
            return {}
        },
        props: ["mitem"],
        methods: {
            dataDetail() {
                this.$router.push({name: "movieDetail"})
            },
        },
        mounted() {
            console.log(this.mitem)
        }

    }
</script>

<style scoped>
  @import "../assets/css/movie-list.css";

</style>
