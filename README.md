# 小店商城小程序实现模版

## 安装

```bash
npm install

# serve with hot reload at localhost:8080
npm run dev

npm run build

npm run build --report
```

## ext.json 文件

如果是第三方平台版本，就把 ext.json 文件中的 extEnable 字段设置为 true

## request 请求封装

```javascript
interface IUser {
  openid: string;
}

class Index extends Vue {

  async mounted() {
    // 可以直接在此处调用封装的插件方法，类型也可以在此处定义
    let user = await this.$http.get<IUser>();
    let openid = user.openid;
  }
}
```

## storage 封装

```javascript
class Index extends Vue {
  mounted() {
    // 可以直接在此处调用封装的插件方法，类型也可以在此处定义
    let userStorage = this.$storage.getItem < IUser > "user";
  }
}
```
