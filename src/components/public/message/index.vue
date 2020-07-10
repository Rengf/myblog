<template>
  <div :class="['messageBox',activeClass]" v-show="visible">
    <span class="messageType">√</span>
    <span class="messageContent">{{messageContent}}</span>
    <span class="close" v-show="showClose" @click="visible=false">×</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      activeClass: "success",
      messageContent: "成功",
      showClose: true
    };
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
.messageBox {
  z-index: 99999;
  position: fixed;
  min-width: 300px;
  height: 40px;
  line-height: 40px;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
  padding: 0 20px;
  .messageType {
    margin-right: 5px;
  }
  .messageContent {
    font-size: 14px;
    font-weight: 540;
  }
  .close {
    position: absolute;
    right: 15px;
    text-align: center;
    color: #888;
    font-size: 26px;
    font-weight: bold;
    cursor: pointer;
  }
}
.success {
  background: #f0f9eb;
  border: 1px solid #e1f3d8;
  color: #67c23a;
}
.warning {
  background: #fdf6ec;
  border: 1px solid #faecd8;
  color: #e6a23c;
}
.error {
  background: #fef0f0;
  border: 1px solid #fde2e2;
  color: #f56c6c;
}
</style>
