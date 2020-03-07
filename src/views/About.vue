<template>
  <div class="about">
    <h1>This is an about page:{{s}}</h1>
  </div>
</template>

<script>
    import store from '../store/index'
    export default {
        name:'About',
        store,
        data() {
            return{
                s:store.state.count
            }
        }

    }
</script>


