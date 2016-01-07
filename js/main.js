(function(w,d) {

    function init() {
        var responsive_menu_button = document.getElementById("tn-nav-mobile-btn"),
            menu_container = document.getElementById("tn-nav-opt-container");

        responsive_menu_button.addEventListener('click', function(){
            menu_container.classList.add('open');
            menu_container.classList.remove('closed');
        });

    };

    d.addEventListener('DOMContentLoaded', init);
})(window,document);