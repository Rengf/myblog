<template>
  <div class="search">
    <input type="text" placeholder="请输入搜索内容" maxlength="30" />
    <span class="iconfont">&#xe61c;</span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang='less'>
.search {
  width: 300px;
  height: 40px;
  margin: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  border: 1px solid #aaa;
  input {
    width: 240px;
    height: 40px;
    padding: 0 10px;
    line-height: 50px;
    font-size: 16px;
    color: #888;
    border: none;
    outline: none;
    border-radius: 3px;
  }
  span {
    font-size: 20px;
    text-align: center;
    line-height: 40px;
    float: right;
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    border-left: 2px solid #aaa;
    cursor: pointer;
  }
}
</style>
