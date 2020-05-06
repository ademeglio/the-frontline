function showNav() {
    document.getElementById("myNav").classList.toggle("show")
    ;
}

//Close the dropdown menu if the user clicks outside of it//
window.onclick = function(event) {
    if (!event.target.matches('.navBtn')) {
        var dropDown = document.getElementsByClassName("nav");
        var i;
        for (i=0; i < myNav.length; i++) {
            var openDropNav = dropDown[i];
            if (openDropNav.classList.contains('show')) {
                openDropNav.classList.remove('show');
            }
        }
    }
}