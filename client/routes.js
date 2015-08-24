angular.module('socially').config(function($urlRouterProvider, $stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);

    $stateProvider.state('parties', {
        url: '/parties',
        templateUrl: 'client/parties/views/parties_list.ng.html',
        controller: 'PartiesListController'
    }).state('partyDetails', {
        url: '/parties/:partyId',
        templateUrl: 'client/parties/views/party_details.ng.html',
        controller: 'PartyDetailsController'
    });

    $urlRouterProvider.otherwise("/parties");

});
