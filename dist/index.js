"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var ui_1 = require("@sanity/ui");
// import {useSecrets, SettingsView} from 'sanity-secrets'
// import Button from 'part:@sanity/components/buttons/default'
// import styles from './styles.css'
// const namespace = "snipcart-orders"
// const pluginConfigKeys = [{
//   key: 'apiKey',
//   title: 'Your secret API key'
// }]
var GlobalStyle = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @import 'part:@sanity/base/theme/variables-style';\n"], ["\n  @import 'part:@sanity/base/theme/variables-style';\n"
    // const Container = styled.div`
    //   composes: container from "part:@sanity/dashboard/widget-styles";
    // `
])));
// const Container = styled.div`
//   composes: container from "part:@sanity/dashboard/widget-styles";
// `
var Header = styled_components_1.default.header(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  composes: header from \"part:@sanity/dashboard/widget-styles\";\n"], ["\n  composes: header from \"part:@sanity/dashboard/widget-styles\";\n"])));
var Title = styled_components_1.default.h2(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  composes: title from \"part:@sanity/dashboard/widget-styles\";\n"], ["\n  composes: title from \"part:@sanity/dashboard/widget-styles\";\n"])));
var Content = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  composes: content from 'part:@sanity/dashboard/widget-styles';\n  border-top: 1px solid var(--hairline-color);\n  padding: var(--small-padding) 0;\n  display: grid;\n  align-items: center;\n  &> h2 {\n    text-align: center; \n  }\n"], ["\n  composes: content from 'part:@sanity/dashboard/widget-styles';\n  border-top: 1px solid var(--hairline-color);\n  padding: var(--small-padding) 0;\n  display: grid;\n  align-items: center;\n  &> h2 {\n    text-align: center; \n  }\n"])));
var Order = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: .6rem 1.6rem;\n  border-bottom: 1px solid var(--hairline-color);\n  &:last-child {\n    border-bottom: none;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: .6rem 1.6rem;\n  border-bottom: 1px solid var(--hairline-color);\n  &:last-child {\n    border-bottom: none;\n  }\n"])));
var Avatar = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  margin:.2rem;\n  overflow: hidden;\n"], ["\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  margin:.2rem;\n  overflow: hidden;\n"])));
var Name = styled_components_1.default.h4(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-size: 1.2rem;\n"], ["\n  font-size: 1.2rem;\n"])));
var Status = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"])));
var Link = styled_components_1.default.a(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  composes: item from 'part:@sanity/base/theme/layout/selectable-style';\n  display: block;\n  color: inherit;\n  text-decoration: inherit;\n  outline: none;\n  padding: var(--small-padding) var(--medium-padding);\n  height: 100%;\n  &:hover {\n    cursor: pointer;\n  }\n"], ["\n  composes: item from 'part:@sanity/base/theme/layout/selectable-style';\n  display: block;\n  color: inherit;\n  text-decoration: inherit;\n  outline: none;\n  padding: var(--small-padding) var(--medium-padding);\n  height: 100%;\n  &:hover {\n    cursor: pointer;\n  }\n"])));
var Button = styled_components_1.default.button(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n\n"], ["\n\n"])));
var Footer = styled_components_1.default.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  composes: footer from 'part:@sanity/dashboard/widget-styles';\n  border-top: 1px solid var(--hairline-color);\n"], ["\n  composes: footer from 'part:@sanity/dashboard/widget-styles';\n  border-top: 1px solid var(--hairline-color);\n"])));
var SnipcartOrders = function (_a) {
    // const {secrets} = useSecrets(namespace)
    // const [showSettings, setShowSettings] = useState(false)
    var apiKey = _a.apiKey, limit = _a.limit;
    var _b = react_1.useState(null), ordersState = _b[0], setOrdersState = _b[1];
    var handleGetOrders = function () { return __awaiter(void 0, void 0, void 0, function () {
        var request, orders;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://app.snipcart.com/api/orders?limit=" + limit, {
                        headers: {
                            'Authorization': "Basic " + btoa(apiKey),
                            'Accept': 'application/json',
                        }
                    })];
                case 1:
                    request = _a.sent();
                    return [4 /*yield*/, request.json()];
                case 2:
                    orders = _a.sent();
                    return [2 /*return*/, setOrdersState(orders)];
            }
        });
    }); };
    react_1.useEffect(function () {
        handleGetOrders();
    });
    // useEffect(() => {
    //   if (!secrets) { setShowSettings(true)}
    // }, [secrets])
    if (ordersState === null || ordersState == undefined) {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(GlobalStyle, null),
            react_1.default.createElement(ui_1.Container, null,
                react_1.default.createElement(Header, null,
                    react_1.default.createElement(Title, null, "Orders")),
                react_1.default.createElement(Content, null,
                    react_1.default.createElement("h2", null, "Loading...")))));
        // eslint-disable-next-line no-else-return
    }
    else {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(GlobalStyle, null),
            react_1.default.createElement(ui_1.Container, null,
                react_1.default.createElement(Header, null,
                    react_1.default.createElement(Title, null, "Orders")),
                react_1.default.createElement(Content, null, ordersState.items && ordersState.items.map(function (order) {
                    return react_1.default.createElement(Order, { key: order.invoiceNumber },
                        react_1.default.createElement(Link, { title: "view invoice", href: "https://app.snipcart.com/dashboard/orders/" + order.token },
                            react_1.default.createElement(Name, null,
                                order.user.billingAddress.fullName,
                                " spent $",
                                order.finalGrandTotal,
                                " at ",
                                new Date(order.completionDate).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }))),
                        react_1.default.createElement(Status, null,
                            react_1.default.createElement("p", null, "status"),
                            react_1.default.createElement("p", null, order.status == "Processed" ? "✅" : "❌")));
                })),
                react_1.default.createElement(Footer, null,
                    react_1.default.createElement(Button, { onClick: function () { return handleGetOrders(); } }, " Refresh ")))));
    }
};
// }
exports.default = {
    name: 'snipcart-orders',
    component: SnipcartOrders
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
