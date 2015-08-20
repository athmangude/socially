if (Meteor.isClient) {
    angular.module('socially', ['angular-meteor']);

    angular.module('socially').controller('PartiesListController', function($scope){
        $scope.parties = [
            {
                name: "Dubstep-Free zone",
                description: "We no do Dubstep"
            },
            {
                name: "Trance till Dawn",
                description: "Turn down for what"
            },
            {
                name: "Trance Classics",
                description: "Classical Trance all night"
            }
        ]
    });
}
