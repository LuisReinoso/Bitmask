"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var Bitmask = /** @class */ (function () {
    function Bitmask() {
        this._numeroMascaras = 0;
        this._mascaras = {};
        this._valores = [1, 2, 3];
        lodash_1.fill(this._valores, 'a');
        console.log(this._valores);
    }
    return Bitmask;
}());
exports.Bitmask = Bitmask;
//# sourceMappingURL=index.js.map