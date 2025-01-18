export const deepClone = <T>(array: T[]): T[] => {
   return JSON.parse(JSON.stringify(array))
}


export const findObjectById = <T extends {id: string}>( id: string, array: T[]): T | undefined => {
   return array.find((itemInArray) => itemInArray.id === id)
}

export const findIndexById = <T extends {id: string}>(idWithUnknowIndex: string, array: T[]): number => {
   return array.findIndex((itemInArray) => itemInArray.id === idWithUnknowIndex)
}

export const removeObjectById = <T extends {id: string}>(idOfItemToRemove: string, array: T[]): T[] => {
   return array.filter((item) => item.id !== idOfItemToRemove)
}

export const isEmpty = (array: []): boolean  => {
   return array.length === 0
}