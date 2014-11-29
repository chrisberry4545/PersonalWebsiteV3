(function () {
    'use strict';

    var serviceId = 'navigationservice';
    angular.module('myApp').factory(serviceId,
        [navigationservice]);
    
    function navigationservice() {

        var navigationValues = [
            { name: "Animal Adjectives", href: "#/animaladjectives", selected: false },
            { name: "MTGMirror.com", href: "#/mtgmirror", selected: false },
            { name: "The Librarians App", href: "#/librarians", selected: false },
            { name: "Dissertation", href: "#/dissertation", selected: false },
            { name: "About the Site", href: "#/aboutsite", selected: false },
            { name: "About Me", href: "#/aboutme", selected: false },
        ];

        function newPage() {
            clearSelection();
            findCurrentNavigation();
        }

        function navClicked (href) {
            clearSelection();
            window.location.href = href;
            setSelected(href);
        }


        function findCurrentNavigation() {
            var locationArray = window.location.href.split('#');
            var lastPart = locationArray[locationArray.length - 1];
            var lastPartHref = "#" + lastPart;
            for (var i = 0; i < navigationValues.length; i++) {
                if (navigationValues[i].href == lastPartHref) {
                    navigationValues[i].selected = true;
                }
            }
        }
        function clearSelection() {
            for (var i = 0; i < navigationValues.length; i++) {
                navigationValues[i].selected = false;
            }
        }

        function setSelected(href) {
            for (var i = 0; i < navigationValues.length; i++) {
                if (navigationValues[i].href == href) {
                    navigationValues[i].selected = true;
                }
            }
        }
        var service = {
            navigationValues: navigationValues,
            navClicked: navClicked,
            findCurrentNavigation: findCurrentNavigation,
            clearSelection: clearSelection,
            setSelected: setSelected,
            newPage: newPage
        };
        return service;
    }
})();