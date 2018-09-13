<template>
<div>
    <Count></Count>
    <ShowCount :msg1="msg"></ShowCount>

</div>
</template>
  
<script>
   import Count from './components/Count.vue' 
   import ShowCount from './components/ShowCount.vue' 
   
   export default {

       data(){
           return {
               msg: '这是父组件的数组的数据'
           }
       },

       components: {
           Count,
           ShowCount
       }
       


   }

</script>  

<style lang="scss" scoped>
   
</style>
