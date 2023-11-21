"use strict";
"use client";
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
Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = require("./tools");
var React = require("react");
function SuperJSONComponent(_a) {
    var component = _a.component, props = _a.props, children = _a.children;
    var WithSuperJSON = (0, tools_1.withSuperJSONPage)(component);
    return React.createElement(WithSuperJSON, __assign({}, props), children);
}
exports.default = SuperJSONComponent;
//# sourceMappingURL=client.js.map