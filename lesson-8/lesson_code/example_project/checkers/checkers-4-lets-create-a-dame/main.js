document.addEventListener('DOMContentLoaded', function() {
    // Null is a special value in JavaScript that means "nothing".
    var pieceThatIsBeingDragged = null;

    document.addEventListener('click', function(event) {
        if (pieceThatIsBeingDragged) {

            // We check the row the piece is being dropped on. If it's the last row, we make it a dame.
            var row = event.target.parentNode;
            if (row.classList.contains('last-row')) {
                pieceThatIsBeingDragged.classList.add('dame');
            }

            // Reset the piece's pointer events so that it can be clicked again. See below where we disable this.
            pieceThatIsBeingDragged.style.pointerEvents = 'auto';
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

        // Disable pointer events on the piece so that we can click on the board, otherwise the piece would block the click.
        pieceThatIsBeingDragged.style.pointerEvents = 'none';
        pieceThatIsBeingDragged.style.width = '60px';
        pieceThatIsBeingDragged.style.height = '60px';
        pieceThatIsBeingDragged.style.position = 'fixed';
        pieceThatIsBeingDragged.style.left = event.pageX - 30 + 'px';
        pieceThatIsBeingDragged.style.top = event.pageY - 30 + 'px';
    }); 
});