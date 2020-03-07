<template>
    <div id="count">
        状态计数器+1
        <button @click="handleAdd">点我自增</button>
        <div>计数器:{{count}}</div>
    </div>
</template>

<script>
    import store from '../store/index'

    export default {
        name: "Count",
        store,
        computed:{
            count(){
                return store.state.count
            }
        },
        methods: {
            handleAdd() {
                store.commit('increase')
            }
        }
    }
</script>

<style scoped>

</style>
