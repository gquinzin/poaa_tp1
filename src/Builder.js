/**
 * Created by gilles on 15/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    "use strict";

    self.Builder = function () {

        this.createMinimalContact = function (gender, firstName, lastName){
            return new Contact.Contact(gender, firstName, lastName);
        };

        this.createContactWithProfessionalMail = function (gender, firstName, lastName, mailAddress){
            var contact =  new Contact.Contact(gender, firstName, lastName);
            contact.setMail(mailAddress, Contact.MailCategory.PRO);
            return contact;
        };

        this.createContactWithProfessionalMobile = function(gender, firstName, lastName, phoneNumber){
            var contact =  new Contact.Contact(gender, firstName, lastName);
            contact.setPhone(phoneNumber, Contact.PhoneCategory.PRO, Contact.PhoneType.MOBILE);
            return contact;
        };

    };

    return self;

}(Contact || {}));