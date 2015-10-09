/**
 * Created by gilles on 09/10/15.
 */
var Contact = Contact || {};

Contact = ( function (self) {
    "use strict";

    self.View = function (_model) {
        var model;

        var initHTMLTable = function(){
            var contacts = model.getContacts();

            var html = "<table>" +
                            "<tr>" +
                                "<th id=\"cellFirstName\">First name</th>" +
                                "<th id=\"cellLastName\">Last name</th>" +
                                "<th id=\"cellPhones\">Phones</th>" +
                                "<th id=\"cellMails\">Mails</th>" +
                                "<th id=\"cellTags\">Tags</th>" +
                                "<th id=\"cellActions\">Actions</th>" +
                            "</tr>";

            for (var i = 0; i < contacts.length; i++) {
                var contact = contacts[i];
                html += "<tr id='x" + contact.id + "'>" +
                            "<td>" + contact.firstName() + "</td>" +
                            "<td>" + contact.lastName() + "</td>" +
                            "<td>";
                for(var j= 0; j < contact.phones().length; j++){
                    var phone = contact.phones()[j];
                    html += "" + phone.number() + "[" + phone.type() + "][" + phone.category() + "]";
                }
                            html +="</td>" +
                            "<td>";
                for(var k= 0; k < + contact.mails().length; k++){
                    var mail = contact.mails()[k];
                    html += "" + mail.address() + "[" + mail.category() + "]";
                }
                            html+="</td>" +
                            "<td>" + contact.tag() + "</td>" +
                            "<td><button id='button_" + contact.id() + "'>Remove</button></td>" +
                        "</tr>";
            }

            html += "</table>";

            $("#contacts").append(html);

        };

        this.deleteContact = function (contactId) {
            $('tr#x' + contactId).remove();
        };

        var init = function(_model){
            model = _model;
        };

        init(_model);
        initHTMLTable();
    };

    return self;

}(Contact || {}) );