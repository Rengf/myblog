<template>
  <div class="footer">
    <p>
      <span>Copyright 2020 by Renguofeng</span>
      <a href="http://www.beian.miit.gov.cn/">渝ICP备18004455号-1</a>
    </p>
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
.footer {
  width: 100%;
  height: 100px;
  background: rgb(255, 128, 64);
  text-align: center;
  p {
    width: 100%;
    display: block;
    line-height: 100px;
    color: #ddd;
    font-size: 15px;
    a {
      color: #fff;
      font-size: 15px;
    }
  }
}
</style>
