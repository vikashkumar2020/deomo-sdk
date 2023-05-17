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
exports.Base = void 0;
var Base = /** @class */ (function () {
    function Base(config) {
        this.apiKey = config.apiKey;
        this.baseUrl = config.baseUrl || 'https://jsonplaceholder.typicode.com';
    }
    Base.prototype.request = function (endpoint, options) {
        var url = "".concat(this.baseUrl).concat(endpoint);
        var headers = {
            'Content-Type': 'application/json',
            'api-key': this.apiKey,
        };
        var config = __assign(__assign({}, options), { headers: headers });
        return fetch(url, config)
            .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
            .catch(function (error) {
            throw new Error(error.message);
        });
    };
    return Base;
}());
exports.Base = Base;
