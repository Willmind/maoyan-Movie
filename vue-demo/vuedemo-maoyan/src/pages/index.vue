<template>
  <div>
    <div class="pageTitle">猫眼电影</div>
    <ul>
      <li :class="[showHot==1?'active':'']" @click="showHot=1">正在热映</li>
      <li :class="[showHot==0?'active':'']" @click="showHot=0">即将上映</li>
    </ul>

    <div>
      <hoting v-if="showHot==1"></hoting>
      <comming v-if="showHot==0"></comming>
    </div>
  </div>

</template>

<script>
  import hoting from "../components/hoting";
  import comming from "../components/comming";
    export default {
        name: "index",
        components:{
            hoting,
            comming
        },
        data(){
            return{
                showHot:1
            }
        }
    }
</script>

<style scoped>
  .active{
    color: rgb(229,72,71);
    border-bottom: 2px soild rgb(229,72,71);
  }

</style>
