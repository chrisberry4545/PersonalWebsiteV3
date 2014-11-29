(function () {
    'use strict';
    var controllerId = 'dissertation';
    angular.module('myApp').controller(controllerId, ['$scope', 'navigationservice', dissertation]);

    function dissertation($scope, navigationservice) {

        var vm = this;
        navigationservice.newPage();


        var picturesLocation = "app/img/Dissertation/";

        vm.pictures = [
            { src: picturesLocation + "monopolycombined.png", alt: "Monopoly Screenshot 1" },
            { src: picturesLocation + "monopolyexample.png", alt: "Monopoly Screenshot 2" }
        ];
    }

})();