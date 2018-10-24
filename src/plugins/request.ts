import * as request from '@/utils/request'

export default {
    install(Vue){
        Vue.http = request
        Vue.prototype.$http = request
    }
}
