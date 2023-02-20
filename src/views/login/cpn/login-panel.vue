<!-- VueWithTS -->

<template>
  <div class="login-panel">
    <div class="title">
      <h1>系统登录</h1>
    </div>
    <el-form
      ref="formRef"
      :model="accountData"
      :rules="loginRules"
      label-width="100px"
      style="max-width: 460px"
      label-position="right"
    >
      <el-tabs v-model="activeTabs" @tab-click="handleClick">
        <!-- 账号密码登录验证 -->
        <el-tab-pane label="账号密码登录" name="first">
          <el-form-item label="账号" prop="name">
            <el-input v-model="accountData.name" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="accountData.password" show-password />
          </el-form-item>
        </el-tab-pane>
        <!-- 手机验证码登录验证 -->
        <el-tab-pane label="手机验证码登录" name="second">
          <el-form-item label="手机号" prop="name">
            <el-input v-model="phoneData.phoneNum" placeholder="请输入您的手机号"></el-input
          ></el-form-item>
          <el-form-item label="验证码" prop="password">
            <div class="verify-code">
              <el-input
                label="验证码"
                v-model="phoneData.verifyCode"
                placeholder="请输入您的验证码"
                maxlength="6"
                show-word-limit
                show-password
              ></el-input>
              <el-button>获取验证码</el-button>
            </div>
          </el-form-item>
        </el-tab-pane>
      </el-tabs>
      <div class="operation">
        <el-checkbox v-model="isRemember">记住我</el-checkbox>
        <el-link type="primary">忘记密码?</el-link>
      </div>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="handleLoginClick(formRef)">立即登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus';
import type { TabsPaneContext } from 'element-plus/es/tokens/tabs';
import localCache from '@/utils/cache';
import { useUserStore } from '@/stores/modules/login';
const activeTabs = ref('first');

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};

const accountData = reactive({
  name: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? ''
});

const phoneData = reactive({
  phoneNum: undefined,
  verifyCode: undefined
});

const isRemember = ref(true);

// 前端登录只需要判断用户名密码存在与否即可，无需强度校验，后续会说到。
const loginRules = reactive<FormRules>({
  name: [{ required: true, message: '账户不能为空', trigger: 'blur' }],
  password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
});

const formRef = ref<FormInstance>();

const handleLoginClick = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid: boolean, fields) => {
    if (valid) {
      // 表单校验成功后，业务逻辑
      // 1.缓存用户名与密码
      if (isRemember.value) {
        localCache.setCache('name', accountData.name);
        localCache.setCache('password', accountData.password);
      } else {
        localCache.deleteCache('name');
        localCache.deleteCache('password');
      }

      // 2.登录 获取token
      const userStore = useUserStore();
      // eslint-disable-next-line no-unused-vars
      const result = await userStore.login(accountData);
      console.log(userStore.$state.token);
      console.log('已经获取token');
    } else {
      console.log('error submit!', fields);
    }
  });
};
</script>

<style lang="less" scoped>
.login-panel {
  width: 390px;
  padding: 15px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
  .title {
    p {
      font-size: 12px;
      color: #999;
    }
  }
  .operation {
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    width: 100%;
  }
  // ::v-deep .el-form-item__content {
  //   margin-left: 0px !important;
  // }
  .verify-code {
    display: flex;

    .el-button {
      margin-left: 10px;
    }
  }
}
</style>
