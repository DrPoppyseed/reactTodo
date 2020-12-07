"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createItem = exports.fetchItemById = exports.fetchItems = void 0;

var _types = require("./types");

var _history = _interopRequireDefault(require("../history"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fetchItems = function fetchItems() {
  return function _callee(dispatch) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch({
              type: _types.FETCHING_ITEMS
            });
            (0, _axios["default"])({
              url: 'http://localhost:8003/',
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
              }
            }).then(function (response) {
              console.log('from inside itemActions/fetchItems....');
              console.log(response);
              dispatch({
                type: _types.FETCH_ITEMS,
                payload: response.data
              });
            })["catch"](function (err) {
              console.log(err);
              dispatch({
                type: _types.FETCH_ITEMS_ERROR,
                payload: err
              });
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.fetchItems = fetchItems;

var fetchItemById = function fetchItemById() {
  dispatch({
    type: FETCHING_ITEM_BY_ID
  });
  (0, _axios["default"])({
    url: 'http://localhost:8003/:itemId',
    method: 'GET',
    header: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }).then(function (response) {
    dispatch({
      type: _types.FETCH_ITEM_BY_ID,
      payload: response.data
    });
  })["catch"](function (err) {
    console.log(err);
    dispatch({
      type: _types.FETCH_ITEM_BY_ID_ERROR,
      payload: err
    });
  });
};

exports.fetchItemById = fetchItemById;

var createItem = function createItem(formValues) {
  return function (dispatch, getState) {
    (0, _axios["default"])({
      url: 'http://localhost:8003/item',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      data: _objectSpread({}, formValues)
    }).then(function (response) {
      console.log(response);
      dispatch({
        type: _types.CREATE_ITEM,
        payload: response.data
      });

      _history["default"].push('/');
    })["catch"](function (err) {
      setIsLoading(false);
      console.log(err);
    });
  };
}; // const updateItem = () => {
// 	return {
// 		type: UPDATE_ITEM
// 	}
// }
// const deleteItem = () => {
// 	return {
// 		type: DELETE_ITEM
// 	}
// }


exports.createItem = createItem;