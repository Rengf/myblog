<template>
  <div class="nav">
    <ul class="navList">
      <li v-for="(nav,index) in navList" :key="index">
        <router-link :to="nav.url">{{nav.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { name: "首页", url: "/" },
        { name: "文章分类", url: "/about" },
        { name: "最新文章", url: "/home" },
        { name: "热门文章", url: "/about" },
        { name: "关于博主", url: "/home" }
      ]
    };
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
.nav {
  position: relative;
  width: 100%;
  height: 50px;
  .navList {
    position: absolute;
    width: 100%;
    height: 50px;
    display: flex;
    left: 50%;
    transform: translateX(-50%);
    list-style: none;
    background: rgb(255, 128, 64);
    line-height: 50px;
    text-align: center;
    li {
      flex: 1;
      a {
        display: block;
        width: 100%;
        height: 50px;
        color: #fff;
        font-weight: 800;
        text-decoration: none;
      }
      &:nth-child(1) {
        border-right: 2px solid #abea34;
      }
      &:nth-child(2) {
        border-right: 2px solid #abea34;
      }
      &:nth-child(3) {
        border-right: 2px solid #abea34;
      }
      &:nth-child(4) {
        border-right: 2px solid #abea34;
      }
    }
  }
}
</style>
