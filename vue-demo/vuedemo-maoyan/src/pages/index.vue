<template>
  <div>
    <div class="top">
      <page-title >猫眼电影</page-title>
      <ul class="topNav" v-if="showMainType==='film'">
        <li :class="[showHot==1?'active':'']" @click="showHot=1">正在热映</li>
        <li :class="[showHot==0?'active':'']" @click="showHot=0">即将上映</li>
      </ul>
    </div>

    <div class="main">
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
        components: {
            hoting,
            comming,
            // cinima,
            // mine

        },
        data() {
            return {
                showHot: 1,
                showMainType: 'film'
            }
        }
    }
</script>

<style scoped>
  .active {
    color: rgb(229, 72, 71);
    border-bottom: 2px solid rgb(229, 72, 71)
  }

  .pageTitle {
    height: 51px;
    width: 100%;
    background-color: rgb(229, 72, 71);
    text-align: center;
    line-height: 51px;
    color: aliceblue;
    font-size: 1.1em;
  }

  .topNav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .topNav li {
    padding: 8px;
    cursor: pointer;
  }

  .active {
    color: rgb(229, 72, 71);
    border-bottom: 2px solid rgb(229, 72, 71);
  }

  .main {
    padding: 50px;
  }

</style>
