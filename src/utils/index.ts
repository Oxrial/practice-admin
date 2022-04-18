export const hump2Bar = (value: string) => {
	return value.replace(/(A-Z)g/, '-$1').toLocaleLowerCase()
}
