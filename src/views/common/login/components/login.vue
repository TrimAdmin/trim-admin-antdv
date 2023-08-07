<script setup lang="ts"></script>

<template>
  <div class="w-[500px] min-w-[500px] mx-auto">
    <ATypographyTitle :level="2">登录</ATypographyTitle>
    <AForm>
      <AFormItem>
        <AInput placeholder="请输入用户名" size="large" />
      </AFormItem>
      <AFormItem>
        <AInputPassword placeholder="请输入密码" size="large" />
      </AFormItem>
      <AFormItem>
        <div class="flex justify-between items-center">
          <ACheckbox>记住密码</ACheckbox>
          <AButton type="link">忘记密码？</AButton>
        </div>
      </AFormItem>
      <AFormItem>
        <AButton type="primary" block size="large">登录</AButton>
      </AFormItem>
    </AForm>
  </div>
</template>

<style scoped lang="scss"></style>
