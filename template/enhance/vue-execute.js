export default {
  /** 延时执行 */
  // delay_: function(fn, millisec) {
  //   setTimeout(fn, millisec)
  // },
  delay(millisec, once) {
    const $this = this
    once && $this._timers.delay && clearTimeout($this._timers.delay)
    return new Promise(function(resolve) {
      $this._timers.delay = setTimeout(resolve, millisec)
    })
  },
  /** 重试执行 直到最大值 默认:99次 返回true停止 仅限同步 */
  retry(fn, max) {
    let _time = 0
    // eslint-disable-next-line prefer-const
    let _max = max || 99
    // eslint-disable-next-line no-unmodified-loop-condition
    while (fn && !fn() && _max > ++_time) {}
  },
  /** 循环执行(不可停) */
  loops(fn, millisec) {
    this._timers.loops && clearTimeout(this._timers.loops)
    fn && fn()
    fn &&
      (this._timers.loops = setTimeout(() => {
        this.loops(fn, millisec)
      }, millisec))
  },
  /** 循环执行(可停止) */
  loop(fn, millisec, tag) {
    if (fn) {
      // eslint-disable-next-line no-unused-expressions,no-sequences
      ;(this._fns[tag] = fn), fn()
      this._timers[tag] && clearTimeout(this._timers[tag])
      this._loop(tag, millisec)
      return tag
    }
    return null
  },
  /** 循环停止(只可停止-loop的服务) */
  stop(tag) {
    if (tag) {
      this._timers[tag] && clearTimeout(this._timers[tag])
      delete this._fns[tag]
    } else {
      for (const key in this._fns) {
        this._timers[key] && clearTimeout(this._timers[key])
        delete this._fns[key]
      }
    }
  },
  _loop(tag, millisec) {
    this._fns[tag] != null &&
      (this._timers[tag] = setTimeout(() => {
        this._fns[tag]()
        this._loop(tag, millisec)
      }, millisec))
  },
  _fns: {},
  _timers: {}
}
