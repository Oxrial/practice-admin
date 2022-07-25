import { defineStore } from 'pinia'
export const useUserStore = defineStore('USER', {
	state: () => {
		return { user: '' }
	},
	// computed 修饰一些值
	getters: {
		getUser(): string {
			return this.user
		}
	},
	//methods 提交state
	actions: {
		setUser(val: string = '---') {
			this.user = val
		}
		// 可以使用async await 进行同步调用
	}
})
