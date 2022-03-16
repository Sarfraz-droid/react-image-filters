"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
function Filters(props) {
    var _a = (0, react_1.useState)(react_1.default.createElement('div', {}, props.children)), filter = _a[0], setFilter = _a[1];
    (0, react_1.useEffect)(function () {
        var grayScale = props.grayScale, blur = props.blur, brightness = props.brightness, contrast = props.contrast, invert = props.invert, sepia = props.sepia, hueRotate = props.hueRotate, saturate = props.saturate, dropShadow = props.dropShadow;
        var filt = [
            {
                filter: "grayscale(".concat(grayScale, ")"),
                value: grayScale,
            },
            {
                filter: "blur(".concat(blur, "px)"),
                value: blur,
            },
            {
                filter: "brightness(".concat(brightness, ")"),
                value: brightness,
            },
            {
                filter: "contrast(".concat(contrast, ")"),
                value: contrast,
            },
            {
                filter: "invert(".concat(invert, ")"),
                value: invert,
            },
            {
                filter: "sepia(".concat(sepia, ")"),
                value: sepia,
            },
            {
                filter: "hue-rotate(".concat(hueRotate, "deg)"),
                value: hueRotate,
            },
            {
                filter: "saturate(".concat(saturate, ")"),
                value: saturate,
            },
            {
                filter: "drop-shadow(".concat(dropShadow === null || dropShadow === void 0 ? void 0 : dropShadow.x, "px ").concat(dropShadow === null || dropShadow === void 0 ? void 0 : dropShadow.y, "px ").concat(dropShadow === null || dropShadow === void 0 ? void 0 : dropShadow.blur, "px ").concat(dropShadow === null || dropShadow === void 0 ? void 0 : dropShadow.color, ")"),
                value: dropShadow,
            },
        ].filter(function (item) { return item.value !== undefined; });
        setFilter(function (prev) {
            var size = filt.length - 1;
            var newFilter = filt
                .map(function (item, index) {
                return react_1.default.createElement('div', {
                    key: item.filter,
                    style: {
                        filter: item.filter,
                    },
                });
            })
                .reverse();
            var res = [];
            var previous = react_1.default.createElement('div', {}, props.children);
            for (var i = 0; i <= size; i++) {
                if (res.length == 0) {
                    res.push(react_1.default.cloneElement(newFilter[i], {}, props.children));
                    previous = res[0];
                }
                else {
                    res.push(react_1.default.cloneElement(newFilter[i], {}, previous));
                    previous = res[i];
                }
            }
            console.log(previous);
            return previous;
        });
    }, [__assign({}, props)]);
    return react_1.default.createElement(react_1.default.Fragment, null, filter);
}
exports.default = Filters;
