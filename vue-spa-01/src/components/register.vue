<template>
  <div class="register">
    <Form :model="loginForm" :label-width="80">
      <FormItem label="注册邮箱：">
        <AutoComplete
          v-model="loginForm.u_email"
          @on-search="searchEmail"
          placeholder="请输入电子邮箱地址"
        >
          <Option v-for="item in emails" :value="item" :key="item">{{ item }}</Option>
        </AutoComplete>
      </FormItem>
      <FormItem label="登录密码：">
        <Input v-model="loginForm.u_pwd" placeholder="请输入密码" type="password"></Input>
      </FormItem>
      <FormItem label="联系方式：">
        <Input v-model="loginForm.u_tel" placeholder="请输入手机号"></Input>
      </FormItem>
      <FormItem label="出生日期：">
        <DatePicker type="date" placeholder="选择日期" v-model="birthDayString"></DatePicker>
      </FormItem>
      <FormItem label="所在地：">
        <Select v-model="loginForm.u_province">
          <Option v-for="province in provinceList" :value="province.value" :key="province.value">{{province.name}}
          </Option>
        </Select>
        <Select v-model="loginForm.u_city">
          <Option v-for="city in cityList" :value="city.value" :key="city.value">{{city.name}}</Option>
        </Select>
      </FormItem>
      <FormItem label="性别：">
        <RadioGroup v-model="sexString">
          <Radio label="男"></Radio>
          <Radio label="女"></Radio>
          <Radio label="保密"></Radio>
        </RadioGroup>
      </FormItem>
    </Form>
    <Button @click="register">注册</Button>
    <Button @click="login">登陆</Button>
  </div>
</template>
<script>
  "use strict";
  export default {
    name: 'register',
    data() {
      return {
        /**
         * 保存表单数据
         **/
        loginForm: {
          u_pwd: null,
          u_email: null,
          u_tel: null,
          u_province: null,
          u_city: null,
          u_sex: this.sexCode,
          u_birth: this.getBirthDayCode,
        },
        /**
         * 列表数据
         * */
        emails: [],
        provinceList: [],
        cityList: [],
        sexString: '保密',
        birthDayString: null,
      }
    },
    watch: {
      loginForm: {
        handler: function () {
          /**
           * 城市列表导入
           * */
          let province = this.loginForm.u_province - 0;
          let data = JSON.parse(sessionStorage.getItem('pcData'))[province].citys;
          this.cityList = data.map((key, index) => {
            let pCode = province > 9 ? province + '' : '0' + province;
            let cCode = index > 9 ? index + '' : '0' + index;
            return {name: key.citysName, value: pCode + cCode};
          });
          /**
           * u_city将会随着province的改变而自动清除
           * 所以不需要执行清除u_city的js操作
           * */
        },
        deep: true//深度监听
      }
    },
    /**
     * 初始化
     * */
    created() {
      /**
       * 获取省市列表
       * */
      this.getPCData();
    },
    methods: {
      getBirthDayCode: function () {
        return this.birthDayString - 0;
      },
      /**
       * 性别文字转代码
       * */
      sexCode: function () {
        return ['保密', '男', '女'].indexOf(this.sexString);
      },
      register: function () {
        this.$axios
          .post('/api/users/register', this.loginForm)
          .then((data) => {
            console.log(data);
          }).catch(() => {
          alert('1231');
        });
      },
      login: function () {
        this.$router.replace({path: '/login'});
      },
      searchEmail: function (value) {
        this.emails = !value || value.indexOf('@') >= 0 ? [] : [
          value + '@qq.com',
          value + '@163.com',
          value + '@sina.com',
          value + '@yahoo.com'
        ]
      },
      /**
       * 获取服务器数据
       * */
      getPCData: function () {
        let self = this;
        this.$axios.get('/api/static/getProvinceList')
          .then((org) => {
            let provinces = org.data.provinces;
            sessionStorage.setItem('pcData', JSON.stringify(provinces));
            self.provinceList = provinces.map((key, index) => {
              let pCode = index > 9 ? index + '' : '0' + index;
              return {name: key.provinceName, value: pCode};
            });
          }).catch(() => {
        });
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../common.conf/theme";

  .register {
    width: 80%;
    margin: auto;
  }
</style>
