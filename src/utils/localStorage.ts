const getItem = (key: string) => {
	const value = window.localStorage.getItem(key);
	return value ? JSON.parse(value) : null;
};

const setItem = (key: string, value: any) => {
	window.localStorage.setItem(key, JSON.stringify(value));
};

export { getItem, setItem };
