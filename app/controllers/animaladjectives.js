(function () {
    'use strict';
    var controllerId = 'animaladjectives';
    angular.module('myApp').controller(controllerId, ['$scope', 'navigationservice', animaladjectives]);

    function animaladjectives($scope, navigationservice) {

        var vm = this;
        navigationservice.newPage();

        var picturesLocation = "app/img/AnimalAdjectives/";

        vm.phonePictures = [
            { src: picturesLocation + "screenshot1.png", alt: "Screenshot 1" },
            { src: picturesLocation + "screenshot2.png", alt: "Screenshot 2" },
            { src: picturesLocation + "screenshot3.png", alt: "Screenshot 3" },
            { src: picturesLocation + "screenshot5.png", alt: "Screenshot 4" }
        ];

        vm.tabletPictures = [
            { src: picturesLocation + "tabletlandscape.png", alt: "Tablet Landscape" },
            { src: picturesLocation + "tabletportrait.png", alt: "Tablet Portrait" }
        ];

        vm.facebookPictures = [
            { src: picturesLocation + "fbshare.png", alt: "Facebook Share Example" }
        ];

        vm.picturesSets = [
            { title: 'Phone Pictures', pictures: vm.phonePictures },
            { title: 'Tablet Pictures', pictures: vm.tabletPictures },
            { title: 'Facebook Share Pictures', pictures: vm.facebookPictures }
        ];
    }

})();