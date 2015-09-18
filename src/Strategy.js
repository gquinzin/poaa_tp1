/**
 * Created by gilles on 17/09/15.
 */
var Contact = Contact || {};

Contact = ( function (self) {
    "use strict";

    self.FromNameSearchStrategy = function (_firstName, _lastName) {
        var firstName, lastName;

        this.search = function (_list) {
            var contacts = [];

            for (var c in _list) {
                var contact = _list[c];

                if (contact.firstName() === firstName && contact.lastName() === lastName) {
                    contacts.push(contact);
                }
            }

            if (contacts.length === 0) {
                return null;
            } else if (contacts.length === 1) {
                return contacts[0];
            } else {
                return contacts;
            }
        };

        var init = function (_firstName, _lastName) {
            firstName = _firstName;
            lastName = _lastName;
        };

        init(_firstName, _lastName);
    };

    self.FromMailSearchStrategy = function (_mail) {
        var mail;

        this.search = function (_list) {
            var contacts = [];

            for (var c in _list) {
                var contact = _list[c];
                var mails = contact.mails();
                for (var i = 0; i < mails.length; i++) {
                    if (mails[i].address() === mail) {
                        contacts.push(contact);
                    }
                }
            }

            if (contacts.length === 0) {
                return null;
            } else if (contacts.length === 1) {
                return contacts[0];
            } else {
                return contacts;
            }
        };

        var init = function (_mail) {
            mail = _mail;
        };

        init(_mail);
    };

    self.FromPhoneSearchStrategy = function (_phone) {
        var phone;

        this.search = function (_list) {
            var contacts = [];

            for (var c in _list) {
                var contact = _list[c];
                var phones = contact.phones();
                for (var i = 0; i < phones.length; i++) {
                    if (phones[i].number() === phone) {
                        contacts.push(contact);
                    }
                }
            }

            if (contacts.length === 0) {
                return null;
            } else if (contacts.length === 1) {
                return contacts[0];
            } else {
                return contacts;
            }
        };

        var init = function (_phone) {
            phone = _phone;
        };

        init(_phone);
    };

    self.ChangePhoneStrategy = function (_firstName, _lastName, _oldNumber, _newNumber) {
        var firstName, lastName, oldNumber, newNumber;

        this.changeNumber = function (_list) {
            for (var c in _list) {
                var contact = _list[c];

                if (contact.firstName() === firstName && contact.lastName() === lastName) {
                    contact.changePhone(oldNumber, newNumber);
                }
            }
        };

        var init = function (_firstName, _lastName, _oldNumber, _newNumber) {
            firstName = _firstName;
            lastName = _lastName;
            oldNumber = _oldNumber;
            newNumber = _newNumber;
        };

        init(_firstName, _lastName, _oldNumber, _newNumber);
    };

    return self;

}(Contact || {}) );