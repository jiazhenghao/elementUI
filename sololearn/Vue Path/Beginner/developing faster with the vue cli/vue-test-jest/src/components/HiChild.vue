<template>
    <div>
        <h2>The child says {{ message }}</h2>
        <div class="error" v-if="error">{{ error }}</div>
    </div>
</template>

<script>
    export default {
        props: {
            message: {
                type: String,
                default: ""
            }
        },
        computed: {
            error() {
                return this.message.trim().length < 3 ? 
                    "The child can say bigger words than that !" : "";
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>