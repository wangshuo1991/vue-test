.<template>
  <div class="wrapper">
    <p> {{ count }} </p>
    <p> {{ para.name }} </p>  
    <button @click="show">点击</button>  
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  components:{},
  props:{},
  data(){
    return {
        count: 10
    }
  },
  methods: {
      ...mapActions(['show'])
  },
  computed: {
      para () {
          return this.$store.state.para;
      }
  }
}
</script>
<style scoped>

</style>