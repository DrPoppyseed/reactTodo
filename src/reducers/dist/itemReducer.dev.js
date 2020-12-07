"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = require("../actions/types");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INITIAL_STATE = {
  items: [],
  loading: false,
  message: '',
  error: ''
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types.FETCH_ITEMS:
      return _objectSpread({}, state, {
        items: [].concat(_toConsumableArray(state.items), _toConsumableArray(action.payload.items)),
        message: action.payload.message,
        loading: false
      });

    case _types.FETCHING_ITEMS:
      return _objectSpread({}, state, {
        loading: true
      });

    case _types.FETCH_ITEMS_ERROR:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload
      });

    case _types.CREATING_ITEM:
      return _objectSpread({}, state, {
        loading: true
      });

    case _types.CREATE_ITEM:
      return _objectSpread({}, state, {
        items: [].concat(_toConsumableArray(state.items), _toConsumableArray(action.payload.item)),
        message: action.payload.message,
        loading: false
      });

    case _types.CREATE_ITEM_ERROR:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload
      });

    case _types.FETCHING_ITEM_BY_ID:
      return _objectSpread({}, state, {
        loading: true
      });

    case _types.FETCH_ITEM_BY_ID:
      return _objectSpread({}, state, {
        loading: false
      });

    case _types.FETCH_ITEM_BY_ID_ERROR:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload
      });

    default:
      return state;
  }
};

exports["default"] = _default;