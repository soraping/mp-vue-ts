// 正则匹配
let Pattern = {
  isEmpty: /(^\s*)|(\s*$)/g,
  isMobile: /^1[3|4|5|6|7|8][0-9]{9}$/,
  isCnAndEn: /^[\u4E00-\u9FA5]+$/,
  isCnAndEnAndNum: /^[\u4e00-\u9fa5-a-zA-Z0-9]+$/,
  isUserName: /^[(\u4e00-\u9fa5)a-zA-Z]+$/,
  isPassword: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,
  isAuthCode: /^[0-9]{6}$/,
  isTelAndMobile: /^(1[3|4|5|7|8][\d]{9}|0[\d]{2,3}-[\d]{7,8}|400[-]?[\d]{3}[-]?[\d]{4})$/
};

interface IPattern {
  (pattern: RegExp, str: any): boolean;
}

const validator = {
  /**
   * 执行正则表达式
   * @param pattern 校验的正则表达式
   * @param strValue 校验的值
   * @returns {boolean}
   */
  executeExp: function(pattern: RegExp, strValue: any): boolean {
    return pattern.test(strValue);
  },
  /**
   * 判断字符串是否为空
   * @param strValue 校验的值
   * @returns {boolean}
   */
  isEmpty: function(strValue): boolean {
    strValue = strValue.replace(Pattern.isEmpty, "");
    return strValue.length === 0;
  },
  /**
   * 判断字符串是否非空
   * @param strValue 校验的值
   * @returns {boolean}
   */
  isNotEmpty: function(strValue): boolean {
    return !this.isEmpty(strValue);
  },
  /**
   * 判断是否为中文
   * @param strValue 校验的值
   * @returns {boolean}
   */
  isCnAndEn: function(strValue): boolean {
    if (this.isEmpty(strValue)) return false;
    return this.executeExp(Pattern.isCnAndEn, strValue);
  },
  /**
   * 判断是否为中英文、数字及'-'
   * @param strValue 校验的值
   * @returns {boolean}
   */
  isCnAndEnAndNum: function(strValue): boolean {
    if (this.isEmpty(strValue)) return false;
    return this.executeExp(Pattern.isCnAndEnAndNum, strValue);
  },
  /**
   * 判断是否为用户名
   * @param strValue 校验的值
   * @returns {boolean}
   */
  isUserName: function(strValue): boolean {
    if (this.isEmpty(strValue)) return false;

    return this.executeExp(Pattern.isUserName, strValue);
  },
  /**
   * 判断验证码格式
   * @param strValue 校验的值
   * @returns {boolean}
   */
  isAuthCode: function(strValue): boolean {
    if (this.isEmpty(strValue)) return false;
    return this.executeExp(Pattern.isAuthCode, strValue);
  },
  /**
   * 判断是否为手机号码
   * @param strValue 校验的值
   * @returns {boolean}
   */
  isMobile: function(strValue): boolean {
    if (this.isEmpty(strValue)) return false;
    return this.executeExp(Pattern.isMobile, strValue);
  },
  /**
   * 判断是否为手机或电话号码
   * @param strValue 校验的值
   * @returns {boolean}
   */
  isTelAndMobile: function(strValue): boolean {
    if (this.isEmpty(strValue)) return false;
    return this.executeExp(Pattern.isTelAndMobile, strValue);
  },
  /**
   * 判断是否符合密码规则
   * @param strValue 校验的值
   * @returns {boolean}
   */
  isPassword: function(strValue): boolean {
    if (this.isEmpty(strValue)) return false;
    return this.executeExp(Pattern.isPassword, strValue);
  },
  /**
   * 对象是否为空
   * @param obj 检验对象
   * @returns {boolean}
   */
  isEmptyObj: function(obj): boolean {
    return Object.keys(obj).length === 0;
  },
  /**
   * 是否在范围长度内
   * @param 范围数组 [1, 10] 长度在1-10内
   * @returns {boolean}
   */
  isLenRange: function(strValue, lenArr): boolean {
    return strValue.length >= lenArr[0] && strValue.length <= lenArr[1];
  },
  /**
   * 是否在数值范围内
   * @param 范围数组 [1, 10] 数值在1-10内
   * @returns {boolean}
   */
  isNumRange: function(numValue, numArr): boolean {
    return numValue >= numArr[0] && numValue <= numArr[1];
  }
};

export { validator };
