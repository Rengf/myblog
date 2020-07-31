<template>
  <div class="user">
    <div class="userlistbox">
      <div class="somebtn">
        <button @click="getuserlist(-1)">全部用户</button>
        <button @click="getuserlist(0)">普通用户</button>
        <button @click="getuserlist(1)">普通管理员</button>
        <button @click="getuserlist(2)">超级管理员</button>
      </div>
      <div class="userlist">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>用户名</th>
              <th>用户类型</th>
              <th>注册电话</th>
              <th>注册邮箱</th>
              <th>注册时间</th>
              <th>上次登录</th>
              <th>用户状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user,index) in user_list" :key="index">
              <td>{{index+1}}</td>
              <td>
                <router-link :to="{path:'/admin/userinfo?user_id='+user._id}">{{user.user_name}}</router-link>
              </td>
              <td>{{user.isadmin=='0'?'普通用户':(user.isadmin=='1'?'普通管理员':'超级管理员')}}</td>
              <td>{{user.user_tel}}</td>
              <td>{{user.user_email}}</td>
              <td>{{user.regist_time|dateformat('YYYY-MM-DD HH:mm:ss')}}</td>
              <td>{{user.last_login_time|dateformat('YYYY-MM-DD HH:mm:ss')}}</td>
              <td>{{user.status}}</td>
              <td>
                <button @click="deleteuser(user._id)">删除</button>
                <button @click="deleteuser(user._id)">编辑</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Pages :dataTotal="user_count" @pagechange="setpage"></Pages>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Pages from "../../../components/public/pages/index.vue";
export default {
  data() {
    return {
      is_admin: -1
    };
  },
  mounted() {
    this.getuserlist();
  },
  computed: {
    ...mapGetters(["user_list", "user_count"])
  },
  methods: {
    getuserlist(is_admin = -1, page = 1, limit = 10) {
      this.is_admin = is_admin;
      var data = { page: page, limit: limit, is_admin: is_admin };
      this.$store.dispatch("getUserList", data);
    },
    setpage(page, limit) {
      // console.log(page, limit);
      this.getuserlist(this.is_admin, page + 1, limit);
    }
  },
  components: {
    Pages
  }
};
</script>
<style scoped lang="less">
.userlistbox {
  padding: 20px;
  border: 1px solid #ccc;
  .userlist {
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
