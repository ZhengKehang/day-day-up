# BFC
:::tip
待梳理
:::
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
## margin

```
      wx.getImageInfo({
          src: this.state.card,
          success(bg) {
              //绘制背景图
              ctx.drawImage(bg.path, 0, 0, bg.width, bg.height);
              //绘制背景图上层的头像
              ctx.save();
              ctx.arc(100, 100, 30, 0, 2 * Math.PI);
              ctx.clip();
              wx.getImageInfo({
                  src: userInfo.avatarUrl,
                  success(user) {
                      ctx.drawImage(user.path, 50, 50, 110, 110);//根据微信getUserInfo接口获取到用户头像
                      ctx.restore();
                      //绘制文字
                      ctx.setTextAlign('center')
                      ctx.setFillStyle('#fff')
                      ctx.setFontSize(16)
                      ctx.fillText(userInfo.nickName, 100, 180)//用户昵称
                      ctx.stroke()
                      ctx.draw()
                      wx.canvasToTempFilePath({
                          x: 0,
                          y: 0,
                          width: 300,
                          height: 500,
                          canvasId: 'myCanvas',
                          success: function (res) {
                              console.log(res.tempFilePath);
                              wx.saveImageToPhotosAlbum({
                                  filePath: res.tempFilePath,//canvasToTempFilePath返回的tempFilePath
                                  success: (resp) => {
                                      console.log(resp)
                                  },
                                  fail: (err) => {}
                              })
                          }
                      })
                  }
              })
          }
      })
```
