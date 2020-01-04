# js中的数组
## 基础知识
### 什么是数组？
* 定义按一定顺序排列的一组值，本质上是对象，它的键名是一组由0递增开始的整数。
:::tip 提示
当数组键名不合法时，length属性不变，但变量会被存储。
所以for in循环遍历的数组可能出现非整数键
:::

##删除数组中的指定项（）
```


```
##数组去重（字符串去重）
```
<!-- 方法一 -->
let array = [1,2,2,3,4,4]
[...new Set(array)];//[1,2,3,4]
<!-- 在 Set 内部，两个NaN是相等。另外，两个对象总是不相等的 -->

<!-- 方法二  includes或者 indexof == -1 -->
let deal = [];
array.forEach((item)=>{
	deal.includes(item)?'':deal.push(item);
})
```

##生成二维数组
```
	getDyadicArray(array,count=4){
		let dyadic = [];
		let row = array.length/4;
		for(let i=0;i<row;i++){
			let start = i*4;
			let end = (i+1)*4;
			dyadic.push(array.slice(start,end));
		}
		return dyadic;
	}
```
