"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
function Filters(props) {
    var _a = (0, react_2.useState)(react_1["default"].createElement('div', {}, props.children)), filter = _a[0], setFilter = _a[1];
    (0, react_2.useEffect)(function () {
        var grayscale = props.grayscale, blur = props.blur, brightness = props.brightness, contrast = props.contrast, invert = props.invert, sepia = props.sepia, hueRotate = props.hueRotate, saturate = props.saturate, dropShadow = props.dropShadow;
        var filt = [
            {
                filter: "grayscale(".concat(grayscale, ")"),
                value: grayscale
            },
            {
                filter: "blur(".concat(blur, "px)"),
                value: blur
            },
            {
                filter: "brightness(".concat(brightness, ")"),
                value: brightness
            },
            {
                filter: "contrast(".concat(contrast, ")"),
                value: contrast
            },
            {
                filter: "invert(".concat(invert, ")"),
                value: invert
            },
            {
                filter: "sepia(".concat(sepia, ")"),
                value: sepia
            },
            {
                filter: "hue-rotate(".concat(hueRotate, "deg)"),
                value: hueRotate
            },
            {
                filter: "saturate(".concat(saturate, ")"),
                value: saturate
            },
            {
                filter: "drop-shadow(".concat(dropShadow === null || dropShadow === void 0 ? void 0 : dropShadow.x, "px ").concat(dropShadow === null || dropShadow === void 0 ? void 0 : dropShadow.y, "px ").concat(dropShadow === null || dropShadow === void 0 ? void 0 : dropShadow.blur, "px ").concat(dropShadow === null || dropShadow === void 0 ? void 0 : dropShadow.color, ")"),
                value: dropShadow
            },
        ].filter(function (item) { return item.value !== undefined; });
        setFilter(function (prev) {
            var size = filt.length - 1;
            var newFilter = filt
                .map(function (item, index) {
                return react_1["default"].createElement('div', {
                    key: item.filter,
                    style: {
                        filter: item.filter
                    }
                });
            })
                .reverse();
            var res = [];
            var previous = react_1["default"].createElement('div', {}, props.children);
            for (var i = 0; i <= size; i++) {
                if (res.length == 0) {
                    res.push(react_1["default"].cloneElement(newFilter[i], {}, props.children));
                    previous = res[0];
                }
                else {
                    res.push(react_1["default"].cloneElement(newFilter[i], {}, previous));
                    previous = res[i];
                }
            }
            console.log(previous);
            return previous;
        });
    }, [props]);
    return react_1["default"].createElement(react_2.Fragment, null, filter);
}
exports["default"] = Filters;
