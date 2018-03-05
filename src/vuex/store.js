import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const LOG_OUT = 'LOG_OUT'
export const RECORD_USERINFO = 'RECORD_USERINFO'
export const FLASH_USER = 'FLASH_USER'

import { setStore,removeStore,getStore } from '../utils/storage'

const store = new Vuex.Store({

	state:{
		islogin: false,
		username:'',
		userid:''	
	},
	mutations:{
		//记录用户信息
		[RECORD_USERINFO] (state,info){
			state.username = info.username
			state.userid = info.id
			state.islogin = true
			setStore('username',state.username)
			setStore('userid',state.userid)
		},
		//退出登录
		[LOG_OUT] (state){
			state.islogin = false
			state.username = ''
			state.userid = ''
			removeStore("userid")
			removeStore("username")
		},
		//页面刷新时从localStorage拿用户信息
		[FLASH_USER](state){
			if(getStore('username')){
				state.islogin = true
				state.username = getStore('username')
				state.userid = getStore('userid')
			}
		}
	}
})

export default store