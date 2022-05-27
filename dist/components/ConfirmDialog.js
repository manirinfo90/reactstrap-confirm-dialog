"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactstrap = require("reactstrap");

require("bootstrap/dist/css/bootstrap.min.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ConfirmDialog = _ref => {
  let {
    onClose,
    message,
    title,
    confirmText,
    cancelText,
    confirmColor,
    cancelColor,
    className,
    buttonsComponent,
    size,
    bodyComponent,
    modalProps
  } = _ref;

  let buttonsContent = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, cancelText && /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
    color: cancelColor,
    onClick: () => onClose(false)
  }, cancelText), " ", /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
    color: confirmColor,
    onClick: () => onClose(true)
  }, confirmText));

  if (buttonsComponent) {
    const CustomComponent = buttonsComponent;
    buttonsContent = /*#__PURE__*/_react.default.createElement(CustomComponent, {
      onClose: onClose
    });
  }

  let BodyComponent = bodyComponent;
  return /*#__PURE__*/_react.default.createElement(_reactstrap.Modal, _extends({
    size: size,
    isOpen: true,
    toggle: () => onClose(false),
    className: "reactstrap-confirm ".concat(className)
  }, modalProps), title && /*#__PURE__*/_react.default.createElement(_reactstrap.ModalHeader, {
    toggle: () => onClose(false)
  }, title || null), /*#__PURE__*/_react.default.createElement(_reactstrap.ModalBody, null, bodyComponent ? /*#__PURE__*/_react.default.createElement(BodyComponent, null) : message), /*#__PURE__*/_react.default.createElement(_reactstrap.ModalFooter, null, buttonsContent));
};

ConfirmDialog.defaultProps = {
  message: "Are you sure?",
  title: "Warning!",
  confirmText: "Ok",
  cancelText: "Cancel",
  confirmColor: "primary",
  cancelColor: "",
  className: "",
  buttonsComponent: null,
  size: null,
  bodyComponent: null,
  modalProps: {}
};
ConfirmDialog.propTypes = {
  onClose: _propTypes.default.func.isRequired,
  message: _propTypes.default.node,
  title: _propTypes.default.node,
  confirmText: _propTypes.default.node,
  cancelText: _propTypes.default.node,
  confirmColor: _propTypes.default.string,
  cancelColor: _propTypes.default.string,
  className: _propTypes.default.string,
  size: _propTypes.default.string,
  buttonsComponent: _propTypes.default.func,
  bodyComponent: _propTypes.default.func,
  modalProps: _propTypes.default.object
};
var _default = ConfirmDialog;
exports.default = _default;