/**
 * Created by gilles on 15/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    "use strict";

    self.Contact = function (_gender, _firstName, _lastName) {

        var gender, firstName, lastName, contactId = "";

        this.lastName = function () {
            return lastName;
        };
        this.firstName = function () {
            return firstName;
        };
        this.gender = function () {
            return gender;
        };

        var process = function () {
        };

        function generateId() {
            "xxxx-xxxx-xxxx-xxxx-xxxx".replace(/x/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == "x" ? r : (r&0x3 | 0x8);
                return v.toString(16);
            });
        }

        var init = function (_gender, _firstName, _lastName) {
            gender = _gender;
            firstName = _firstName;
            lastName = _lastName;
            contactId = new generateId();

        };

        init(_gender, _firstName, _lastName, contactId);
    };

    self.Gender = {
        MR: 0,
        MRS: 1
    };

    return self;

}(Contact || {}));