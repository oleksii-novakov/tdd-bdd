System.registerDynamic("npm:lodash-node@3.10.1/modern/utility/identity", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function identity(value) {
    return value;
  }
  module.exports = identity;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:lodash-node@3.10.1/modern/internal/bindCallback", ["npm:lodash-node@3.10.1/modern/utility/identity"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var identity = $__require('npm:lodash-node@3.10.1/modern/utility/identity');
  function bindCallback(func, thisArg, argCount) {
    if (typeof func != 'function') {
      return identity;
    }
    if (thisArg === undefined) {
      return func;
    }
    switch (argCount) {
      case 1:
        return function(value) {
          return func.call(thisArg, value);
        };
      case 3:
        return function(value, index, collection) {
          return func.call(thisArg, value, index, collection);
        };
      case 4:
        return function(accumulator, value, index, collection) {
          return func.call(thisArg, accumulator, value, index, collection);
        };
      case 5:
        return function(value, other, key, object, source) {
          return func.call(thisArg, value, other, key, object, source);
        };
    }
    return function() {
      return func.apply(thisArg, arguments);
    };
  }
  module.exports = bindCallback;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:lodash-node@3.10.1/modern/lang/isTypedArray", ["npm:lodash-node@3.10.1/modern/internal/isLength", "npm:lodash-node@3.10.1/modern/internal/isObjectLike"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isLength = $__require('npm:lodash-node@3.10.1/modern/internal/isLength'),
      isObjectLike = $__require('npm:lodash-node@3.10.1/modern/internal/isObjectLike');
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      weakMapTag = '[object WeakMap]';
  var arrayBufferTag = '[object ArrayBuffer]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  var objectProto = Object.prototype;
  var objToString = objectProto.toString;
  function isTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
  }
  module.exports = isTypedArray;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:lodash-node@3.10.1/modern/object/keysIn", ["npm:lodash-node@3.10.1/modern/lang/isArguments", "npm:lodash-node@3.10.1/modern/lang/isArray", "npm:lodash-node@3.10.1/modern/internal/isIndex", "npm:lodash-node@3.10.1/modern/internal/isLength", "npm:lodash-node@3.10.1/modern/lang/isObject"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isArguments = $__require('npm:lodash-node@3.10.1/modern/lang/isArguments'),
      isArray = $__require('npm:lodash-node@3.10.1/modern/lang/isArray'),
      isIndex = $__require('npm:lodash-node@3.10.1/modern/internal/isIndex'),
      isLength = $__require('npm:lodash-node@3.10.1/modern/internal/isLength'),
      isObject = $__require('npm:lodash-node@3.10.1/modern/lang/isObject');
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function keysIn(object) {
    if (object == null) {
      return [];
    }
    if (!isObject(object)) {
      object = Object(object);
    }
    var length = object.length;
    length = (length && isLength(length) && (isArray(object) || isArguments(object)) && length) || 0;
    var Ctor = object.constructor,
        index = -1,
        isProto = typeof Ctor == 'function' && Ctor.prototype === object,
        result = Array(length),
        skipIndexes = length > 0;
    while (++index < length) {
      result[index] = (index + '');
    }
    for (var key in object) {
      if (!(skipIndexes && isIndex(key, length)) && !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }
  module.exports = keysIn;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:lodash-node@3.10.1/modern/internal/isIndex", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var reIsUint = /^\d+$/;
  var MAX_SAFE_INTEGER = 9007199254740991;
  function isIndex(value, length) {
    value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return value > -1 && value % 1 == 0 && value < length;
  }
  module.exports = isIndex;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:lodash-node@3.10.1/modern/lang/isArray", ["npm:lodash-node@3.10.1/modern/internal/getNative", "npm:lodash-node@3.10.1/modern/internal/isLength", "npm:lodash-node@3.10.1/modern/internal/isObjectLike"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var getNative = $__require('npm:lodash-node@3.10.1/modern/internal/getNative'),
      isLength = $__require('npm:lodash-node@3.10.1/modern/internal/isLength'),
      isObjectLike = $__require('npm:lodash-node@3.10.1/modern/internal/isObjectLike');
  var arrayTag = '[object Array]';
  var objectProto = Object.prototype;
  var objToString = objectProto.toString;
  var nativeIsArray = getNative(Array, 'isArray');
  var isArray = nativeIsArray || function(value) {
    return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
  };
  module.exports = isArray;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:lodash-node@3.10.1/modern/lang/isArguments", ["npm:lodash-node@3.10.1/modern/internal/isArrayLike", "npm:lodash-node@3.10.1/modern/internal/isObjectLike"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isArrayLike = $__require('npm:lodash-node@3.10.1/modern/internal/isArrayLike'),
      isObjectLike = $__require('npm:lodash-node@3.10.1/modern/internal/isObjectLike');
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  function isArguments(value) {
    return isObjectLike(value) && isArrayLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
  }
  module.exports = isArguments;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:lodash-node@3.10.1/modern/internal/shimKeys", ["npm:lodash-node@3.10.1/modern/lang/isArguments", "npm:lodash-node@3.10.1/modern/lang/isArray", "npm:lodash-node@3.10.1/modern/internal/isIndex", "npm:lodash-node@3.10.1/modern/internal/isLength", "npm:lodash-node@3.10.1/modern/object/keysIn"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isArguments = $__require('npm:lodash-node@3.10.1/modern/lang/isArguments'),
      isArray = $__require('npm:lodash-node@3.10.1/modern/lang/isArray'),
      isIndex = $__require('npm:lodash-node@3.10.1/modern/internal/isIndex'),
      isLength = $__require('npm:lodash-node@3.10.1/modern/internal/isLength'),
      keysIn = $__require('npm:lodash-node@3.10.1/modern/object/keysIn');
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function shimKeys(object) {
    var props = keysIn(object),
        propsLength = props.length,
        length = propsLength && object.length;
    var allowIndexes = !!length && isLength(length) && (isArray(object) || isArguments(object));
    var index = -1,
        result = [];
    while (++index < propsLength) {
      var key = props[index];
      if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
        result.push(key);
      }
    }
    return result;
  }
  module.exports = shimKeys;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:lodash-node@3.10.1/modern/internal/isLength", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var MAX_SAFE_INTEGER = 9007199254740991;
  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  module.exports = isLength;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:lodash-node@3.10.1/modern/internal/baseProperty", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }
  module.exports = baseProperty;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:lodash-node@3.10.1/modern/internal/getLength", ["npm:lodash-node@3.10.1/modern/internal/baseProperty"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseProperty = $__require('npm:lodash-node@3.10.1/modern/internal/baseProperty');
  var getLength = baseProperty('length');
  module.exports = getLength;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:lodash-node@3.10.1/modern/internal/isArrayLike", ["npm:lodash-node@3.10.1/modern/internal/getLength", "npm:lodash-node@3.10.1/modern/internal/isLength"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var getLength = $__require('npm:lodash-node@3.10.1/modern/internal/getLength'),
      isLength = $__require('npm:lodash-node@3.10.1/modern/internal/isLength');
  function isArrayLike(value) {
    return value != null && isLength(getLength(value));
  }
  module.exports = isArrayLike;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:lodash-node@3.10.1/modern/internal/isObjectLike", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }
  module.exports = isObjectLike;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:lodash-node@3.10.1/modern/lang/isObject", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }
  module.exports = isObject;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:lodash-node@3.10.1/modern/lang/isFunction", ["npm:lodash-node@3.10.1/modern/lang/isObject"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = $__require('npm:lodash-node@3.10.1/modern/lang/isObject');
  var funcTag = '[object Function]';
  var objectProto = Object.prototype;
  var objToString = objectProto.toString;
  function isFunction(value) {
    return isObject(value) && objToString.call(value) == funcTag;
  }
  module.exports = isFunction;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:lodash-node@3.10.1/modern/lang/isNative", ["npm:lodash-node@3.10.1/modern/lang/isFunction", "npm:lodash-node@3.10.1/modern/internal/isObjectLike"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isFunction = $__require('npm:lodash-node@3.10.1/modern/lang/isFunction'),
      isObjectLike = $__require('npm:lodash-node@3.10.1/modern/internal/isObjectLike');
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var objectProto = Object.prototype;
  var fnToString = Function.prototype.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var reIsNative = RegExp('^' + fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  function isNative(value) {
    if (value == null) {
      return false;
    }
    if (isFunction(value)) {
      return reIsNative.test(fnToString.call(value));
    }
    return isObjectLike(value) && reIsHostCtor.test(value);
  }
  module.exports = isNative;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:lodash-node@3.10.1/modern/internal/getNative", ["npm:lodash-node@3.10.1/modern/lang/isNative"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isNative = $__require('npm:lodash-node@3.10.1/modern/lang/isNative');
  function getNative(object, key) {
    var value = object == null ? undefined : object[key];
    return isNative(value) ? value : undefined;
  }
  module.exports = getNative;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:lodash-node@3.10.1/modern/object/keys", ["npm:lodash-node@3.10.1/modern/internal/getNative", "npm:lodash-node@3.10.1/modern/internal/isArrayLike", "npm:lodash-node@3.10.1/modern/lang/isObject", "npm:lodash-node@3.10.1/modern/internal/shimKeys"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var getNative = $__require('npm:lodash-node@3.10.1/modern/internal/getNative'),
      isArrayLike = $__require('npm:lodash-node@3.10.1/modern/internal/isArrayLike'),
      isObject = $__require('npm:lodash-node@3.10.1/modern/lang/isObject'),
      shimKeys = $__require('npm:lodash-node@3.10.1/modern/internal/shimKeys');
  var nativeKeys = getNative(Object, 'keys');
  var keys = !nativeKeys ? shimKeys : function(object) {
    var Ctor = object == null ? undefined : object.constructor;
    if ((typeof Ctor == 'function' && Ctor.prototype === object) || (typeof object != 'function' && isArrayLike(object))) {
      return shimKeys(object);
    }
    return isObject(object) ? nativeKeys(object) : [];
  };
  module.exports = keys;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:lodash-node@3.10.1/modern/internal/equalObjects", ["npm:lodash-node@3.10.1/modern/object/keys"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var keys = $__require('npm:lodash-node@3.10.1/modern/object/keys');
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
    var objProps = keys(object),
        objLength = objProps.length,
        othProps = keys(other),
        othLength = othProps.length;
    if (objLength != othLength && !isLoose) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
        return false;
      }
    }
    var skipCtor = isLoose;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key],
          othValue = other[key],
          result = customizer ? customizer(isLoose ? othValue : objValue, isLoose ? objValue : othValue, key) : undefined;
      if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
        return false;
      }
      skipCtor || (skipCtor = key == 'constructor');
    }
    if (!skipCtor) {
      var objCtor = object.constructor,
          othCtor = other.constructor;
      if (objCtor != othCtor && ('constructor' in object && 'constructor' in other) && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
        return false;
      }
    }
    return true;
  }
  module.exports = equalObjects;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:lodash-node@3.10.1/modern/internal/equalByTag", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      numberTag = '[object Number]',
      regexpTag = '[object RegExp]',
      stringTag = '[object String]';
  function equalByTag(object, other, tag) {
    switch (tag) {
      case boolTag:
      case dateTag:
        return +object == +other;
      case errorTag:
        return object.name == other.name && object.message == other.message;
      case numberTag:
        return (object != +object) ? other != +other : object == +other;
      case regexpTag:
      case stringTag:
        return object == (other + '');
    }
    return false;
  }
  module.exports = equalByTag;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:lodash-node@3.10.1/modern/internal/arraySome", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function arraySome(array, predicate) {
    var index = -1,
        length = array.length;
    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }
  module.exports = arraySome;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:lodash-node@3.10.1/modern/internal/equalArrays", ["npm:lodash-node@3.10.1/modern/internal/arraySome"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var arraySome = $__require('npm:lodash-node@3.10.1/modern/internal/arraySome');
  function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
    var index = -1,
        arrLength = array.length,
        othLength = other.length;
    if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
      return false;
    }
    while (++index < arrLength) {
      var arrValue = array[index],
          othValue = other[index],
          result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;
      if (result !== undefined) {
        if (result) {
          continue;
        }
        return false;
      }
      if (isLoose) {
        if (!arraySome(other, function(othValue) {
          return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
        })) {
          return false;
        }
      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
        return false;
      }
    }
    return true;
  }
  module.exports = equalArrays;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:lodash-node@3.10.1/modern/internal/baseIsEqualDeep", ["npm:lodash-node@3.10.1/modern/internal/equalArrays", "npm:lodash-node@3.10.1/modern/internal/equalByTag", "npm:lodash-node@3.10.1/modern/internal/equalObjects", "npm:lodash-node@3.10.1/modern/lang/isArray", "npm:lodash-node@3.10.1/modern/lang/isTypedArray"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var equalArrays = $__require('npm:lodash-node@3.10.1/modern/internal/equalArrays'),
      equalByTag = $__require('npm:lodash-node@3.10.1/modern/internal/equalByTag'),
      equalObjects = $__require('npm:lodash-node@3.10.1/modern/internal/equalObjects'),
      isArray = $__require('npm:lodash-node@3.10.1/modern/lang/isArray'),
      isTypedArray = $__require('npm:lodash-node@3.10.1/modern/lang/isTypedArray');
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      objectTag = '[object Object]';
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var objToString = objectProto.toString;
  function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
    var objIsArr = isArray(object),
        othIsArr = isArray(other),
        objTag = arrayTag,
        othTag = arrayTag;
    if (!objIsArr) {
      objTag = objToString.call(object);
      if (objTag == argsTag) {
        objTag = objectTag;
      } else if (objTag != objectTag) {
        objIsArr = isTypedArray(object);
      }
    }
    if (!othIsArr) {
      othTag = objToString.call(other);
      if (othTag == argsTag) {
        othTag = objectTag;
      } else if (othTag != objectTag) {
        othIsArr = isTypedArray(other);
      }
    }
    var objIsObj = objTag == objectTag,
        othIsObj = othTag == objectTag,
        isSameTag = objTag == othTag;
    if (isSameTag && !(objIsArr || objIsObj)) {
      return equalByTag(object, other, objTag);
    }
    if (!isLoose) {
      var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
          othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
      if (objIsWrapped || othIsWrapped) {
        return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stackA || (stackA = []);
    stackB || (stackB = []);
    var length = stackA.length;
    while (length--) {
      if (stackA[length] == object) {
        return stackB[length] == other;
      }
    }
    stackA.push(object);
    stackB.push(other);
    var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);
    stackA.pop();
    stackB.pop();
    return result;
  }
  module.exports = baseIsEqualDeep;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:lodash-node@3.10.1/modern/internal/baseIsEqual", ["npm:lodash-node@3.10.1/modern/internal/baseIsEqualDeep", "npm:lodash-node@3.10.1/modern/lang/isObject", "npm:lodash-node@3.10.1/modern/internal/isObjectLike"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseIsEqualDeep = $__require('npm:lodash-node@3.10.1/modern/internal/baseIsEqualDeep'),
      isObject = $__require('npm:lodash-node@3.10.1/modern/lang/isObject'),
      isObjectLike = $__require('npm:lodash-node@3.10.1/modern/internal/isObjectLike');
  function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
  }
  module.exports = baseIsEqual;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:lodash-node@3.10.1/modern/lang/isEqual", ["npm:lodash-node@3.10.1/modern/internal/baseIsEqual", "npm:lodash-node@3.10.1/modern/internal/bindCallback"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseIsEqual = $__require('npm:lodash-node@3.10.1/modern/internal/baseIsEqual'),
      bindCallback = $__require('npm:lodash-node@3.10.1/modern/internal/bindCallback');
  function isEqual(value, other, customizer, thisArg) {
    customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
    var result = customizer ? customizer(value, other) : undefined;
    return result === undefined ? baseIsEqual(value, other, customizer) : !!result;
  }
  module.exports = isEqual;
  global.define = __define;
  return module.exports;
});

System.register('index.js', ['npm:lodash-node@3.10.1/modern/lang/isEqual'], function (_export) {
    'use strict';

    var _;

    return {
        setters: [function (_npmLodashNode3101ModernLangIsEqual) {
            _ = _npmLodashNode3101ModernLangIsEqual['default'];
        }],
        execute: function () {
            (function () {
                var tets1 = 'dsfs';
                console.log('test ' + tets1);
            })();
        }
    };
});
//# sourceMappingURL=index_bundle.js.map
function squareNum(num) {
    return num * num;
}

module.exports.squareNum = squareNum;