// nav menu transition
function toggleMenu(menuContainer) {
    
    const appear = document.querySelector('#main-nav');
    const appearChild = appear.querySelector('div');
    
    if (menuContainer.classList.contains('show')) {
        appear.style.height = '0';
        menuContainer.classList.remove('show');
    }
    else {
        appear.style.height = appearChild.offsetHeight + 'px';
        menuContainer.classList.add('show');
    }
}

// Close nav menu after clicking a selection
const mainLinks = document.querySelectorAll('#main-nav a');
const menuContainer = document.getElementById('menu-bars-container');
for (let link of mainLinks) {
  link.onclick = function() {
    toggleMenu(menuContainer);
  };
} 