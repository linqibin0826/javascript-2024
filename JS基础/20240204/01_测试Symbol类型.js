let obj = {}
const symbol1 = Symbol("hello")
const symbol2 = Symbol("hello")

obj[symbol1] = 'world'
console.log(obj[symbol1]) // 有值
console.log(obj[symbol2]) // 这是两个不一样的对象属性,即使他们名字相同.


// 对象转换为布尔值
console.log(Boolean(new Boolean(false)))  // 输出是true, 因为这Boolean将任何对象类型都直接转为true

let arr = ['99', '88']
console.log(Number(arr.toString()))

const o = {x: 1, y: 2}
console.log(Object.entries(o));
