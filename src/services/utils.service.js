let id
export const debounce = (func, delay) => {
    return (...args) => {
        if (id) clearTimeout(id)
        id = setTimeout(() => {
            func(...args)
        }, delay)
    }
}