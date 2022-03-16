interface dropShadow {
    x?: number;
    y?: number;
    blur?: number;
    color?: string;
}
interface Props {
    children: any;
    grayScale?: number;
    blur?: number;
    brightness?: number;
    contrast?: number;
    invert?: number;
    sepia?: number;
    hueRotate?: number;
    saturate?: number;
    dropShadow?: dropShadow;
}
export default Props;
