(function () {
    'use strict';
    var controllerId = 'homepage';
    angular.module('myApp').controller(controllerId, ['$scope', 'navigationservice', homepage]);

    function homepage($scope, navigationservice) {

        var vm = this;
        navigationservice.newPage();

        var animalAdjectives = {
            title: navigationservice.navigationValues[0].name,
            description: "Throbbing Goat, Lecherous Yellow Eyed Penguin and Soggy Great White Shark. "
                + "Animal Adjectives entertains through combining random adjectives with random animals which can have hilarious outcomes.",
            image: "app/img/AnimalAdjectives/bigicon.png",
            href: '#/animaladjectives'
        };


        var mtgmirror = {
            title: navigationservice.navigationValues[1].name,
            description: "MTGMirror is a web app for fans of the popular card game Magic: the Gathering. It simulates certain aspects of the game for players to practice with.",
            image: "app/img/MTGMirror/logo.png",
            href: '#/mtgmirror'
        };

        var librariansApp = {
            title: navigationservice.navigationValues[2].name,
            description: "The Librarians wanted to release their most recent EP as a mobile app. The app lets fans play the EP and read about the band.",
            image: "app/img/Librarians/logo.png",
            href: '#/librarians'
        };

        var disseratation = {
            title: navigationservice.navigationValues[3].name,
            description: "For my MSc. Dissertation I studied the application of Reinforced Learning through self play to the game of Monopoly. This technique allowed me to produce a strong Monopoly artificial intelligence.",
            image: "app/img/Dissertation/monopolyboard.jpg",
            href: '#/dissertation'
        };

        var aboutthesite = {
            title: navigationservice.navigationValues[4].name,
            description: "I wanted to create a simple site to showcase some of the work I've done outside of work. Click below if you want any more information on the technologies used.",
            image: "app/img/ThisSite/logo.png",
            href: '#/aboutsite'
        };

        var aboutme = {
            title: navigationservice.navigationValues[5].name,
            description: "Check out other information about me.",
            image: "app/img/AboutMe/me1.jpg",
            href: "#/aboutme"
        }

        vm.projects = [
            animalAdjectives,
            mtgmirror,
            librariansApp,
            disseratation,
            aboutthesite,
            aboutme
        ];
    }

})();