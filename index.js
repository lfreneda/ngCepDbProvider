(function() {
    'use strict';
    var moduleName = 'ngCepDb';
    angular.module(moduleName, []);
    angular.module(moduleName).constant('cepDb', new CepDb());
})();
