import { h, resolveComponent } from 'vue'
export default ({ menu }: any) => (
	<>
		<el-icon>{h(resolveComponent(menu.meta?.icon))}</el-icon>
		<span>{menu.meta?.title}</span>
	</>
)
// export default defineComponent({
// 	name: 'MenuTitle',
// 	props: {
// 		menu: { type: Object, default: () => {} }
// 	},
// 	setup(props) {
// 		return () => {
// 			return (
// 				<>
// 					<el-icon>{h(resolveComponent(props.menu.meta?.icon))}</el-icon>
// 					<span>{props.menu.meta?.title}</span>
// 				</>
// 			)
// 		}
// 	}
// })
