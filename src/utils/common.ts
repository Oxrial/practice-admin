export function _v(key: string, obj: any) {
	const arr = key.split('.')
	return arr.reduce((a, b) => {
		return b in a ? a[b] : ''
	}, obj)
}
