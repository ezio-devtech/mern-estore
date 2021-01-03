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
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
var productsTypes_1 = require("./productsTypes");
var initialState = {
    productIDsToProductsMap: {}
};
var reducer = function (state, incomingAction) {
    var _a;
    if (state === void 0) { state = initialState; }
    var action = incomingAction;
    switch (action.type) {
        case productsTypes_1.ProductsActionTypes.REQUEST_ALL_ARRIVAL:
            var products = action.products;
            return {
                productIDsToProductsMap: products.reduce(function (acc, product) {
                    acc[product.id] = product;
                    return acc;
                }, {})
            };
        case productsTypes_1.ProductsActionTypes.SELECT_PRODUCT_COLOR:
            var productId = action.productId, colorIndex = action.colorIndex;
            var product = state.productIDsToProductsMap[productId];
            if (product && product.selectedColorIndex !== colorIndex && typeof product.colors[colorIndex] !== "undefined") {
                return __assign(__assign({}, state), { productIDsToProductsMap: __assign(__assign({}, state.productIDsToProductsMap), (_a = {}, _a[productId] = __assign(__assign({}, state.productIDsToProductsMap[productId]), { selectedColorIndex: colorIndex }), _a)) });
            }
        default:
            return state;
    }
};
exports.reducer = reducer;
//# sourceMappingURL=productsReducers.js.map