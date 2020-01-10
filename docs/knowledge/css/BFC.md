# BFC

## 盒模型
元素的内在盒子是由margin box、border box、padding box、content box组成的，这四个盒子由外到内构成了盒模型。
```css
:root {
  box-sizing: border-box;    
}
* {
  box-sizing: inherit;
}
```