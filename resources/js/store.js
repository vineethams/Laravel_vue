import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state :{
        counter:1000,
        deleteModalObj:{
            showdeleteModal:false,
            deleteUrl:'',
            data:null
        }
    },
    getters:{
        getCounter(state){
             return state.counter
        },
        getDeleteModalObj(state){
            return state.deleteModalObj
        }
    },
    mutations:{
        changeTheCounter(state,data){
            state.counter+=data
        }
    }
})