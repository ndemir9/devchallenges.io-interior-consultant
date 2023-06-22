(function () {

    const loaderContainer = document.querySelector('.loading');
    window.addEventListener('load', () => {
        loaderContainer.style.display = 'none';
    });



    let navMenuDOM = document.querySelector("header nav")
    let openMenuDOM = document.querySelector(".open-menu")
    let closeMenuDOM = document.querySelector(".close-menu")

    openMenuDOM.addEventListener("click", openMenu)
    closeMenuDOM.addEventListener("click", closeMenu)

    function openMenu() {
        navMenuDOM.style.left = '0%';
    }
    function closeMenu() {
        navMenuDOM.style.left = '120%';
        navMenuDOM.style.transition = '.5s';
    }

})();