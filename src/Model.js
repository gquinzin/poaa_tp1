/**
 * Created by gilles on 09/10/15.
 */
var Contact = Contact || {};

Contact = ( function (self) {
    "use strict";

    self.Model = function () {

        this.getContacts = function () {
            var contacts = [];
            for (var c in Contact.Contacts.list) {
                var contact = Contact.Contacts.list[c];
                contacts.push(contact);
            }
            return contacts;
        };

        this.deleteContact = function (contactId) {
            Contact.Contacts.instance().remove(contactId);
            localStorage.removeItem('contacts/' + contactId);
        };

        var init = function () {
        };

        init();
    };

    return self;

}(Contact || {}) );