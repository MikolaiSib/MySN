export const updateObjInArray = (items: any, itemId: any, objPropName: any, newObj: any) => {
    return items.map((u: any) => u[objPropName] === itemId ? {...u, ...newObj} : u)

}
