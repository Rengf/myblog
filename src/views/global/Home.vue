<template>
  <div class="home">
    <GNav></GNav>
    <div class="body">
      <div class="main">
        <router-view></router-view>
      </div>
      <GSider></GSider>
    </div>
    <GFooter></GFooter>
  </div>
</template>

<script>
import GNav from "@/components/global/GNav";
import GSider from "@/components/global/GSider";
import GFooter from "@/components/global/GFooter";
export default {
  name: "Home",
  components: {
    GNav,
    GSider,
    GFooter
  }
};
</script>
<style scoped lang="less">
.home {
  width: 80%;
  margin: auto;
  .body {
    display: flex;
    border-left: 5px solid rgb(255, 128, 64);
    border-right: 5px solid rgb(255, 128, 64);
    .main {
      flex: 7;
      min-height: 800px;
    }
  }
}
</style>
