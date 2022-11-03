document.addEventListener('DOMContentLoaded', function() {
    var pieceThatIsBeingDragged = null;

    document.addEventListener('click', function(event) {
        if (pieceThatIsBeingDragged) {
            pieceThatIsBeingDragged = null;
            return;
        }

        if (!event.target.classList.contains('piece')) {
            return;
        }

        pieceThatIsBeingDragged = event.target;
    });


    document.addEventListener('mousemove', function(event) {
        if (!pieceThatIsBeingDragged) {
            return;
        }

        pieceThatIsBeingDragged.style.width = '60px';
        pieceThatIsBeingDragged.style.height = '60px';
        pieceThatIsBeingDragged.style.position = 'fixed';
        pieceThatIsBeingDragged.style.left = event.pageX - 30 + 'px';
        pieceThatIsBeingDragged.style.top = event.pageY - 30 + 'px';
    }); 
});