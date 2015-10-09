/**
 * Created by gilles on 06/10/15.
 */
var Contact = Contact || {};

Contact = function (self) {
    "use strict";

    self.Storage = {
        instance: function () {
            return Contact.Storage;
        },
        save: function (_contacts) {
            var iterator = new Contact.Iterator(_contacts.list);
            while (iterator.hasNext()) {
                var contact = iterator.currentContact();
                localStorage.setItem("contacts/" + contact.id, JSON.stringify(contact.toObject()));
                iterator.next();
            }
        }
    };

    return self;

}(Contact || {});