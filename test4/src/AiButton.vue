<template>
  <el-button
    :type="btnlist.type"
    :size="btnlist.size"
    :plain="btnlist.plain"
    :round="btnlist.round"
    :circle="btnlist.circle"
    :loading="btnlist.loading"
    :disabled="btnlist.disabled"
    :autofocus="btnlist.autofocus"
    :icon="btnlist.icon"
    :native-type="btnlist.nativetype"
    @click="btnClick()"
  >
    {{btnlist.buttonName}}
    <i v-if="btnlist.afterIcon" :class="btnlist.iconName"></i>
  </el-button>
</template>

<script>
export default {
  name: "ai-button",
  props: {
    btnlist: {
      //配置按钮的配置条件
      type: Object,
      default() {
        return {
          btnId: "",
          type: "",
          size: "",
          plain: false,
          round: false,
          circle: false,
          loading: false,
          disabled: false,
          autofocus: false,
          icon: "",
          nativetype: false,
          afterIcon: false,
          iconName: "",
          buttonName: ""
        };
      }
    }
  },
  methods: {
    btnClick: function() {
      console.log(this.btnlist.btnId); //.根据btnid给按钮增加业务逻辑
      this.disabled = true;
    }
  }
};
</script>

<style scoped>
</style>
