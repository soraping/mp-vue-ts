import { Vue, Component } from "vue-property-decorator";

// 必须使用装饰器的方式来指定components
@Component({
  mpType: "app" // mpvue特定
} as any)
class App extends Vue {
  // app hook
  onLaunch() {}

  onShow() {}

  onHide() {}

  mounted() {}
}

export default App;
