/**
 * Created by gilles on 06/10/15.
 */
var Contact = Contact || {};

Contact = ( function (self) {
    "use strict";

    self.Iterator = function (_contacts) {
        var index = 0;

        this.hasNext = function() {
            return index < _contacts.listSize;
        };

        this.next = function() {
            var contact;
            if(!this.hasNext()){
                contact = null;
            } else {
                contact = _contacts[index];
                index++;
            }
            return  contact;
        };

        this.currentContact = function () {
            return _contacts[index];
        };
    };

    return self;

}(Contact || {}) );