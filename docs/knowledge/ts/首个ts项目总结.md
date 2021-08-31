# 首个ts项目总结
## 哪些地方用到ts
* 接口请求与返回定义
* 组件props定义


```ts
  const dealMoney = (money: string) => {
    const [a, b] = money.split('.');
    const list: string[] = [];
    a.split('')
      .reverse()
      .forEach((item, index) => {
        if (index && index % 3 === 0) {
          list.push(`${item},`);
        } else {
          list.push(item);
        }
      });
    const newA = list.reverse().join('');
    return b ? `${newA}.${b}` : newA;
  };
```
