# js Function
## 传参
### 传参的方式
* 按值传参，复制外部变量形成局部变量
::: tip
注意，引用类型复制的是内存地址
:::
### arguments 对象
* 由于 JavaScript 允许函数有不定数目的参数，所以需要一种机制，可以在函数体内部读取所有参数。这就是arguments对象的由来
* arguments对象带有一个callee属性，返回它所对应的原函数
* 类数组对象，拥有次序整数键名、length属性特征

::: tip 函数执行后立即销毁，return语句是如何作用的呢？
函数执行后变量标记为被清除，内存未清除。返回值赋值给上一个执行环境的变量。垃圾回收时，不清除还在执行环境中的变量对应的内存地址。
也就是当该内存在作用域链中所有变量标记清除时，内存释放。
:::
## 闭包
### 闭包的用处

* 是封装对象的私有属性和私有方法

```javascript
function Person(name) {
  var _age;
  this.setAge = function(age) {
    _age = age;
  };
  this.getAge = function() {
      console.log('age',_age);
      return _age;
  };
  this.name = name;
}
var me = new Person('可航');
me.setAge(25);
me.getAge();
```
* 闭包的最大用处有两个，一个是可以读取函数内部的变量，另一个就是让这些变量始终保持在内存中，即闭包可以使得它诞生环境一直存在。
### 为什么需要闭包的形式？
因为js只有函数作用域和全局作用域，闭包提供了将函数作用域向外暴露的可能性。
### 返回值和闭包的区别是什么？
闭包是返回值的一种
直接返回内部变量、与返回
```javascript
function f() {
  var _a = 0;
  var setA = function(a) {
      _a = a;
  };
  var getA = function() {
    console.log(_a);
    return _a;
  };
  return {
      get:getA,
      set:setA
  };
}
var result = f();
var a = result();//0
result.setA(10);
var b = result();
```
```javascript
function f() {
  var _a = 0;
  var setA = function(a) {
      _a = a;
  };
  var getA = function() {
    console.log(_a);
    return _a;
  };
  return getA();
}
```
