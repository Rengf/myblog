<template>
  <div class="sider">
    <ul class="siderList">
      <li class="list" v-for="(sider,index) in siderlist" :key="index">
        <span class="iconfont" v-html="sider.icon"></span>
        <router-link :to="sider.url">{{sider.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      siderlist: [
        { icon: "&#xe618;", name: "首页", url: "/admin" },
        { icon: "&#xe61a;", name: "用户管理", url: "/admin/userlist" },
        { icon: "&#xe629;", name: "发布文章", url: "/admin/addarticle" },
        { icon: "&#xe605;", name: "文章管理", url: "/admin/articlelist" },
        { icon: "&#xe86f;", name: "添加分类", url: "/admin/addcategory" },
        { icon: "&#xe684;", name: "分类管理", url: "/admin/categorylist" },
        { icon: "&#xe685;", name: "数据统计", url: "/admin/datastatistics" }
      ]
    };
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang='less'>
.sider {
  width: 260px;
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  background: #bac15a;
  z-index: 0;
  .siderList {
    width: 100%;
    margin-top: 60px;
    .list {
      width: 100%;
      height: 60px;
      border-bottom: 1px solid #778778;
      line-height: 60px;
      cursor: pointer;
      span {
        margin: 0 20px;
      }
      a {
        color: #444;
      }
    }
  }
}
</style>
