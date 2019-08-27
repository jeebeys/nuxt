export default function(fn, gapTime) {
  gapTime = gapTime || 1500
  let _lastTime = null
  // 返回新的函数
  return function() {
    const _nowTime = +new Date()
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn.apply(this, arguments)
      _lastTime = _nowTime
    }
  }
}
