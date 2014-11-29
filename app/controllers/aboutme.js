(function () {
    'use strict';
    var controllerId = 'aboutme';
    angular.module('myApp').controller(controllerId, ['$scope', 'navigationservice', aboutme]);

    function aboutme($scope, navigationservice) {

        var vm = this;
        navigationservice.newPage();
    }

})();