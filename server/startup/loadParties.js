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
