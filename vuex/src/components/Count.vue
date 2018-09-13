<template>
    <div class="container">
        <input type="button" value="-" @click="mins()" class="btn"> <input class="ipt" type="text" v-model="$store.state.count"> <input type="button" value="+" @click="add()" class="btn">
    </div>
</template>
  
<script>
    
    export default {

       data(){
           return {
               //count: 0
           }
       },
       methods: {
           mins(){
               // 不要这么用minsment
               //this.$store.state.count --;
               this.$store.commit('minsment')
           },
           add(){
               this.$store.commit('increment')
               //this.$store.state.count ++;
           }
       }


   }

</script>  

<style lang="scss" scoped>
   .container {
       width: 600px;
       padding: 20px;
       border: 1px solid #f5f5f5;

       input {
           outline: none;
           border: none;
       }

       .btn {
           width: 50px;
           height: 38px;
           font-size: 16px;
       }

       .ipt {
           width: 60px;
           height: 34px;
           padding-left: 15px;
           border: 1px solid #ccc;
       }
   }
</style>