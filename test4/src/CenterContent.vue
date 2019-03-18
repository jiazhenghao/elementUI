<template>
  <div id="center">
    <ai-button :btnlist="btnlist"></ai-button>
  </div>
</template>

<script>
     import AiButton from "./AiButton.vue";
    export default {
      el:"#center",
      components: {
        AiButton,
      },
      name: "center-Content",
      data() {
        return {
          btnlist:{
            btnId:"1001",
            type:"primary",
            size:"",
            buttonName:"点击",
            afterIcon:true,
            iconName:"el-icon-arrow-right",
          }
        }
      },
    }
</script>

<style scoped>

</style>
