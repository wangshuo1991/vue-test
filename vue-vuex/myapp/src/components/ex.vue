.<template>
  <div class="wrapper">
    <p> {{ count }} </p>
    <p> {{ para.name }} </p>  
    <button @click="show">点击</button>  
    <child v-if="flag"></child>
    <div>
      <div>{{ co }}</div>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import child from './child'

export default {
  components:{
    child
  },
  props:{},
  data(){
    return {
        count: 10,
        flag: false
    }
  },
  methods: {
      show () {
        this.flag = !this.flag;
      },
      increment () {
        this.$store.commit('increment');
      },
      decrement () {
        this.$store.commit('decrement');
      }
  },
  computed: {
      para () {
        return this.$store.state.para;
      },
      co () {
        return this.$store.state.co;
      }
  }
}
</script>
<style scoped>

</style>