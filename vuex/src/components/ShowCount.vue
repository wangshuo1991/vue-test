<template>
<div>
    <!-- <p>这里就是上边的数字: {{$store.state.count}}</p> -->
    <p>{{$store.getters.opt}}</p>
   
</div>
</template>
  
<script>
    
    export default {
        data(){
            return {
                msg: 0
            }
        },
        props: ['msg1']
    }

</script>  

<style lang="scss" scoped>
   
</style>