(function() {
    function menuMobile() {
        $('#nav-bar ul').origamidMenu({
            breakpoint: 1024,
            top: 35,
            background: '#2c3e50',
            color: '#FFFFFF',
        });
    }

    menuMobile();
}());