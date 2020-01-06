# Class
## 继承
::: warning
super这个关键字，既可以当作函数使用，也可以当作对象使用。
在这两种情况下，它的用法完全不同。
* 第一种情况，super作为函数调用时，代表父类的构造函数
* super作为对象时，在普通方法中，指向父类的原型对象；
* super作为对象时,在静态方法static中，指向父类
:::

```javascript
class A {
    constructor(){//父类构造函数
        this.testA = "name"
    }
    testB(){//A.prototype.testB
    }
    static testC(){
    }
}
class B extends A{
    constructor(){
        super();//super()在这里相当于A.prototype.constructor.call(this) 将父类的属性赋值给子类的this
    }
}
```
### 理清三个概念
父类、父类构造函数、父类原型
