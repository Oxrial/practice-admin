// export default ({ menu }: any) => (
// 	<>
// 		<el-icon>
// 			<component is={menu.meta?.icon} />
// 		</el-icon>
// 		<span>{menu.meta?.title}</span>
// 	</>
// )
export default defineComponent({
	name: 'MenuTitle',
	props: {
		menu: { type: Object, default: () => {} }
	},
	setup(props) {
		return () => (
			<>
				<el-icon>{/* <component is={props.menu.meta?.icon} /> */}</el-icon>
				<span>{props.menu.meta?.title}</span>
			</>
		)
	}
})
