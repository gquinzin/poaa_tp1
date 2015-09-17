/**
 * Created by gilles on 17/09/15.
 */
var Contact = Contact || {};

Contact = ( function (self) {
    "use strict";

    self.FromNameSearchStrategy = function (_firstName, _lastName) {
        var firstName, lastName;
        this.search = function () {
            var contacts = [];

            for (var c in Contact.Contacts.list) {
                var contact = Contact.Contacts.list[c];

                if (contact.firstName() === firstName && contact.lastName() === lastName) {
                    contacts.push(contact);
                }
            }

            if (contacts.length === 0) {
                return null;
            } else if (contacts.length === 1) {
                return contacts[0];
            }
            return contacts;
        };
        var init = function (_firstName, _lastName) {
            firstName = _firstName;
            lastName = _lastName;
        };

        init(_firstName, _lastName);
    };

    self.FromMailSearchStrategy = function (_mail) {
        var mail;
        this.search = function () {
            var contacts = [];
            for (var c in Contact.Contacts.list) {
                var contact = Contact.Contacts.list[c];
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
            }
            return contacts;
        };
        var init = function (_email) {
            mail = _email;
        };

        init(_mail);
    };

    self.FromPhoneSearchStrategy = function (_phone) {
        var phone;
        this.search = function () {
            var contacts = [];
            for (var c in Contact.Contacts.list) {
                var contact = Contact.Contacts.list[c];
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
            }
            return contacts;
        };
        var init = function (_phone) {
            phone = _phone;
        };

        init(_phone);
    };

    return self;

}(Contact || {}) );