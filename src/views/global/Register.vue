<template>
  <div class="register">
    <div class="registerHeader">
      <span>欢迎登陆</span>
    </div>
    <div class="registerMain">
      <div class="registerBox">
        <div class="user">
          <label for="name">
            <span class="iconfont">&#xe604;</span>
          </label>
          <input type="text" name="name" placeholder="请输入电话号码" v-model="user_tel" />
        </div>
        <div class="user">
          <label for="email">
            <span class="iconfont">&#xe604;</span>
          </label>
          <input type="text" name="email" placeholder="请输入邮箱" v-model="user_email" />
        </div>
        <div class="user">
          <label for="password">
            <span class="iconfont">&#xe62f;</span>
          </label>
          <input type="password" name="password" placeholder="请输入密码" v-model="password" />
        </div>
        <div class="btn">
          <div class="btnBox">
            <button @click="register">注册</button>
          </div>
          <div class="btnBox">
            <button @click="login">登陆</button>
          </div>
        </div>
      </div>
    </div>
    <GFooter></GFooter>
  </div>
</template>

<script>
import GFooter from "@/components/global/GFooter";
import { Register } from "../../api/index";
export default {
  data() {
    return {
      user_tel: "",
      password: "",
      user_email: ""
    };
  },
  methods: {
    register() {
      var data = {
        user_tel: this.user_tel,
        user_email: this.user_email,
        password: this.password
      };

      var result = Register(data);
      result.then(res => {
        console.log(res);
      });
    },
    login() {
      this.$router.push("/login");
    }
  },
  components: {
    GFooter
  }
};
</script>

<style scoped lang="less">
.register {
  width: 100%;

  .registerHeader {
    width: 100%;
    height: 80px;
    background: #fff;
    position: relative;
    span {
      position: absolute;
      line-height: 80px;
      right: 20%;
      letter-spacing: 1px;
      font-weight: 500;
    }
  }
  .registerMain {
    position: relative;
    width: 100%;
    height: 800px;
    background: linear-gradient(rgb(248, 108, 50), rgb(255, 172, 104));
    .registerBox {
      width: 400px;
      height: 450px;
      background: #fff;
      border-radius: 5px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .userName {
        margin-top: 20px;
      }
      .user {
        width: 80%;
        margin: auto;
        height: 80px;
        display: flex;
        &:nth-child(1) {
          margin-top: 20px;
        }
        label {
          line-height: 80px;
          margin-right: 10px;
          .iconfont {
            color: rgb(248, 108, 50);
            font-size: 30px;
          }
        }
        input {
          flex: 1;
          outline: none;
          border: none;
          height: 30px;
          margin-top: 20px;
          font-size: 16px;
          line-height: 40px;
          border-bottom: 1px solid #ccc;
          color: #666;
        }
      }
      .btn {
        width: 100%;
        .btnBox {
          width: 200px;
          height: 50px;
          margin: 20px auto;
          button {
            width: 200px;
            height: 50px;
            line-height: 50px;
            font-size: 18px;
            border-radius: 25px;
            color: rgb(248, 108, 50);
            border: 2px solid rgb(248, 108, 50);
            outline: none;
            background: #fff;
            font-weight: 550;
            cursor: pointer;
            &:hover {
              background: rgb(248, 108, 50);
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
