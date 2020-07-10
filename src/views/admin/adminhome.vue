<template>
  <div class="adminHome">
    <AHeader></AHeader>
    <ASider></ASider>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AHeader from "../../components/admin/AHeader";
import ASider from "../../components/admin/ASider";

export default {
  data() {
    return {};
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      var token = localStorage.getItem("token");
      this.$store.dispatch("getUserInfo", token);
    }
  },
  components: {
    AHeader,
    ASider
  }
};
</script>

<style scoped lang='less'>
.adminHome {
  .main {
    position: absolute;
    top: 60px;
    bottom: 0px;
    left: 260px;
    right: 0;
    padding: 20px 20px;
    background: #eee;
  }
}
</style>
