/**
 * Created by gilles on 15/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    "use strict";

    self.Mail = function (_address, _category) {
        var address, category;

        this.address = function () {
            return address;
        };
        this.category = function () {
            return category;
        };

        var init = function (_address, _category) {
            address = _address;
            category = _category;
        };

        init(_address, _category);

    };

    self.MailCategory = {
        PERSO: 0,
        PRO: 1
    };

    return self;

}(Contact || {}));