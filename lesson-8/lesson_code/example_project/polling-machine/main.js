document.addEventListener('DOMContentLoaded', function() {

    var votes = {
        'obama': 0,
        'kanye': 0,
        'puhh': 0,
    }

    document.addEventListener('click', function(event) {
        var target = event.target;
        if (!target.classList.contains('candidate')) {
            return;
        }

        var allCandidates = document.getElementsByClassName('candidate');

        for(var i = 0; i < allCandidates.length; i++) {
            if(target === allCandidates[i]) {
                target.classList.remove('not-clicked');
                target.classList.add('clicked');
            } else {
                allCandidates[i].classList.remove('clicked');
                allCandidates[i].classList.add('not-clicked');
            }
        }

        var confirmBox = document.getElementById('confirm-box');
        confirmBox.classList.add('show');
    });

    /**
     * Confirm modal: yes or no
     */
    document.addEventListener('click', function(event) {
        var target = event.target;
        if (target.id !== 'yes' && target.id !== 'no') {
            return;
        }

        console.log('I AM HERE')
        console.log(target.id)

        if (target.id == 'no') {
            var allCandidates = document.getElementsByClassName('candidate');
            console.log(allCandidates)
            
            for(var i = 0; i < allCandidates.length; i++) {
                allCandidates[i].classList.remove('clicked');
                allCandidates[i].classList.remove('not-clicked');
                var confirmBox = document.getElementById('confirm-box');
                confirmBox.classList.remove('show');
            }
        } else {
            // TODO: Add code to handle the 'yes' case
            var candidateIVoteFor = document.getElementsByClassName('clicked')[0].getAttribute('data-candidate');
            console.log(candidateIVoteFor);

            votes[candidateIVoteFor]++;
            console.log(votes);

            var allCandidates = document.getElementsByClassName('candidate');
            console.log(allCandidates)
            
            for(var i = 0; i < allCandidates.length; i++) {
                allCandidates[i].classList.remove('clicked');
                allCandidates[i].classList.remove('not-clicked');
                var confirmBox = document.getElementById('confirm-box');
                confirmBox.classList.remove('show');
            }
        }

        var results = document.getElementsByClassName('candidate-votes');
        for(var i = 0; i < results.length; i++) {
            var candidate = results[i].getAttribute('data-candidate');
            results[i].innerHTML = votes[candidate];
        }
    });

});