const getItem = (key) => JSON.parse(localStorage.getItem(key))
const clear = ()=> localStorage.clear()

export const localStorageUtil = {getItem, clear};