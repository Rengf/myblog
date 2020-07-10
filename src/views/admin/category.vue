<template>
  <div class="addCategory">
    <label for="name">类名：</label>
    <input type="text" placeholder="类名" v-model="category_name" />
    <textarea name="content" id cols="30" rows="10" v-model="category_content"></textarea>
    <button @click="addCategory">添加</button>
  </div>
</template>

<script>
import { addCategory } from "../../api/index";
export default {
  name: "AddCategory",
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
      console.log(result);
    }
  },
  components: {}
};
</script>

<style scoped>
</style>
