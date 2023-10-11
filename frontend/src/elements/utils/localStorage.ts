export const setLocalStorage = (name: string, items: string) => {
  localStorage.setItem(name, JSON.stringify(items))
}

export const getLocalStorage = (name: string) => {
  const data = localStorage.getItem(name)
  if (data) {
    return JSON.parse(data)
  } else {
    localStorage.setItem(name, JSON.stringify([]))
    return []
  }
}
