(function(w,d) {
    var menu_state = 0;

    function init() {

        var responsive_menu_button = document.getElementById("tn-nav-mobile-btn"),
        col_container = document.getElementsByClassName("col-container");

        for (var i= 0,z = col_container.length; i < z; i++) {

            col_container[i].addEventListener('click', function(){
                 closeMenu();
            });

        }




        responsive_menu_button.addEventListener('click', function() {

            if (menu_state === 0) {
                openMenu();
            } else {
                closeMenu();
            }

        });

    };

    function openMenu() {
        var menu_container = document.getElementById("tn-nav-opt-container");
        menu_container.classList.add('open');
        menu_container.classList.remove('closed');

        menu_state = 1;
    };

    function closeMenu() {
        var menu_container = document.getElementById("tn-nav-opt-container");
        menu_container.classList.add('closed');
        menu_container.classList.remove('open');

        menu_state = 0;
    };

    d.addEventListener('DOMContentLoaded', init);
})(window,document);