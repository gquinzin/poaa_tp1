/**
 * Created by gilles on 06/10/15.
 */
var Contact = Contact || {};

Contact = ( function (self) {
    "use strict";

    self.Chain = function (_handler) {
        var handler;

        this.processRequest = function (_request) {
            handler.processRequest(_request);
        };
        
        var init = function (_handler) {
            handler = _handler;
        };
        

        init(_handler);
    };

    return self;

}(Contact || {}) );
