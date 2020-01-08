# typescript梳理
## 基本类型
number,string,boolean,null,undefined,symbol,array[],object{}
enum,any,void
### 类型断言 
```typescript
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```
## 接口
* 接口的作用就是为这些类型命名和为你的代码或第三方代码定义**契约**
### 普通对象类型的接口
用来约定传参的必需及其类型、或非必需参数的类型
可选参数在属性名后加？即可
```typescript
interface SquareConfig {
    color: string;//必需+类型判断
    width?: number;//非必需+类型判断
    [propName: string]: any;//非定义任意属性及类型
}
```
### 函数类型的接口
```typescript
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(src: string, sub: string): boolean {//函数传参和返回值类型可以不写类型判断，用接口定义的函数，参数会逐个判断
  let result = src.search(sub);
  return result > -1;
}
```