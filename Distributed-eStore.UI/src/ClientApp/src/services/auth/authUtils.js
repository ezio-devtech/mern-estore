"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = exports.register = void 0;
var axios_1 = require("axios");
var constants_1 = require("../../constants");
var register = function (firstName, lastName, email, password) {
    return axios_1.default.post(constants_1.registerUrl, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    });
};
exports.register = register;
var login = function (email, password) {
    return axios_1.default.post(constants_1.loginUrl, { email: email, password: password });
};
exports.login = login;
var logout = function () {
    localStorage.removeItem("user");
};
exports.logout = logout;
//# sourceMappingURL=authUtils.js.map