var countSurvival = function(input) {
    var count = {'Survived': 0,
                 'Dead': 0};
    for (var i = 0; i < input.length; i++) {
        if (input[i] == '0') {
            count['Dead'] += 1;
        } else {
            count['Survived'] += 1;
        }
    }

    return count;
}