/** 基础扩展库 */
/**
 * JuST4iT 84961426@qq.com
 */

// eslint-disable-next-line no-extend-native
// String.prototype.trim = function() {
//   return this.replace(/(^\s*)|(\s*$)/g, '')
// }

// eslint-disable-next-line no-extend-native
String.prototype.blank = function() {
  const regEx = /\s+/g
  return this.replace(regEx, ' ')
}

// eslint-disable-next-line no-extend-native
String.prototype.toChinese = function() {
  const regEx = /[^\u4E00-\u9FA5\uF900-\uFA2D]/g
  return this.replace(regEx, '')
}

// eslint-disable-next-line no-extend-native
String.prototype.toNumber = function() {
  const regEx = /[^\d]/g
  return this.replace(regEx, '')
}

// eslint-disable-next-line no-extend-native
String.prototype.toInteger = function() {
  return isNaN(parseInt(this)) ? this.toString() : parseInt(this)
}

// eslint-disable-next-line no-extend-native
String.prototype.toMillisec = function() {
  return Math.floor(new Date(Date.parse(this.replace(/-/g, '/'))).getTime())
}

// eslint-disable-next-line no-extend-native
String.prototype.toSeconds = function() {
  return (
    Math.floor(new Date(Date.parse(this.replace(/-/g, '/'))).getTime()) / 1000
  )
}
// eslint-disable-next-line no-extend-native
String.prototype.lengthw = function() {
  const regEx = /^[\u4E00-\u9FA5\uF900-\uFA2D]+$/
  if (regEx.test(this)) {
    return this.length * 2
  } else {
    // eslint-disable-next-line no-control-regex
    const oMatches = this.match(/[\x00-\xFF]/g)
    const oLength = this.length * 2 - oMatches.length
    return oLength
  }
}

// eslint-disable-next-line no-extend-native
String.prototype.file_srcname = function() {
  // eslint-disable-next-line no-useless-escape
  const regEx = /^.*\/([^\/\?]*).*$/
  return this.replace(regEx, '$1')
}

// eslint-disable-next-line no-extend-native
String.prototype.file_extname = function() {
  // eslint-disable-next-line no-useless-escape
  const regEx = /^.*\/[^\/]*(\.[^\.\?]*).*$/
  return this.replace(regEx, '$1')
}

// eslint-disable-next-line no-extend-native
String.prototype.replaceAll = function(reallyDo, replaceWith, ignoreCase) {
  if (!RegExp.prototype.isPrototypeOf(reallyDo)) {
    return this.replace(
      new RegExp(reallyDo, ignoreCase ? 'gi' : 'g'),
      replaceWith
    )
  } else {
    return this.replace(reallyDo, replaceWith)
  }
}

// eslint-disable-next-line no-extend-native
Number.prototype.toStringWithZero = function(oCount) {
  let strText = this.toString()
  while (strText.length < oCount) {
    strText = '0' + strText
  }
  return strText
}

// eslint-disable-next-line no-extend-native
Number.prototype.toStringWithBlank = function(oCount) {
  let strText = this.toString()
  while (strText.length < oCount) {
    strText = ' ' + strText
  }
  return strText
}

// eslint-disable-next-line no-extend-native
Number.prototype.toWCharCode = function() {
  return String.fromCharCode(this)
}

// eslint-disable-next-line no-extend-native
Number.prototype.nextInt = function() {
  return Math.floor(this * Math.random())
}

// eslint-disable-next-line no-extend-native
Array.prototype.shuffle = function() {
  return this.slice().sort(function() {
    return 0.5 - Math.random()
  })
}

// eslint-disable-next-line no-extend-native
Array.prototype.sorting = function(_sort) {
  return this.slice().sort(function(v1, v2) {
    return _sort === 'desc' ? v1 < v2 : v1 >= v2
  })
}
/**
Array.prototype.sorting= function(_sort) {
    var oValue;
    if (_sort == "desc") {
        for (var i = 0; i < this.length; i++) {
            for (var j = 0; j <= i; j++) {
                if (this[i] > this[j]) {
                    oValue = this[i];
                    this[i] = this[j];
                    this[j] = oValue;
                }
            }
        }
    } else { //默认升序
        for (var i = 0; i < this.length; i++) {
            for (var j = 0; j <= i; j++) {
                if (this[i] < this[j]) {
                    oValue = this[i];
                    this[i] = this[j];
                    this[j] = oValue;
                }
            }
        }
    }
    return this;
};
 */

// eslint-disable-next-line no-extend-native
Array.prototype.max = function() {
  let oValue = 0
  for (let i = 0; i < this.length; i++) {
    if (this[i] > oValue) {
      oValue = this[i]
    }
  }
  return oValue
}

// eslint-disable-next-line no-extend-native
Array.prototype.min = function() {
  let oValue = 0
  for (let i = 0; i < this.length; i++) {
    if (this[i] < oValue) {
      oValue = this[i]
    }
  }
  return oValue
}

Date.dayNames = [
  '\u935B\u3126\u68e9',
  '\u935B\u3124\u7af4',
  '\u935B\u3124\u7c29',
  '\u935B\u3124\u7b01',
  '\u935B\u3125\u6d13',
  '\u935B\u3124\u7c32',
  '\u935B\u3125\u53da'
]
Date.abbrDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
Date.monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
Date.abbrMonthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]
Date.firstDayOfWeek = 1
Date.format = 'dd/mm/yyyy'
Date.fullYearStart = '20'
;(function() {
  function B(C, D) {
    if (!Date.prototype[C]) {
      // eslint-disable-next-line no-extend-native
      Date.prototype[C] = D
    }
  }
  B('isLeapYear', function() {
    const C = this.getFullYear()
    return (C % 4 === 0 && C % 100 !== 0) || C % 400 === 0
  })
  B('isWeekend', function() {
    return this.getDay() === 0 || this.getDay() === 6
  })
  B('isWeekDay', function() {
    return !this.isWeekend()
  })
  B('getDaysInMonth', function() {
    return [
      31,
      this.isLeapYear() ? 29 : 28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31
    ][this.getMonth()]
  })
  B('getDayName', function(C) {
    return C ? Date.abbrDayNames[this.getDay()] : Date.dayNames[this.getDay()]
  })
  B('getMonthName', function(C) {
    return C
      ? Date.abbrMonthNames[this.getMonth()]
      : Date.monthNames[this.getMonth()]
  })
  B('getDayOfYear', function() {
    const C = new Date('1/1/' + this.getFullYear())
    return Math.floor((this.getTime() - C.getTime()) / 86400000)
  })
  B('getWeekOfYear', function() {
    return Math.ceil(this.getDayOfYear() / 7)
  })
  B('setDayOfYear', function(C) {
    this.setMonth(0)
    this.setDate(C)
    return this
  })
  B('addYears', function(C) {
    this.setFullYear(this.getFullYear() + C)
    return this
  })
  B('addMonths', function(D) {
    const C = this.getDate()
    this.setMonth(this.getMonth() + D)
    if (C > this.getDate()) {
      this.addDays(-this.getDate())
    }
    return this
  })
  B('addDays', function(C) {
    this.setTime(this.getTime() + C * 86400000)
    return this
  })
  B('addHours', function(C) {
    this.setHours(this.getHours() + C)
    return this
  })
  B('addMinutes', function(C) {
    this.setMinutes(this.getMinutes() + C)
    return this
  })
  B('addSeconds', function(C) {
    this.setSeconds(this.getSeconds() + C)
    return this
  })
  B('zeroTime', function() {
    this.setMilliseconds(0)
    this.setSeconds(0)
    this.setMinutes(0)
    this.setHours(0)
    return this
  })
  B('asString', function(D) {
    const C = D || Date.format
    return C.split('yyyy')
      .join(this.getFullYear())
      .split('yy')
      .join((this.getFullYear() + '').substring(2))
      .split('mmmm')
      .join(this.getMonthName(false))
      .split('mmm')
      .join(this.getMonthName(true))
      .split('mm')
      .join(A(this.getMonth() + 1))
      .split('dd')
      .join(A(this.getDate()))
      .split('hh')
      .join(A(this.getHours()))
      .split('min')
      .join(A(this.getMinutes()))
      .split('ss')
      .join(A(this.getSeconds()))
  })
  Date.fromString = function(L, K) {
    const G = K || Date.format
    const J = new Date('01/01/1977')
    let H = 0
    let C = G.indexOf('mmmm')
    if (C > -1) {
      let _E = 0
      for (let E = 0; E < Date.monthNames.length; _E = E++) {
        const D = L.substr(C, Date.monthNames[E].length)
        if (Date.monthNames[E] === D) {
          H = Date.monthNames[E].length - 4
          break
        }
      }
      J.setMonth(_E)
    } else {
      C = G.indexOf('mmm')
      if (C > -1) {
        const D = L.substr(C, 3)
        let _E = 0
        for (let E = 0; E < Date.abbrMonthNames.length; _E = E++) {
          if (Date.abbrMonthNames[E] === D) {
            break
          }
        }
        J.setMonth(_E)
      } else {
        J.setMonth(Number(L.substr(G.indexOf('mm'), 2)) - 1)
      }
    }
    let I = G.indexOf('yyyy')
    if (I > -1) {
      if (C < I) {
        I += H
      }
      J.setFullYear(Number(L.substr(I, 4)))
    } else {
      if (C < I) {
        I += H
      }
      J.setFullYear(Number(Date.fullYearStart + L.substr(G.indexOf('yy'), 2)))
    }
    let F = G.indexOf('dd')
    if (C < F) {
      F += H
    }
    J.setDate(Number(L.substr(F, 2)))
    if (isNaN(J.getTime())) {
      return false
    }
    return J
  }
  // eslint-disable-next-line no-var
  var A = function(C) {
    const D = '0' + C
    return D.substring(D.length - 2)
  }
})()

// eslint-disable-next-line no-extend-native
Date.prototype.toChinese = function() {
  let oDateText = ''
  oDateText +=
    // eslint-disable-next-line no-new-wrappers
    this.getFullYear().toStringWithZero(4) + new Number(24180).toWCharCode()
  oDateText +=
    // eslint-disable-next-line no-new-wrappers
    (this.getMonth() + 1).toStringWithZero(2) + new Number(26376).toWCharCode()
  oDateText +=
    // eslint-disable-next-line no-new-wrappers
    this.getDate().toStringWithZero(2) + new Number(26085).toWCharCode()
  oDateText +=
    // eslint-disable-next-line no-new-wrappers
    this.getHours().toStringWithZero(2) + new Number(26102).toWCharCode()
  oDateText +=
    // eslint-disable-next-line no-new-wrappers
    this.getMinutes().toStringWithZero(2) + new Number(20998).toWCharCode()
  oDateText +=
    // eslint-disable-next-line no-new-wrappers
    this.getSeconds().toStringWithZero(2) + new Number(31186).toWCharCode()
  oDateText +=
    // eslint-disable-next-line no-new-wrappers
    new Number(32).toWCharCode() +
    // eslint-disable-next-line no-new-wrappers
    new Number(32).toWCharCode() +
    // eslint-disable-next-line no-new-wrappers
    new Number(26143).toWCharCode() +
    // eslint-disable-next-line no-new-wrappers
    new Number(26399).toWCharCode() +
    // eslint-disable-next-line no-new-wrappers
    new String('26085199682010819977222352011620845')
      .substr(this.getDay() * 5, 5)
      .toInteger()
      .toWCharCode()
  return oDateText
}

// eslint-disable-next-line no-extend-native
Date.prototype.diff = function(vtype, value) {
  // 若参数不足或 objDate 不是日期类型則回传 undefined
  if (arguments.length < 2 || value.constructor !== Date) {
    return undefined
  }
  switch (vtype) {
    // 计算秒差
    case 's':
      return parseInt((value - this) / 1000)
    // 计算分差
    case 'n':
      return parseInt((value - this) / 60000)
    // 计算時差
    case 'h':
      return parseInt((value - this) / 3600000)
    // 计算日差
    case 'd':
      return parseInt((value - this) / 86400000)
    // 计算周差
    case 'w':
      return parseInt((value - this) / (86400000 * 7))
    // 计算月差
    case 'm':
      return (
        value.getMonth() +
        1 +
        (value.getFullYear() - this.getFullYear()) * 12 -
        (this.getMonth() + 1)
      )
    // 计算年差
    case 'y':
      return value.getFullYear() - this.getFullYear()
    // 输入有误
    default:
      return undefined
  }
}

Object.isObject = function(obj) {
  const type = typeof obj
  return obj !== null && (type === 'object' || type === 'function')
}

Object.toObject = function(obj) {
  if (obj === null || obj === undefined) {
    throw new TypeError('Cannot convert undefined or null to object')
  }
  return Object(obj)
}

Object.isNull = function(obj) {
  return obj == null || obj === undefined || typeof obj === 'undefined'
}

Object.isEmpty = function(obj) {
  return (
    obj == null || obj === undefined || typeof obj === 'undefined' || obj === ''
  )
}

Object.isBlank = function(obj) {
  if (
    obj == null ||
    obj === undefined ||
    typeof obj === 'undefined' ||
    obj === ''
  ) {
    return true
  }

  if (typeof obj === 'string' && obj.trim() === '') {
    return true
  }
}

/** 把对象转成 查询参数 */
Object.toParams = function(obj) {
  const _tmp = []
  const _obj = Object.toSubmit(obj)
  for (const key in _obj) {
    _tmp.push(key + '=' + _obj[key])
  }
  return _tmp.join('&')
}
/** 把对象转成 表单对象 */
Object.toSubmit = function(obj) {
  if (
    obj == null ||
    obj === undefined ||
    typeof obj === 'undefined' ||
    obj === ''
  ) {
    return null
  }

  const _obj = {}
  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      for (let i = 0; i < obj[key].length; i++) {
        if (obj[key][i] instanceof Object) {
          for (const _key in obj[key][i]) {
            _obj[key + '[' + i + '].' + _key] = obj[key][i][_key]
          }
        } else {
          _obj[key + '[' + i + ']'] = obj[key][i]
        }
      }
    } else {
      _obj[key] = obj[key]
    }
  }
  return _obj
}

const CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(
  ''
)
Math.uuid = String.uuid = function(len, radix) {
  const chars = CHARS
  const uuid = []
  let i
  radix = radix || chars.length

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)]
  } else {
    // rfc4122, version 4 form
    let r

    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
    uuid[14] = '4'

    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16)
        uuid[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r]
      }
    }
  }
  return uuid.join('')
}

Math.uuidFast = String.uuidFast = function() {
  const chars = CHARS
  const uuid = new Array(36)
  let rnd = 0
  let r
  for (let i = 0; i < 36; i++) {
    if (i === 8 || i === 13 || i === 18 || i === 23) {
      uuid[i] = '-'
    } else if (i === 14) {
      uuid[i] = '4'
    } else {
      if (rnd <= 0x02) rnd = (0x2000000 + Math.random() * 0x1000000) | 0
      // eslint-disable-next-line unicorn/number-literal-case
      r = rnd & 0xff
      rnd = rnd >> 4
      uuid[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r]
    }
  }
  return uuid.join('')
}

// A more compact, but less performant, RFC4122v4 solution:
Math.uuidCompact = String.uuidCompact = function() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
