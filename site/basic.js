function showNav() {
    document.getElementById("myNavBox").classList.toggle("show")
    ;
}

//Close the dropdown menu if the user clicks outside of it//
window.onclick = function(event) {
    if (!event.target.matches('.navBtn')) {
        var dropNav = document.getElementsByClassName("nav");
        var i;
        for (i=0; i < dropNav.length; i++) {
            var openDropNav = dropNav[i];
            if (openDropNav.classList.contains('show')) {
                openDropNav.classList.remove('show');
            }
        }
    }
}