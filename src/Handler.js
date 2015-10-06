/**
 * Created by gilles on 06/10/15.
 */
var Contact = Contact || {};

Contact = ( function (self) {
    "use strict";

    self.Handler = function (_contacts, _nextHandler) {
        var contacts = [];
        var nextHandler;

        this.processRequest = function (_request) {
            var contact = _request.getContact();

            if(contacts.size() === 0){
                contacts.add(contact);
            } else {
                if( contacts.findContactByTag(contact.tag()) === true){
                    contacts.add(contact);
                }else {
                    if(nextHandler !== null) {
                        nextHandler.processRequest(_request);
                    }
                }
            }
        };

        var init = function (_contacts, _nextHandler) {
            contacts = _contacts;
            nextHandler = _nextHandler;
        };

        init(_contacts, _nextHandler);
    };

    return self;

}(Contact || {}) );
