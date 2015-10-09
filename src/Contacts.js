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
            Contact.Contacts.listSize = 0;
            Contact.Contacts.list = {};
        },
        size: function () {
            return Contact.Contacts.listSize;
        },
        add: function (contact) {
            Contact.Contacts.list[contact.id()] = contact;
            Contact.Contacts.listSize++;
        },
        get: function (contactId) {
            return Contact.Contacts.list[contactId];
        },
        getFromName: function (firstName, lastName) {
            var contacts = [];

            for (var c in Contact.Contacts.list) {
                var contact = Contact.Contacts.list[c];

                if (contact.firstName() === firstName && contact.lastName() === lastName) {
                    contacts.push(contact);
                }
            }

            if (contacts.length === 0) {
                return null;
            } else {
                return contacts;
            }
        },
        remove: function (contactId) {
            delete Contact.Contacts.list[contactId];
            Contact.Contacts.listSize--;
        },
        search: function (strategy) {
            return strategy.search(this.list);
        },
        iterator: function(){
            return new Contact.Iterator(this);
        }
    };

    self.Contacts2 = function () {
        var listSize = 0;
        var list = {};

        this.size = function () {
            return listSize;
        };
        this.add = function(contact){
            list[contact.id()] = contact;
            listSize++;
        };
        this.search = function (strategy) {
            return strategy.search(list);
        };
        this.change = function (strategy) {
            return strategy.changeNumber(list);
        };
        this.findContactByTag = function (tag) {
            for (var c in list) {
                var contact = list[c];

                if (contact.tag() === tag) {
                    return true;
                } else {
                    return false;
                }
            }
        };

    };

    return self;

}(Contact || {}));