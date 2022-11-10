document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('submit', function(event) {
        event.preventDefault();

        var maxValueOfQuestion = 3;
        var numberOfQuestions = 4;
        var maxScore = maxValueOfQuestion * numberOfQuestions;
        var halfScore = maxScore / 2;

        var iceCream = document.querySelector('input[name="ice-cream"]:checked').value;
        var beach = document.querySelector('input[name="beach"]:checked').value;
        var jaanipaev = document.querySelector('input[name="jaanipaev"]:checked').value;
        var sun = document.querySelector('input[name="sun"]:checked').value;

        var total = parseInt(iceCream) + parseInt(beach) + parseInt(sun) + parseInt(jaanipaev);

        if (total <= halfScore) {
            alert('You are a winter person!');
        } else {
            alert('You are a summer person!');
        }

        this.location.reload();
    });

});