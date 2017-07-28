/**
 * Created by Julius Alvarado on 7/28/2017.
 */

(function () {
    "use strict";

    var Calculator = function () {};

    Calculator.prototype.add = function (a, b) {
        return a + b;
    };

    Calculator.prototype.divide = function (a, b) {
        return a / b;
    }
}());