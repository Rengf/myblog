<template>
  <div class="article">
    <div class="articlelistbox">
      <div class="somebtn">
        <button @click="getarticlelist(-2)">全部文章</button>
        <button @click="getarticlelist(1)">已发布文章</button>
        <button @click="getarticlelist(0)">草稿列表</button>
        <button @click="getarticlelist(-1)">其他文章</button>
      </div>
      <div class="articlelist">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>文章名</th>
              <th>文章类型</th>
              <th>阅读次数</th>
              <th>评论数量</th>
              <th>点赞数量</th>
              <th>发布时间</th>
              <th>修改时间</th>
              <th>文章状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(article,index) in article_list" :key="index">
              <td>{{index+1}}</td>
              <td>
                <router-link
                  :to="{path:'/admin/articleinfo?article_id='+article._id}"
                >{{article.article_title}}</router-link>
              </td>
              <td>{{article.article_category.category_name}}</td>
              <td>{{article.article_views}}</td>
              <td>{{article.article_comment_count}}</td>
              <td>{{article.article_like_count}}</td>
              <td>{{article.article_time|dateformat('YYYY-MM-DD HH:mm:ss')}}</td>
              <td>{{article.last_modified_time|dateformat('YYYY-MM-DD HH:mm:ss')}}</td>
              <td>{{article.status}}</td>
              <td>
                <button @click="deletearticle(article._id)">删除</button>
                <button @click="deletearticle(article._id)">编辑</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Pages :dataTotal="article_count" @pagechange="setpage"></Pages>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Pages from "../../../components/public/pages/index.vue";
export default {
  data() {
    return {
      status: 1,
      article_category: ""
    };
  },
  mounted() {
    this.getarticlelist();
  },
  computed: {
    ...mapGetters(["article_list", "article_count"])
  },
  methods: {
    getarticlelist(status = 1, page = 1, limit = 10) {
      this.status = status;
      var data = {
        page: page,
        limit: limit,
        status: this.status,
        article_category: this.article_category
      };
      this.$store.dispatch("getArticleList", data);
    },
    setpage(page, limit) {
      this.getarticlelist(this.status, page + 1, limit);
    }
  },
  components: {
    Pages
  }
};
</script>
<style scoped lang="less">
.articlelistbox {
  padding: 20px;
  border: 1px solid #ccc;
  .articlelist {
    margin-top: 20px;
    table {
      width: 100%;
      thead > tr {
        color: #707070;
        font-weight: normal;
        background: #f2f2f2;
        background-image: -webkit-gradient(
          linear,
          left 0,
          left 100%,
          from(#f8f8f8),
          to(#ececec)
        );
        background-image: -webkit-linear-gradient(
          top,
          #f8f8f8,
          0%,
          #ececec,
          100%
        );
        background-image: -moz-linear-gradient(top, #f8f8f8 0, #ececec 100%);
        background-image: linear-gradient(to bottom, #f8f8f8 0, #ececec 100%);
        background-repeat: repeat-x;
      }
      th {
        height: 29px;
        line-height: 29px;
        padding: 5px 10px;
        vertical-align: middle;
        border: 1px solid #ddd;
        font-size: 14px;
        color: #666;
        text-align: center;
      }
      td {
        padding: 5px 30px;
        line-height: 30px;
        vertical-align: middle;
        border: 1px solid #ddd;
        color: #666;
        text-align: center;
        font-size: 12px;
        button {
          width: 70px;
          margin: 0 5px;
          outline: 0;
          background: #3a8ee6;
          border: 0px;
          color: #fff;
          cursor: pointer;
          border-radius: 3px;
          &:hover {
            background: #3a56e6;
          }
        }
      }
    }
  }
  .somebtn {
    width: 100%;
    height: 50px;
    button {
      margin-top: 7px;
      margin-right: 10px;
      color: #fff;
      background: #438eb9;
      border: none;
      width: 100px;
      height: 36px;
      border-radius: 3px;
      cursor: pointer;
      outline: none;
      &:hover {
        background: #4356b9;
      }
    }
  }
}

tr:hover {
  background: rgb(174, 241, 253);
}
</style>
