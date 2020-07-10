<template>
  <div class="addArticle">
    <div class="articleName">
      <label for="articlename">文章标题：</label>
      <input name="articlename" type="text" placeholder="请输入文章标题" v-model="article_title" />
    </div>
    <div class="articleCategory">
      <div class="name">文章类别：</div>
      <div class="categoryList">
        <div class="select" @click="showCategory">
          <span>{{category_name}}</span>
          <span class="iconfont">&#xe603;</span>
        </div>
        <ul v-show="isShowCategory">
          <li
            v-for="(category,index) in category_list"
            :key="index"
            @click="selectCategory(category.category_name,category._id)"
          >{{category.category_name}}</li>
          <li>css</li>
          <li>js</li>
        </ul>
      </div>
    </div>
    <div class="articleContent">
      <label for="articlename">文章内容：</label>
      <mavon-editor v-model="article_content"></mavon-editor>
    </div>
    <div class="btn">
      <button @click="addArticle(1)">添加文章</button>
      <button @click="addArticle(0)">添加草稿</button>
    </div>
  </div>
</template>

<script>
import { addArticle } from "../../../api/index";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      article_title: "",
      article_content: "",
      category_id: "请选择文章类别",
      category_name: "请选择文章类别",
      isShowCategory: false
    };
  },
  mounted() {
    this.$store.dispatch("getCategoryList");
  },
  computed: {
    ...mapGetters(["category_list"])
  },
  methods: {
    showCategory() {
      this.isShowCategory = !this.isShowCategory;
    },
    selectCategory(category_name, category_id) {
      this.category_name = category_name;
      this.category_id = category_id;
      this.showCategory();
    },
    addArticle(status) {
      var data = {
        article_title: this.article_title,
        article_content: this.article_content,
        category_id: this.category_id,
        status: status
      };
      var result = addArticle(data);
      result.then(res => {
        this.$message({
          type: "success",
          msg: res.message,
          duration: 3000,
          showClose: true
        });
      });
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.addArticle {
  .articleName {
    height: 50px;
    line-height: 50px;
    label {
      display: inline-block;
      width: 100px;
      letter-spacing: 2px;
      height: 50px;
    }

    input {
      width: 200px;
      height: 30px;
      border-radius: 3px;
      outline: none;
      border: 1px solid #555;
    }
  }
  .articleCategory {
    display: flex;
    height: 30px;
    line-height: 30px;
    .name {
      display: inline-block;
      width: 100px;
      letter-spacing: 2px;
      height: 50px;
    }

    .categoryList {
      z-index: 9999;
      width: 200px;
      height: 30px;
      border-radius: 3px;
      background: #fff;
      .select {
        position: relative;
        width: 100%;
        height: 30px;
        cursor: pointer;
        span {
          margin-left: 10px;
          font-size: 14px;
          color: #888;
        }
        .iconfont {
          position: absolute;
          right: 5px;
        }
      }
      ul {
        width: 100%;
        min-height: 30px;
        border: 1px solid #eee;
        background: #fff;
        cursor: pointer;

        li {
          height: 30px;
          line-height: 30px;
          padding: 0 15px;
          box-sizing: content-box;
          &:hover {
            background: rgb(85, 165, 255);
            color: #fff;
          }
        }
      }
    }
  }
  .articleContent {
    label {
      display: inline-block;
      width: 100px;
      letter-spacing: 2px;
      height: 50px;
      line-height: 50px;
    }
  }
  .btn {
    width: 100%;
    height: 50px;
    margin-top: 20px;
    button {
      margin-right: 50px;
      width: 200px;
      height: 50px;
      border: none;
      outline: none;
      color: #fff;
      background: rgb(255, 128, 64);
      border-radius: 5px;
      cursor: pointer;
    }
  }
}
</style>
