/**
 * Created by gilles on 06/10/15.
 */
var Contact = Contact || {};

Contact = ( function (self) {
    "use strict";

    self.Request = function (_contact) {
        var contact = _contact;

        this.getContact = function () {
            return contact;
        };
    };


    return self;

}(Contact || {}) );