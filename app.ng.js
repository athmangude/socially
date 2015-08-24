Parties = new Mongo.Collection("parties");

if (Meteor.isClient) {
    angular.module('socially', ['angular-meteor', 'ui.router']);

    angular.module('socially').config(function($urlRouterProvider, $stateProvider, $locationProvider){
        $locationProvider.html5Mode(true);

        $stateProvider.state('parties', {
            url: '/parties',
            templateUrl: 'parties_list.ng.html',
            controller: 'PartiesListController'
        }).state('partyDetails', {
            url: '/parties/:partyId',
            templateUrl: 'party_details.ng.html',
            controller: 'PartyDetailsController'
        });

        $urlRouterProvider.otherwise("/parties");

    });

    angular.module('socially').controller('PartiesListController', function($scope, $meteor){
        $scope.parties = $meteor.collection(Parties);
        $scope.remove = function(party){
            $scope.parties.remove(party);
        }
        $scope.removeAll = function(){
            $scope.parties.remove();
        }
    });

    angular.module('socially').controller('PartyDetailsController', function($scope, $stateParams){
        $scope.partyId = $stateParams.partyId;
    });
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        if (Parties.find().count() === 0) {
            var parties = [
                {
                    'name': 'A State of Trance',
                    'description': '2 hours of the best and the latest in Trance every week'},
                {
                    'name': 'A State of Sundays',
                    'description': 'A selection of hot new Trance by your Favourite DJs as featured in ASOT'},
                {
                    'name': 'International Departures',
                    'description': 'Listen to new uplifting Trance Every two weeks with Myon & Shane 54'
                },
                {
                    'name': 'Who\'s Afraid of 138!',
                    'description': 'A special episode of ASOT, playing you the harder stuff, exclusively on Digitally Imported'
                }
            ];

            for (var i = 0; i < parties.length; i++) {
                Parties.insert(parties[i]);
            }
        }
    });
}
