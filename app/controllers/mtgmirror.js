(function () {
    'use strict';
    var controllerId = 'mtgmirror';
    angular.module('myApp').controller(controllerId, ['$scope', 'navigationservice', mtgmirror]);

    function mtgmirror($scope, navigationservice) {

        var vm = this;
        navigationservice.newPage();

        var picturesLocation = "app/img/MTGMirror/";
        vm.pcPictures = [
            { src: picturesLocation + "draftsimulator.png", alt: "Draft Simulator Screenshot" },
            { src: picturesLocation + "sealedsimulator.png", alt: "Sealed Simualtor Screenshot" },
            { src: picturesLocation + "charts.png", alt: "Screenshot of analysis charts" }
        ];

        vm.phonePictures = [
            { src: picturesLocation + "phonedraftsimulator.png", alt: "Draft Simulator Screenshot - Phone" },
            { src: picturesLocation + "phonesealedsimulator.png", alt: "Sealed Simulator Screenshot - Phone" },
            { src: picturesLocation + "phonesealedsimulator2.png", alt: "Sealed Simulator Screenshot 2 - Phone" }
        ];

        vm.picturesSets = [
            { title: 'PC Pictures', pictures: vm.pcPictures },
            { title: 'Phone Pictures', pictures: vm.phonePictures }
        ];
    }

})();