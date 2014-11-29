(function () {
    'use strict';
    var controllerId = 'librarians';
    angular.module('myApp').controller(controllerId, ['$scope','navigationservice', librarians]);

    function librarians($scope, navigationservice) {

        var vm = this;
        navigationservice.newPage();

        var picturesLocation = "app/img/Librarians/";
        
        vm.phonePictures = [
            { src: picturesLocation + "phoness3.png", alt: "Phone Screenshot 3 - Landscape" },
            { src: picturesLocation + "phonessbio.png", alt: "Phone Screenshot Biography - Landscape" },
            { src: picturesLocation + "phoness1.png", alt: "Phone Screenshot 1 - Portrait" },
            { src: picturesLocation + "phoness2.png", alt: "Phone Screenshot 2 - Portrait" },
            { src: picturesLocation + "phonessbio2.png", alt: "Phone Biography Screenshot - Portrait" }
        ];

        vm.tabletPictures = [
            { src: picturesLocation + "tabletportrait1.png", alt: "Tablet Screenshot 1 - Portrait" },
            { src: picturesLocation + "tabletportrait2.png", alt: "Tablet Screenshot 2 - Portrait" },
            { src: picturesLocation + "tabletlandscape.png", alt: "Tablet Screenshot 3 - Landscape" },
            { src: picturesLocation + "tabletlinksportrait.png", alt: "Tablet Links Screenshot - Portrait" },
            { src: picturesLocation + "tabletbioportrait.png", alt: "Tablet Biography Screenshot - Portrait" },
            { src: picturesLocation + "tabletbiolandscape.png", alt: "Tablet Biography Screenshot - Landscape" }
        ];

        vm.picturesSets = [
            { title: 'Phone Pictures', pictures: vm.phonePictures },
            { title: 'Tablet Pictures', pictures: vm.tabletPictures }
        ];
    }

})();