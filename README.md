## react-swipes 

> 打造最好用的React 移动端卡片滑动 组件。已支持卡片自动播放，配置加入 `autoPlay` 参数即可。

### 为什么要造轮子

目前react component里面 基于移动端轮播/幻灯片 组件，最熟悉应该是`react-swipe`这个库了。且看这个组件的构成：

- react-swipe: 引入swipe-js-iso,创建react组件
- swipe-js-iso: 基于swipe.js的一个Pull Request


也就是说，整个组件是基于几年前的swipe.js的，这个库三四年没更新了，看提问，作者在12年说要发个swipe2，结果不了了之，导致bug修复很慢，功能支持不全。比如我想做这个效果：

![vip](./static/vip.gif)

![newuser](./static/newuser.gif)


---

尴尬啊，`react-swipe`现在的能力根本支持不了(因为swipe是针对**焦点图**设计的，写死了子元素宽度是父级的宽度)


### 解决方案

不用react的情况下，swiper.js 是个不错的选择，但是考虑这个库太大了(5000行+)，为一个卡片滑动实在不值得。最后还是自己搞了个react-swipes，为的就是快速方便的实现上面这种卡片切换效果。

### 安装

    npm i react-swipes --save

### 使用

#### 原理

swipes不依赖任何css，不会去改变子item的样式，也就是说，css完全控制在自己的代码中。所以有必要了解卡片滑动的原理：


```html
// 三层滑动原理，动的是第二层

// 第一层设置固定宽度 ，超过部分设置为不显示 overflow: hidden;  
<div>  
    //第二层设置为实际需要的宽度，即子div的n倍，有间距需要算上间距
    <div>  
        //第三层，实际item 内容的宽度     
        <div></div>  
    </div>  
</div>
```

这是滑动的基础布局，最终的滑动也就是改变第二层div的`translateX`值。再加上`transition` 过渡效果，即可实现整个区域的运动，而最外层元素设置了溢出隐藏，这样整体效果就是单张卡片在运动了。

#### 具体使用

```js
    import ReactSwipe from 'react-swipes'
    
    // swipes 的配置
    let opt = {
    distance: 620, // 每次移动的距离，卡片的真实宽度
    currentPoint: 1,// 初始位置，默认从0即第一个元素开始
    autoPlay: true, // 是否开启自动播放
    swTouchstart: (ev) => {

    },
    swTouchmove: (ev) => {

    },
    swTouchend: (ev) => {
        let data = {
            moved: ev.moved,
            originalPoint: ev.originalPoint,
            newPoint: ev.newPoint,
            cancelled: ev.cancelled
        }
        console.log(data);
        this.setState({
            curCard: ev.newPoint
        })
    }
    }
    
    // dom 部分
    // 第一层div
    <div className="card-swipe" >
        // 第二层div  react-swipes生成一个className为 card-slide的div
        <ReactSwipe className="card-slide" options={opt}>
            // 第三层，即本身的item
            this.state.card.length && this.state.card.map((item, index) => <div className="item" key={index}> </div>
        </ReactSwipe>
    </div>
```

### demo
    
[sandbox demo](https://codesandbox.io/s/6xx1v0xo2z)

### todo

- 现在把css完全暴露给使用者了，这样第二层div的宽度（第三层元素的宽度和）需要大家在代码中计算，不是很方便，后续会把这块逻辑放到组件里面去，开发者只需要配置卡片基础属性即可。
- 卡片滑动过程想实现类似上面的缩放效果，目前需要在 `swTouchmove` `swTouchend` 钩子里面自己去实现，后面会把这个效果做到组件里面去，开发者选择是否开启。
