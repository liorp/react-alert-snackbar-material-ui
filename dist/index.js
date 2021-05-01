"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Snackbar_1 = __importDefault(require("@material-ui/core/Snackbar"));
const Alert_1 = __importDefault(require("@material-ui/lab/Alert"));
function Alert(props) {
    return react_1.default.createElement(Alert_1.default, Object.assign({ elevation: 6, variant: "filled" }, props));
}
const AlertSnackbar = ({ message, options, close, style }) => {
    // @ts-ignore
    const { type, timeout, position } = options;
    const anchorOrigin = {
        vertical: position.split(" ")[0],
        horizontal: position.split(" ")[1]
    };
    return (react_1.default.createElement(Snackbar_1.default, { anchorOrigin: anchorOrigin, open: true, autoHideDuration: timeout, style: Object.assign(Object.assign({}, style), { minWidth: "30vw" }) },
        react_1.default.createElement(Alert, { onClose: close, severity: type }, message)));
};
exports.default = AlertSnackbar;
//# sourceMappingURL=index.js.map