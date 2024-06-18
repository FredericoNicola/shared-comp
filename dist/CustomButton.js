"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var CustomButton = function (_a) {
    var title = _a.title, onPress = _a.onPress, style = _a.style, textStyle = _a.textStyle;
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { style: [styles.button, style], onPress: onPress },
        react_1.default.createElement(react_native_1.Text, { style: [styles.buttonText, textStyle] }, title)));
};
var styles = react_native_1.StyleSheet.create({
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
exports.default = CustomButton;
