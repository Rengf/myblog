<template>
  <div class="sider">
    <div class="searchBox">
      <GSearch></GSearch>
    </div>
    <div class="categoryBox">
      <div class="categoryTitle">
        <h2>文章分类</h2>
      </div>
      <div class="categoryList">
        <ul class="listBox">
          <li class="list" v-for="(category,index) in category_list" :key="index">
            <span class="iconfont">&#xe684;</span>
            <router-link :to="'/category?id='+category._id">{{category.category_name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="categoryBox">
      <div class="categoryTitle">
        <h2>最新文章</h2>
      </div>
      <div class="categoryList">
        <ul class="listBox">
          <li class="list" v-for="article in new_article_list" :key="article._id">
            <span class="iconfont">&#xe601;</span>
            <router-link :to="'/article?id='+article._id">{{article.article_title}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import GSearch from "../../public/search";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["category_list", "new_article_list"])
  },
  mounted() {
    this.getdatalist();
  },
  methods: {
    getdatalist() {
      this.$store.dispatch("getNewArticleList");
      this.$store.dispatch("getCategoryList");
    }
  },
  components: {
    GSearch
  }
};
</script>

<style scoped lang="less">
.sider {
  flex: 3;
  min-height: 800px;
  background: rgb(238, 231, 223);
  .searchBox {
    position: relative;
    width: 90%;
    height: 100px;
    border: 1px solid #aaa;
    margin: 10px auto;
  }
  .categoryBox {
    width: 90%;
    margin: 10px auto;
    min-height: 500px;
    border: 1px solid #aaa;
    .categoryTitle {
      width: 100%;
      height: 50px;
      margin: 10px auto;
      line-height: 50px;
      h2 {
        margin-left: 20px;
        font-size: 22px;
        font-weight: 600;
        border-bottom: 2px solid #bac123;
      }
    }
    .categoryList {
      width: 100%;
      .listBox {
        width: 100%;
        .list {
          margin-left: 20px;
          height: 30px;
          line-height: 30px;
          a {
            margin-left: 10px;
            font-size: 14px;
            color: #777;
            display: inline-block;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
