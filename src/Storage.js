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
        },
        load: function(_contacts){
            for(var i=0; i < localStorage.length; i++) {
                var obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
                var contact = new Contact.Contact(obj.gender, obj.firstName, obj.lastName);
                contact.addTag(obj.tag);

                for(var j=0; j < obj.phones.length; j++){

                }

                for(var k=0; j < obj.mails.length; k++){

                }

                _contacts.add(contact);
            }
        }
    };

    return self;

}(Contact || {});