<template>
  <div class="wrapper">
    <div class="content">
      <ul>
        <li v-for="(item,index) in $store.state.testAry" :key="index">
          <span>{{ item.name }}</span> <span>{{ item.age }}</span>
        </li>
      </ul>
    </div>               
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {

    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style>

</style>