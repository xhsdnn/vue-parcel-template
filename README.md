vue-parcel-template
vue+parcel+element-ui+vue-router实现的简单模版工程

### 使用worlddq
```
npm install

npm run dev
```

### build

```
// 默认打包到dist文件夹下

npm run build
```

### 注：

在引入element-ui的时候可能会出现这个错误：

> ps：如果没有报错请自行忽略这段。

```
Cannot read property 'add' of undefined
```

**解决办法：**

根据命令行提示找到报错的位置，我的是在`node_modules/parcel-bundler/src/packagers/JSPackager.js`这个文件夹里面，
找到这句话：`this.bundleLoaders.add(mod.type);`，也就是报错的位置，
在前面加上这段代码即可：

```
if(!this.bundleLoaders){
    this.bundleLoaders = new Set();
}
```
