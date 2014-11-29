(function () {
    'use strict';
    var controllerId = 'aboutsite';
    angular.module('myApp').controller(controllerId, ['$scope', 'navigationservice', aboutsite]);

    function aboutsite($scope, navigationservice) {

        var vm = this;
        navigationservice.newPage();
    }

})();