function Father() {
  this.property = true;
}
Father.prototype.getFatherValue = function () {
  return this.property;
}

 var a = true

/**
 * 规则三： 原型对象 prototype 有一个默认的 constructor，记录是由那个构造函数创建的
 */
console.log(a.property) // undefined
console.log(Father.prototype) // {getFatherValue: function, constructor: Father(){}, __proto__: Object} 
console.log(Father.prototype.constructor === Father) // true

// const f1 = new Father()
// console.log(f1 instanceof Father)

// function Son() {
//   this.sonProperty = false;
// }
// //继承 Father
// Son.prototype = new Father(); //Son.prototype被重写,导致Son.prototype.constructor也一同被重写
// Son.prototype.getSonVaule = function () {
//   return this.sonProperty;
// }
// var instance = new Son();
// // alert(instance.getFatherValue()); //true


// function createdNew(fun1) {
//   // 创建一个空对象
//   const obj = {};
//   obj.__proto__ = fun1.prototype;
//   fun1.call(obj);
//   return obj;
// }

// function Father1() {
//   this.a = "这是父类";
//   this.b = {
//     c: '这是对象'
//   }
// }

// const instance1 = createdNew(Father1);
// console.log(instance1 instanceof Father1) // true


// /**
//  * 组合继承
//  * @param {*} name 
//  */
// function Parent(name) {
//   this.color = ['red', 'blue', 'black']
//   this.name = name
// }

// Parent.prototype.sayColor = function () {
//   console.log(this.color.join('-'))
// }

// function Son(name, age) {
//   Parent.call(this, name)
//   this.age = age
// }

// Son.prototype = Parent.prototype

// Son.prototype.sayAge = function () {
//   console.log(this.age)
// }

// const instanceSon = new Son('zhanglimin', 25)


// console.log(instanceSon.sayAge) // Function
// console.log(Parent.prototype.sayAge) // Function
// console.log(Son.age) // undefined
// console.log(Parent.sayColor) // undefined

// // 原型继承
// function object(o) {
//   function F() {}
//   F.prototype = o;
//   return new F();
// }

// const person = {
//   type: ["yellow", "white", "black"],
// };

// const p1 = object(person)
// console.log(p1.type) // ["yellow", "white", "black"] 

// p1.type.push('test')

// const p2 = object(person)
// console.log(p2.type) // ["yellow", "white", "black", test]


// /**
//  * 组合继承式继承
//  */

// function extend(subClass, parentClass) {

//   function createdObjec(obj) {
//     function F() {}
//     F.prototype = obj
//     return new F()
//   }
//   // 返回一个对象，使对象的__proto__ 指向需要继承的原型
//   const prototype = createdObjec(parentClass.prototype)
//   prototype.constructor = subClass
//   subClass.prototype = prototype
// }

// function parentClass() {
//   this.a = '这是父类'
// }

// parentClass.prototype.syaHello = function () {
//   console.log(this.a)
// }

// function subClass() {
//   this.b = '这是子类'
// }

// subClass.prototype.saySub = function () {
//   console.log(this.b)
// }

// extend(subClass, parentClass)

// const subInstance = new subClass()
// console.log(subInstance.syaHello) // function
// console.log(subInstance.saySub) // undefined