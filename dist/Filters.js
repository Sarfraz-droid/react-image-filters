"use strict";
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
const react_1 = __importStar(require("react"));
function Filters(props) {
    const [filter, setFilter] = (0, react_1.useState)(react_1.default.createElement('div', {}, props.children));
    (0, react_1.useEffect)(() => {
        const { grayscale, blur, brightness, contrast, invert, sepia, hueRotate, saturate, dropShadow, } = props;
        const filt = [
            {
                filter: `grayscale(${grayscale})`,
                value: grayscale,
            },
            {
                filter: `blur(${blur}px)`,
                value: blur,
            },
            {
                filter: `brightness(${brightness})`,
                value: brightness,
            },
            {
                filter: `contrast(${contrast})`,
                value: contrast,
            },
            {
                filter: `invert(${invert})`,
                value: invert,
            },
            {
                filter: `sepia(${sepia})`,
                value: sepia,
            },
            {
                filter: `hue-rotate(${hueRotate}deg)`,
                value: hueRotate,
            },
            {
                filter: `saturate(${saturate})`,
                value: saturate,
            },
            {
                filter: `drop-shadow(${dropShadow === null || dropShadow === void 0 ? void 0 : dropShadow.x}px ${dropShadow === null || dropShadow === void 0 ? void 0 : dropShadow.y}px ${dropShadow === null || dropShadow === void 0 ? void 0 : dropShadow.blur}px ${dropShadow === null || dropShadow === void 0 ? void 0 : dropShadow.color})`,
                value: dropShadow,
            },
        ].filter((item) => item.value !== undefined);
        setFilter((prev) => {
            let size = filt.length - 1;
            const newFilter = filt
                .map((item, index) => {
                return react_1.default.createElement('div', {
                    key: item.filter,
                    style: {
                        filter: item.filter,
                    },
                });
            })
                .reverse();
            let res = [];
            let previous = react_1.default.createElement('div', {}, props.children);
            for (let i = 0; i <= size; i++) {
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
    }, [Object.assign({}, props)]);
    return react_1.default.createElement(react_1.default.Fragment, null, filter);
}
exports.default = Filters;
//# sourceMappingURL=Filters.js.map