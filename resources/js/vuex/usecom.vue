<template>
  <div>
      <div class="content">
			<div class="container-fluid">
               <h1>i will show all other</h1>
               current master state:{{getCounter}}
               <div><comA></comA></div>
               <div><comB></comB></div>
               <Button type="info" @click="changeCounter">change the counter</Button>
            </div>
      </div>
  </div>


</template>
<script>
import comA from './comA'
import comB from './comB'
import {mapGetters} from 'vuex'
export default{
    data(){
        return{

        }
    },
    computed :{
        ...mapGetters(['getCounter'])
    },
    methods:{
        changeCounter(){
            this.$store.commit('changeTheCounter',1)
        }
    },
    created(){

    },
    components : {
        comA,
        comB
    }
}
</script>