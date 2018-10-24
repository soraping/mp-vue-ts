/**
 * 本地持久化插件
 * this.$Storage.getItem('key')
 */
export default {
  install(Vue) {
    const storage = {
      getItem: key => {
        let value = wx.getStorageSync(key);
        if (value) {
          return JSON.parse(value);
        }
        return value;
      },
      setItem: (key, value) => wx.setStorageSync(key, value),
      removeItem: key => wx.removeStorageSync(key),
      clear: () => wx.clearStorageSync()
    };
    Vue.storage = storage;
    Vue.prototype.$storage = storage;
  }
};
