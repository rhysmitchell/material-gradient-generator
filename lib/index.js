"use strict";
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
exports.materialGradientGenerator = void 0;
var materialColours = __importStar(require("material-ui-colors"));
;
var MaterialGradientGenerator = /** @class */ (function () {
    /**
     * Sets 'exclude red', 'skip'.
     * Returns gradient collection as GENERATOR.
     **/
    function MaterialGradientGenerator(excludeRed, darkShade, lightShade, _step) {
        this._excludeRed = excludeRed;
        this._step = _step;
        this._darkShade = darkShade || 400;
        this._lightShade = lightShade || 200;
        this._colours = this._initializeColours();
        this._gradientGenerator = this._initializeGradientGenerator();
    }
    MaterialGradientGenerator.prototype._initializeColours = function () {
        /** Colours [levels 400/200 Material Design]
    
    * These colours are class level properties in the
    * scenario where you want to access specific colours
    * directly from the frontend. **/
        var colours = {
            Red: "linear-gradient(to bottom right,  " + materialColours.red[this._darkShade] + ", " + materialColours.red[this._lightShade] + ")",
            Pink: "linear-gradient(to bottom right, " + materialColours.pink[this._darkShade] + ", " + materialColours.pink[this._lightShade] + ")",
            Purple: "linear-gradient(to bottom right, " + materialColours.purple[this._darkShade] + ", " + materialColours.purple[this._lightShade] + ")",
            DeepPurple: "linear-gradient(to bottom right, " + materialColours.deepPurple[this._darkShade] + ", " + materialColours.deepPurple[this._lightShade] + ")",
            Indigo: "linear-gradient(to bottom right, " + materialColours.indigo[this._darkShade] + ", " + materialColours.indigo[this._lightShade] + ")",
            Blue: "linear-gradient(to bottom right, " + materialColours.blue[this._darkShade] + ", " + materialColours.blue[this._lightShade] + ")",
            LightBlue: "linear-gradient(to bottom right, " + materialColours.lightBlue[this._darkShade] + ", " + materialColours.lightBlue[this._lightShade] + ")",
            Cyan: "linear-gradient(to bottom right, " + materialColours.cyan[this._darkShade] + ", " + materialColours.cyan[this._lightShade] + ")",
            Teal: "linear-gradient(to bottom right, " + materialColours.teal[this._darkShade] + ", " + materialColours.teal[this._lightShade] + ")",
            Green: "linear-gradient(to bottom right, " + materialColours.green[this._darkShade] + ", " + materialColours.green[this._lightShade] + ")",
            LightGreen: "linear-gradient(to bottom right, " + materialColours.lightGreen[this._darkShade] + ", " + materialColours.lightGreen[this._lightShade] + ")",
            Lime: "linear-gradient(to bottom right, " + materialColours.lime[this._darkShade] + ", " + materialColours.lime[this._lightShade] + ")",
            Yellow: "linear-gradient(to bottom right, " + materialColours.yellow[this._darkShade] + ", " + materialColours.yellow[this._lightShade] + ")",
            Amber: "linear-gradient(to bottom right, " + materialColours.amber[this._darkShade] + ", " + materialColours.amber[this._lightShade] + ")",
            Orange: "linear-gradient(to bottom right, " + materialColours.orange[this._darkShade] + ", " + materialColours.orange[this._lightShade] + ")",
            DeepOrange: "linear-gradient(to bottom right, " + materialColours.deepOrange[this._darkShade] + ", " + materialColours.deepOrange[this._lightShade] + ")",
            Brown: "linear-gradient(to bottom right, " + materialColours.brown[this._darkShade] + ", " + materialColours.brown[this._lightShade] + ")",
            Grey: "linear-gradient(to bottom right, " + materialColours.grey[this._darkShade] + ", " + materialColours.grey[this._lightShade] + ")",
            BlueGrey: "linear-gradient(to bottom right, " + materialColours.blueGrey[this._darkShade] + ", " + materialColours.blueGrey[this._lightShade] + ")"
        };
        return colours;
    };
    /**
     * Returns iterable generator of material gradent css properties.
     **/
    MaterialGradientGenerator.prototype._initializeGradientGenerator = function () {
        var gradients, i;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    gradients = [
                        this._colours.Red,
                        this._colours.Pink,
                        this._colours.Purple,
                        this._colours.DeepPurple,
                        this._colours.Indigo,
                        this._colours.Blue,
                        this._colours.LightBlue,
                        this._colours.Cyan,
                        this._colours.Teal,
                        this._colours.Green,
                        this._colours.LightGreen,
                        this._colours.Lime,
                        this._colours.Yellow,
                        this._colours.Amber,
                        this._colours.Orange,
                        this._colours.DeepOrange,
                        this._colours.Brown,
                        this._colours.Grey,
                        this._colours.BlueGrey
                    ];
                    if (this._excludeRed || this._excludeRed === undefined) {
                        gradients = gradients.filter(function (colour) { return colour !== _this._colours.Red && colour !== _this._colours.Pink; });
                    }
                    if (this._step === undefined || this._step === 0) {
                        this._step = 1;
                    }
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i <= gradients.length)) return [3 /*break*/, 4];
                    return [4 /*yield*/, gradients[i]];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i += this._step;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    };
    /**
     * Interfaces with iterable generator to get the 'next' colour in the generator.
     * The gradient generator will re-instantiate if 'done'.
     **/
    MaterialGradientGenerator.prototype.NextColour = function () {
        // Get next colour object
        var nextColour = this._gradientGenerator.next();
        if (nextColour.done) {
            // Re-instantiate gradient generator & set 'next' colour
            this._gradientGenerator = this._initializeGradientGenerator();
            nextColour = this._gradientGenerator.next();
        }
        return nextColour.value;
    };
    return MaterialGradientGenerator;
}());
exports.materialGradientGenerator = MaterialGradientGenerator;
;
//# sourceMappingURL=index.js.map