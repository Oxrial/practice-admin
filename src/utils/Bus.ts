// Bus接口
type BusClass = {
	on: (name: string, callback: Function) => void
	emit: (name: string) => void
}
// list参数类型
type List = {
	[key: string | number | symbol]: Array<Function>
}
class Bus implements BusClass {
	list: List
	//构造器
	constructor() {
		this.list = {}
	}
	// 接口实现类 bus事件使用顺序： on => emit
	// 当使用on时将方法绑定到this.list
	on(name: string, callback: Function) {
		let func: Array<Function> = this.list[name] || []
		func.push(callback)
		this.list[name] = func
	}
	// 当派发事件时使用emit时，遍历this.list匹配关联name的方法
	emit(name: string, ...args: Array<any>) {
		// 当调用时，若未使用on绑定指定的回调，this.list中为空 异常：Unhandled error during execution of component event handler
		this.list[name].forEach((func) => func.apply(this, args))
	}

	// off(){}
	// once(){}
}
export default new Bus()
