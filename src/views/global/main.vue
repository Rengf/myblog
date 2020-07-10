<template>
  <div class="articleList">
    <div class="articleIntro" v-for="(article,index) in article_list" :key="index">
      <h3 class="articleTitle">{{article.article_title}}</h3>
      <div class="aticleInfo">
        <ul class="infoBox">
          <li class="infoItem">
            <i>发布日期：{{article.article_time|dateformat('YYYY/MM/DD HH:mm:ss')}}</i>
          </li>
          <li class="infoItem">
            <i>
              文章类别：
              <router-link to="/category?id=1">{{article.article_category.category_name}}</router-link>
            </i>
          </li>
          <li class="infoItem">
            <i>评论：{{article.article_comment_count==0?"暂无评论":article.article_comment_count}}</i>
          </li>
        </ul>
      </div>
      <div class="articleMain">
        <GArticle :article="article.article_content"></GArticle>
      </div>
      <div class="moreBtn">
        <router-link :to="'/article?id='+article._id">更多内容</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import GArticle from "../../components/public/makehtml";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["article_list"])
  },
  created() {
    this.getArticleList();
  },
  methods: {
    getArticleList() {
      var data = { page: 1, limit: 5 };
      this.$store.dispatch("getArticleList", data);
    }
  },
  components: { GArticle }
};
</script>

<style scoped lang="less">
.articleList {
  width: 100%;
  // background: #bf71c9;
  .articleIntro {
    width: 95%;
    padding: 10px;
    margin: 5px auto;
    min-height: 210px;
    border: 1px solid #eee;
    .articleTitle {
      width: 100%;
      height: 50px;
      line-height: 50px;
      font-size: 22px;
      font-weight: 600;
      color: #222;
    }
    .aticleInfo {
      width: 100%;
      height: 30px;
      .infoBox {
        width: 100%;
        height: 30px;
        display: flex;
        .infoItem {
          width: 300px;
          height: 30px;
          font-size: 16px;
          color: #453342;
          line-height: 30px;
          a {
            color: rgb(237, 28, 36);
          }
        }
      }
    }
    .articleMain {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      line-height: 26px;
    }
    .moreBtn {
      margin-top: 10px;
      width: 100%;
      height: 50px;
      a {
        display: block;
        width: 150px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        background: rgb(255, 128, 64);
        border-left: 10px solid #bac1ac;
      }
    }
  }
}
</style>
