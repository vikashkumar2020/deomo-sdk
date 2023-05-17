"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var posts_1 = require("./resources/posts");
var Library = /** @class */ (function () {
    function Library(config) {
        this.posts = new posts_1.Posts(config);
    }
    return Library;
}());
exports.Library = Library;
