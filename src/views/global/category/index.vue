<template>
  <div class="category" v-if="category">
    <div class="categoryInfo">
      <h2>类别:{{category.category_name}}</h2>
      <p>
        <span>添加时间：{{category.category_time|dateformat('YYYY/MM/DD HH:mm:ss')}}</span>
        <span>文章数量：{{category.category_count}}</span>
      </p>
      <article>{{category.category_content}}</article>
    </div>
    <div class="articleList">
      <ul class="listBox">
        <li class="list" v-for="(article,index) in article_list" :key="article._id">
          <span>{{index+1}}、</span>
          <router-link
            :to="'/article?id='+article._id"
            class="articleTitle"
          >{{article.article_title}}</router-link>
          <div class="aticleInfo">
            <ul class="infoBox">
              <li class="infoItem">
                <i>发布日期：{{article.article_time|dateformat('YYYY/MM/DD HH:mm:ss')}}</i>
              </li>
              <li class="infoItem">
                <i>
                  阅读次数：
                  <router-link to="/category?id=1">{{article.article_views}}</router-link>
                </i>
              </li>
              <li class="infoItem">
                <i>评论：{{article.article_comment_count==0?"暂无评论":article.article_comment_count}}</i>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <Pages :dataTotal="article_count" @pagechange="setpage"></Pages>
  </div>
</template>

<script>
import Pages from "../../../components/public/pages";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  mounted() {
    var data = { id: this.$route.query.id };
    this.getCategory(data);
    this.getArticleList(1, 5, this.$route.query.id);
  },
  computed: {
    ...mapGetters(["category", "article_list", "article_count"])
  },
  watch: {
    $route: {
      handler() {
        this.getArticleList(1, 5, this.$route.query.id);
      },
      deep: true
    }
  },
  methods: {
    getCategory(data) {
      this.$store.dispatch("getCategory", data);
    },
    getArticleList(page = 1, limit = 5, categoryId) {
      var data = { page: page, limit: limit, article_category: categoryId };
      this.$store.dispatch("getArticleList", data);
    },
    setpage(page, limit) {
      this.getArticleList(page + 1, limit, this.$route.query.id);
    }
  },
  components: { Pages }
};
</script>

<style scoped lang="less">
.category {
  width: 95%;
  margin: auto;
  .categoryInfo {
    width: 100%;
    min-height: 200px;
    h2 {
      height: 50px;
      font-size: 26px;
      font-weight: 600;
      text-align: center;
      line-height: 50px;
    }
    p {
      width: 100%;
      height: 30px;
      line-height: 30px;
      font-size: 18px;
      font-weight: 550;
      span {
        margin-right: 20px;
      }
    }
    article {
      line-height: 30px;
    }
  }
  .articleList {
    width: 100%;
    .listBox {
      width: 100%;
      .list {
        width: 100%;
        height: 70px;
        border-bottom: 1px solid #32ac54;
        margin-bottom: 10px;
        span {
          font-size: 18px;
          font-weight: 555;
          color: #555;
        }
        .articleTitle {
          font-size: 18px;
          font-weight: 555;
          color: #555;
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
      }
    }
  }
}
</style>
