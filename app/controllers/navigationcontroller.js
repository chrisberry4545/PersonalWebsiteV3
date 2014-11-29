(function () {
    'use strict';
    var controllerId = 'navigationcontroller';
    angular.module('myApp').controller(controllerId, ['$scope', 'navigationservice', navigationcontroller]);

    function navigationcontroller($scope, navigationservice) {
        var vm = this;

        vm.navigation = navigationservice.navigationValues;
    }

})();
