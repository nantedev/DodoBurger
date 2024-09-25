export const deepClone = (array) => {
   return JSON.parse(JSON.stringify(array))
}

export const findObjectById = (id, array) => {
   return array.find((itemInArray) => itemInArray.id === id)
}

export const findIndexById = (idWithUnknowwIndex, array) => {
   return array.findIndex((itemInArray) => itemInArray.id === idWithUnknowwIndex)
}

export const removeObjectById = (idOfItemToRemove, array) => {
   return array.filter((item) => item.id !== idOfItemToRemove)
}

export const isEmpty = (array) => {
   return array.length === 0
}