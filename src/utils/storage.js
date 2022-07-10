const setItem = (key, value) => {
    localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
}

const getItem = (key) => {
    return localStorage.getItem(key);
}

const removeItem = (key) => {
    localStorage.removeItem(key);
}

const clearStorage = () => {
    localStorage.clear();
}

export {
    setItem,
    getItem,
    removeItem,
    clearStorage
}