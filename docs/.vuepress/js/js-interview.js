//变量提升、this指向、new等问题汇总
function Foo() {
    getName = function () { alert (1); };
    return this;
}
Foo.getName = function () { alert (2);};
Foo.prototype.getName = function () { alert (3);};
var getName = function () { alert (4);};
function getName() { alert (5);}

//请写出以下输出结果：
Foo.getName();//2
getName();//4 变量声明提升和函数提升
Foo().getName();//1 返回this指向window,window.getName();
getName();//1 上一条命令重置了window里的getName()方法
new Foo.getName();//2 返回值为空的实例对象
new Foo().getName();//3 实例对象上查找然后再原型链上查找
new new Foo().getName();//3 返回值为空的实例对象