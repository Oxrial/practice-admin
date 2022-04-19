import { defineStore } from 'pinia'
export const useTestStore = defineStore('TEST', {
	state: () => {
		return { number: 1, name: 'A' }
	},
	// computed 修饰一些值
	getters: {
		getName(): string {
			return `get - ${this.name} - ${this.getNumber}`
		},
		getNumber(): number {
			return this.number
		}
	},
	//methods 提交state
	actions: {
		// 可以使用async await 进行同步调用
		setNumber() {
			this.number++
		}
	}
})
