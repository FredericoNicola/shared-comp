"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var CustomButton = function (_a) {
    var title = _a.title, onPress = _a.onPress;
    return (react_1.default.createElement(react_native_1.Button, { title: title, onPress: onPress }));
};
exports.default = CustomButton;
