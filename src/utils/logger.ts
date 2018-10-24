class Logger {
  private name: string;
  constructor(name: string = "app") {
    this.name = `[${name}] `;
  }

  log(...argv) {
    return this.overWriteLog("log")(arguments);
  }

  info(...argv) {
    return this.overWriteLog("info")(arguments);
  }

  warn(...argv) {
    return this.overWriteLog("warn")(arguments);
  }

  error(...argv) {
    return this.overWriteLog("error")(arguments);
  }

  /**
   * 重写log
   * @param type
   */
  private overWriteLog(type: string) {
    let name = this.name;
    return function(list) {
      let logsList = [name].concat([].slice.call(list));
      console[type].apply(console, logsList);
    };
  }
}
