<template>
  <div class="addCategory">
    <div class="categoryName">
      <label for="categoryname">分类名称：</label>
      <input name="categoryname" type="text" placeholder="请输入分类名称" v-model="category_name" />
    </div>
    <div class="categoryContent">
      <label for="categoryname">分类介绍：</label>
      <mavon-editor v-model="category_content"></mavon-editor>
    </div>
    <div class="btn">
      <button @click="addCategory">添加</button>
    </div>
  </div>
</template>

<script>
import { addCategory } from "../../../api/index";
export default {
  data() {
    return {
      category_name: "",
      category_content: ""
    };
  },
  methods: {
    addCategory() {
      var data = {
        category_name: this.category_name,
        category_content: this.category_content
      };
      var result = addCategory(data);
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
.addCategory {
  .categoryName {
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
  .categoryContent {
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
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
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
