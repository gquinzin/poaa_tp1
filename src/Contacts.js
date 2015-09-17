/**
 * Created by gilles on 15/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    "use strict";

    self.Contacts = {
        listSize: 0,
        list: {},
        instance: function () {
            return Contact.Contacts;
        },
        clear: function () {
            Contact.Contacts.lenght = 0;
            Contact.Contacts.list = {};
        },
        size: function () {
            return Contact.Contacts.listSize;
        },
        add: function (contact) {
            Contact.Contacts.list[contact.id()] = contact;
            Contact.Contacts.listSize++;
        },
        get: function(contactId) {
            return Contact.Contacts.list[contactId];
        },
        getFromName: function(firstName, lastName) {
            var contacts = [];

            for (var c in Contact.Contacts.list) {
                if (c.firstName === firstName && c.lastName === lastName) {
                    contacts.push(c);
                }
            }

            return contacts;
        },
        remove: function(contactId) {
            delete Contact.Contacts.list[contactId];
            Contact.Contacts.listSize--;
        }
    };
    return self;

}(Contact || {}));