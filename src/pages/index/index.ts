import { Vue, Component } from "vue-property-decorator";
import { AppUrls } from "@/utils/consts.ts";

interface IUser {
  openid: string;
}

// 必须使用装饰器的方式来指定component
@Component({
  components: {}
})
class Index extends Vue {
  onShow() {
    // 小程序 hook
  }

  async mounted() {
    let user = await this.$http.get<IUser>();
    let userStorage = this.$storage.getItem<IUser>("user");
  }
}

export default Index;
