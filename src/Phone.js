/**
 * Created by gilles on 15/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    "use strict";

    self.Phone = function (_number, _category, _type) {
        var number, category, type;

        this.number = function () {
            return number;
        };
        this.category = function () {
            return category;
        };
        this.type = function () {
            return type;
        };

        this.setNumber = function (_newNum){
            number = _newNum;
        };

        var init = function (_number, _category, _type) {
            number = _number;
            category = _category;
            type = _type;
        };

        init(_number, _category, _type);

    };

    self.PhoneCategory = {
        PERSO: 0,
        PRO: 1
    };

    self.PhoneType = {
        FIXE: 0,
        MOBILE: 1
    };

    return self;

}(Contact || {}));