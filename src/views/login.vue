<template>
  <div class="hello">
    <h1>登录</h1>
    <el-card class="box-card">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item label="账号" prop="account">
          <el-input v-model="ruleForm.account" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import { requestLogin } from '../api/api'
export default {
  name: 'login',
  props: {
    msg: String
  },
  data () {
    return {
      ruleForm: {
        account: '',
        pass: ''
      },
      rules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 3, max: 30, message: '长度在 3 到 30 个字符', trigger: 'blur' }
        ],
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var param = {
            username: '申晓亮',
            password: '666'
          }
          this.$message('顶顶顶顶')
          requestLogin(param).then((res) => {
            if (res.code === 500) {
            } else if (res.code === 200) {
              sessionStorage.setItem('username', res.user.name)
              sessionStorage.setItem('uid', res.user.id)
              this.$router.togo('/home')
            }
          }).catch((e) => {
            console.log(e)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.box-card {
  width: 500px;
  margin: 0 auto;
  padding: 40px 20px 20px 20px;
}

</style>
