export function isEqual(obj1, obj2) {
  // 判断是否是对象(方法)
  function isObject(obj) {
    return typeof obj === 'object' && obj !== null
  }

  // 判断是否是对象
  if (!isObject(obj1) || !isObject(obj2)) {
    return obj1 === obj2
  }
  // 判断两个对象是否是相同的对象(地址)
  if (obj1 === obj2) return true

  // 获取对象的属性名
  let objData1 = Object.keys(obj1)
  let objData2 = Object.keys(obj2)
  // 判断长度
  if (objData1.length !== objData2.length) return false

  for (const key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      // 递归调用
      const res = isEqual(obj1[key], obj2[key])
      if (!res) {
        return false
      }
    }
  }
  return true
}