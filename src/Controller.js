/**
 * Created by gilles on 09/10/15.
 */
var Contact = Contact || {};

Contact = ( function (self) {
    "use strict";

    self.Controller = function (_model, _view) {

        var model, view;

        this.deleteContact = function(id){
            model.deleteContact(id);
            view.deleteContact(id);
        };

        var init = function(_model,_view){
            model = _model;
            view = _view;
        };

        init(_model,_view);
    };

    return self;

}(Contact || {}) );