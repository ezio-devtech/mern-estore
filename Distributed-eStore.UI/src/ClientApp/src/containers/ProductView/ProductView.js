"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var react_1 = require("react");
require("./ProductView.css");
var productsActions_1 = require("../../state/products/productsActions");
var react_router_dom_1 = require("react-router-dom");
var products_1 = require("../../components/products");
var isObjectEmpty = function (obj) { return Object.keys(obj).length === 0; };
var ProductView = function (_a) {
    var requestProductById = _a.requestProductById, selectProductColor = _a.selectProductColor, selectedProduct = _a.selectedProduct;
    var id = selectedProduct.id, imageURLs = selectedProduct.imageURLs, colors = selectedProduct.colors, description = selectedProduct.description, name = selectedProduct.name, price = selectedProduct.price, selectedColorIndex = selectedProduct.selectedColorIndex;
    var productId = react_router_dom_1.useParams().productId;
    react_1.useEffect(function () {
        requestProductById(productId);
    }, [requestProductById, productId]);
    return (isObjectEmpty(selectedProduct)
        ? React.createElement(React.Fragment, null) // open for extension - implement loading logic here
        : React.createElement("section", { className: 'product-view row' },
            React.createElement("div", { className: "product-view__image-container col-sm-6 col-lg-7" },
                React.createElement("img", { sizes: "100vw", src: imageURLs[selectedColorIndex], className: "product-view__image w-100" })),
            React.createElement("div", { className: "product-view__description product-info col-sm-6 col-lg-5" },
                React.createElement("h1", { className: "product-view__name" }, name),
                React.createElement("div", null,
                    "$",
                    price)),
            React.createElement("div", { className: "product__color-switcher" },
                React.createElement(products_1.ColorSwitcher, { colors: colors, selectedColorIndex: selectedColorIndex, productId: id }))));
};
var mapStateToProps = function (state) {
    return { selectedProduct: state.products.selectedProduct };
};
exports.default = react_redux_1.connect(mapStateToProps, productsActions_1.actionCreators)(ProductView);
//# sourceMappingURL=ProductView.js.map