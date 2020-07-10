<template>
  <div class="header">
    <div class="title">
      <router-link to="/adminhome">后台管理</router-link>
    </div>
    <div class="searchBox">
      <ASearch></ASearch>
    </div>
    <div class="userInfo">
      <div class="infoBox">
        <div class="message">
          <span class="iconfont">&#xe650;</span>
          <sup>50</sup>
        </div>
        <div class="user">
          <div class="avatar">
            <img :src="user_info.avatar" alt="头像" />
          </div>
          <div class="userName">
            <span>{{user_info.user_name}}</span>
            <span class="iconfont">&#xe603;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ASearch from "../../public/search";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["user_info"])
  },
  methods: {},
  components: {
    ASearch
  }
};
</script>

<style scoped lang='less'>
.header {
  box-sizing: border-box;
  z-index: 99999;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  border: 1px solid #bfbfbf;
  display: flex;
  background: #fff;
  .title {
    width: 260px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-right: 1px solid #bfbfbf;
    background: #fff;
    a {
      display: block;
      color: #353535;
      font-size: 22px;
      font-weight: 700;
    }
  }
  .searchBox {
    position: relative;
    width: 350px;
  }
  .userInfo {
    flex: 1;
    .infoBox {
      float: right;
      min-width: 250px;
      height: 60px;
      display: flex;
      .message {
        width: 50px;
        position: relative;
        span {
          font-size: 25px;
          line-height: 60px;
        }
        sup {
          position: absolute;
          display: inline-block;
          font-size: 16px;
          width: 20px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          top: 10px;
          border-radius: 50%;
          background: #ff0000;
          color: #fff;
        }
      }
      .user {
        flex: 1;
        display: flex;
        cursor: pointer;
        .avatar {
          width: 40px;
          height: 60px;
          margin: 0 5px;
          img {
            margin-top: 10px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #ddd;
          }
        }
        .userName {
          min-width: 100px;
          span {
            line-height: 60px;
            margin: 0 5px;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
