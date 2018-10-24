import { Vue } from "vue-property-decorator";
import { IResponseData, IHttp, IStorage } from "@/interface";

// 全局插件支持
declare module "vue/types/vue" {
  interface Vue {
    $storage: IStorage;
    $http: IHttp;
  }
  interface VueConstructor {
    storage: IStorage;
    http: IHttp;
  }
}
