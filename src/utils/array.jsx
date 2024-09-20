export const deepClone = (array) => {
   return JSON.parse(JSON.stringify(array))
}

export const findInArray = (id, array) => {
   return array.find((itemInArray) => itemInArray.id === id)
}

export const findIndex = (idWithUnknowwIndex, array) => {
   return array.findIndex((itemInArray) => itemInArray.id === idWithUnknowwIndex)
}