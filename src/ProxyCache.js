/**
 * Created by gilles on 18/09/15.
 */
var Contact = Contact || {};

Contact = ( function (self) {
    "use strict";

    self.ProxyCache = function (_contactsList) {
        var contactsList = [];
        var cacheList = {};

        this.search = function (strategy) {
            if(cacheList[strategy]){
                return cacheList[strategy];
            }

            for (var i=0; i < contactsList.length; i++) {
                var result = contactsList[i].search(strategy);
                if(result !== null){
                    cacheList[strategy] = result;
                    return result;
                }
            }
        };

        this.inCache = function (strategy) {
            return cacheList.hasOwnProperty(strategy);
        };

        var init = function (_contactsList) {
            contactsList = _contactsList;
        };

        init(_contactsList);
    };


    return self;
}(Contact || {}) );
