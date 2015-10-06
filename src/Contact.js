/**
 * Created by gilles on 15/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    "use strict";

    self.Contact = function (_gender, _firstName, _lastName) {

        var gender, firstName, lastName, id = "", tag = "";
        var mails = [], phones = [], observer = null;

        this.lastName = function () {
            return lastName;
        };
        this.firstName = function () {
            return firstName;
        };
        this.gender = function () {
            return gender;
        };
        this.mails = function () {
            return mails;
        };
        this.phones = function () {
            return phones;
        };
        this.addMail = function (mail) {
            mails.push(mail);
        };
        this.addPhone = function (phone) {
            phones.push(phone);
        };
        this.changePhone = function (_oldPhone, _newPhone){
            var phones = this.phones();
            for (var i = 0; i < phones.length; i++) {
                if (phones[i].number() === _oldPhone) {
                    phones[i].setNumber(_newPhone);
                    observer.notify(id);
                    observer = null;
                }
            }
        };
        this.register = function (_observer) {
            observer = _observer;
        };
        this.id = function () {
            return id;
        };
        this.setTag = function (_tag) {
            tag = _tag;
        };
        this.tag = function () {
            return tag;
        };

        var init = function (_gender, _firstName, _lastName) {
            gender = _gender;
            firstName = _firstName;
            lastName = _lastName;
            id = "xxxx-xxxx-xxxx-xxxx-xxxx".replace(/x/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        };

        init(_gender, _firstName, _lastName);
    };

    self.Gender = {
        MR: 0,
        MRS: 1
    };

    return self;

}(Contact || {}));