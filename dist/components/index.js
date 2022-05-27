"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

var _react = _interopRequireDefault(require("react"));

var _client = require("react-dom/client");

var _ConfirmDialog = _interopRequireDefault(require("./ConfirmDialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const confirm = props => {
  return new Promise(resolve => {
    let containerEl = document.createElement("div");
    const confirmDialogRoot = (0, _client.createRoot)(containerEl);

    const handleResolve = result => {
      confirmDialogRoot.unmount();
      containerEl = null;
      resolve(result);
    };

    confirmDialogRoot.render( /*#__PURE__*/_react.default.createElement(_ConfirmDialog.default, _extends({}, props, {
      onClose: handleResolve
    })));
  });
};

var _default = confirm;
exports.default = _default;