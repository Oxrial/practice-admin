<template>
	<el-card>
		<template #header>
			<div class="header-left">
				<span>
					{{ yinTypeEnums[yinType] }}
					<el-button type="text" @click="yinDialog.show = true">图</el-button>
				</span>
				<el-button type="primary" @click="propKey = 'ping'">平</el-button>
				<el-button type="primary" @click="propKey = 'pian'">片</el-button>
				<el-button @click="() => (yin46 = shuffle(yin46))">
					SHUFFLE RANDOM
				</el-button>
			</div>
			<div class="header-right">
				<el-button
					type="primary"
					@click="form && (form as any).validate((v:any) => (vali = v))"
				>
					VALIDATE: {{ vali }}
				</el-button>
				<el-button
					type="primary"
					@click="form && (form as any).clearValidate();(vali = false)"
				>
					CLEAR-VALIDATE
				</el-button>
				<el-button
					type="primary"
					@click="form && (form as any).resetFields();(vali = false)"
				>
					CLEAR
				</el-button>
				<el-button type="primary" @click="() => (yin46 = yin46p)"
					>RESET</el-button
				>
			</div>
		</template>
		<el-scrollbar :viewStyle="{ 'white-space': 'nowrap' }">
			<el-form
				:validate-on-rule-change="false"
				:model="yinValue"
				label-width="55px"
				ref="form"
				:rules="rules"
			>
				<transition-group
					move-class="wraps-move"
					:class="'wraps ' + yinType"
					tag="div"
				>
					<el-form-item
						:label="yin[propKey  as keyof typeof yin]"
						class="wraps-item"
						v-for="yin in yin46"
						:prop="yin.prop"
						:key="yin.prop"
						:style="{  opacity: yin[propKey  as keyof typeof yin] ? 1 : 0}"
					>
						<el-input
							:validate-event="false"
							v-model="yinValue[yin.prop]"
							v-if="yin[propKey  as keyof typeof yin]"
						/>
					</el-form-item>
				</transition-group>
			</el-form>
		</el-scrollbar>
	</el-card>
	<el-dialog
		custom-class="yin-dialog"
		width="80%"
		center
		v-model="yinDialog.show"
		:title="yinTypeEnums[yinType] + '图'"
		:before-close="yinDialogBeforeClose"
	>
		<div :class="'yin-wrap ' + yinType">
			<div
				class="yin-card"
				v-for="yin in yin46"
				:style="{  opacity: yin['ping'  as keyof typeof yin] ? 1 : 0, ...yin?.style }"
			>
				<div class="yin-card-prop">{{ yin.prop }}</div>
				<div class="yin-card-yin">
					<div>{{ yin.ping }}</div>
					<div>{{ yin.pian }}</div>
				</div>
			</div>
		</div>
	</el-dialog>
</template>

<script setup lang="ts">
import { shuffle } from 'lodash-es'
type Yin = {
	prop: string
	ping: string
	pian: string
	style?: object
}
type Prop = {
	yin50: Array<Yin>
	yinType: string
}
const props = defineProps<Prop>()

type Nothing = {
	[key: string]: any
}

const yinTypeEnums: Nothing = {
	qing: '清音',
	zhuo: '浊音',
	ao: '拗音'
}

// #region qing
const yin46 = ref(props.yin50)
const yin46p = ref(props.yin50)
const propKey = ref('ping')
const yin_value: Nothing = {}
const yinValue = reactive(yin_value)

let rules = ref<Nothing>({})
;(props.yin50 as any).forEach((yin: any) => {
	yin_value[yin.prop] = ''
	if (yin.ping && yin.pian)
		rules.value[yin.prop] = [
			{
				validator: (rule: any, value: any, callback: any) => {
					value === yin.prop ? callback() : callback(new Error('Oops'))
				},
				triiger: 'change'
			}
		]
})

const form = ref(null)
const vali = ref(false)

const yinDialog = reactive({
	show: false
})
const yinDialogBeforeClose = () => {
	yinDialog.show = false
}
// #endregion qing
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
<style lang="scss">
.el-card {
	margin-bottom: 20px;
}
$yin-dot: 100px;

@mixin yin($line: 5) {
	height: calc(($yin-dot / 2 + 10px + 22px) * $line + 18px);
}
%show-yin50 {
	@include yin();
	.yin-card {
		width: $yin-dot;
	}
}
%show-yin36 {
	@include yin(6);
	.yin-card {
		width: calc($yin-dot + 60px);
	}
}
.el-overlay {
	.yin-dialog {
		.yin-wrap {
			display: flex;
			flex-wrap: wrap;
			align-content: center;
			flex-direction: column;
			margin: 0 auto;
			&.qing,
			&.zhuo {
				@extend %show-yin50;
			}
			&.ao {
				@extend %show-yin36;
			}
			.yin-card {
				width: $yin-dot;
				height: calc($yin-dot / 2 + 2px);
				border-radius: 15px;
				margin: 0 10px 10px 0;
				border: 1px gray solid;
				box-shadow: 2px 2px 3px grey;
				padding: 10px;
				cursor: pointer;
				transition: 0.1s ease-in;
				&:hover {
					border: 1px skyblue solid;
					box-shadow: 2px 2px 3px skyblue;
					transform: scale(1.1);
					transition: 0.1s ease-out;
				}
				&:hover .yin-card-prop {
					color: darkorange;
					font-weight: bold;
					text-shadow: 1px 1px 3px skyblue;
					font-size: 20px;
				}
				.yin-card-prop {
					text-align: center;
					font-size: 18px;
					line-height: 25px;
					color: lightslategrey;
				}
				.yin-card-yin {
					display: flex;
					justify-content: space-around;
					font-size: 24px;
				}
			}
		}
	}
}
</style>
