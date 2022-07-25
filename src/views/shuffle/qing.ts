const a = [
	{
		prop: 'a',
		ping: 'あ',
		pian: 'ア'
	},
	{
		prop: 'i',
		ping: 'い',
		pian: 'イ'
	},
	{
		prop: 'u',
		ping: 'う',
		pian: 'ウ'
	},
	{
		prop: 'e',
		ping: 'え',
		pian: 'エ'
	},
	{
		prop: 'o',
		ping: 'お',
		pian: 'オ'
	}
]
const ka = [
	{
		prop: 'ka',
		ping: 'か',
		pian: 'カ'
	},
	{
		prop: 'ki',
		ping: 'き',
		pian: 'キ'
	},
	{
		prop: 'ku',
		ping: 'く',
		pian: 'ク'
	},
	{
		prop: 'ke',
		ping: 'け',
		pian: 'ケ'
	},
	{
		prop: 'ko',
		ping: 'こ',
		pian: 'コ'
	}
]
const sa = [
	{
		prop: 'sa',
		ping: 'さ',
		pian: 'サ'
	},
	{
		prop: 'shi',
		ping: 'し',
		pian: 'シ',
		style: {
			border: '2px pink solid',
			'box-shadow': '0px 1px 10px 0px pink inset'
		}
	},
	{
		prop: 'su',
		ping: 'す',
		pian: 'ス'
	},
	{
		prop: 'se',
		ping: 'せ',
		pian: 'セ'
	},
	{
		prop: 'so',
		ping: 'そ',
		pian: 'ソ'
	}
]
const ta = [
	{
		prop: 'ta',
		ping: 'た',
		pian: 'タ'
	},
	{
		prop: 'chi',
		ping: 'ち',
		pian: 'チ',
		style: {
			border: '2px pink solid',
			'box-shadow': '0px 1px 10px 0px pink inset'
		}
	},
	{
		prop: 'tsu',
		ping: 'つ',
		pian: 'ツ',
		style: {
			border: '2px pink solid',
			'box-shadow': '0px 1px 10px 0px pink inset'
		}
	},
	{
		prop: 'te',
		ping: 'て',
		pian: 'テ'
	},
	{
		prop: 'to',
		ping: 'と',
		pian: 'ト'
	}
]
const na = [
	{
		prop: 'na',
		ping: 'な',
		pian: 'ナ'
	},
	{
		prop: 'ni',
		ping: 'に',
		pian: 'ニ'
	},
	{
		prop: 'nu',
		ping: 'ぬ',
		pian: 'ヌ'
	},
	{
		prop: 'ne',
		ping: 'ね',
		pian: 'ネ'
	},
	{
		prop: 'no',
		ping: 'の',
		pian: 'ノ'
	}
]
const ha = [
	{
		prop: 'ha',
		ping: 'は',
		pian: 'ハ'
	},
	{
		prop: 'hi',
		ping: 'ひ',
		pian: 'ヒ'
	},
	{
		prop: 'fu',
		ping: 'ふ',
		pian: 'フ',
		style: {
			border: '2px pink solid',
			'box-shadow': '0px 1px 10px 0px pink inset'
		}
	},
	{
		prop: 'he',
		ping: 'へ',
		pian: 'ヘ'
	},
	{
		prop: 'ho',
		ping: 'ほ',
		pian: 'ホ'
	}
]
const ma = [
	{
		prop: 'ma',
		ping: 'ま',
		pian: 'マ'
	},
	{
		prop: 'mi',
		ping: 'み',
		pian: 'ミ'
	},
	{
		prop: 'mu',
		ping: 'む',
		pian: 'ム'
	},
	{
		prop: 'me',
		ping: 'め',
		pian: 'メ'
	},
	{
		prop: 'mo',
		ping: 'も',
		pian: 'モ'
	}
]
const ya = [
	{
		prop: 'ya',
		ping: 'や',
		pian: 'ヤ'
	},
	{
		prop: 'yi',
		ping: '',
		pian: ''
	},
	{
		prop: 'yu',
		ping: 'ゆ',
		pian: 'ユ'
	},
	{
		prop: 'ye',
		ping: '',
		pian: ''
	},
	{
		prop: 'yo',
		ping: 'よ',
		pian: 'ヨ'
	}
]
const ra = [
	{
		prop: 'ra',
		ping: 'ら',
		pian: 'ラ'
	},
	{
		prop: 'ri',
		ping: 'り',
		pian: 'リ'
	},
	{
		prop: 'ru',
		ping: 'る',
		pian: 'ル'
	},
	{
		prop: 're',
		ping: 'れ',
		pian: 'レ'
	},
	{
		prop: 'ro',
		ping: 'ろ',
		pian: 'ロ'
	}
]
const wa = [
	{
		prop: 'wa',
		ping: 'わ',
		pian: 'ワ'
	},
	{
		prop: 'wi',
		ping: '',
		pian: ''
	},
	{
		prop: 'n',
		ping: 'ん',
		pian: 'ン'
	},
	{
		prop: 'we',
		ping: '',
		pian: ''
	},
	{
		prop: 'wo',
		ping: 'を',
		pian: 'ヲ'
	}
]
export default [
	...a,
	...ka,
	...sa,
	...ta,
	...na,
	...ha,
	...ma,
	...ya,
	...ra,
	...wa
]
