var InitUIEvents = () => {
    let _this = this;
    let $top_menu = $('.top-menu').first();
    
    _this.startYMenu = getPositionY(document.getElementsByClassName('top-menu')[0]);

    $(window).scroll(()=>{
        let scrollY = window.scrollY;
        if(scrollY >= _this.startYMenu){
            $top_menu.css('position', 'fixed');
            $top_menu.css('top', '0px');
            $top_menu.css('width', '100%');
            $top_menu.css('z-index', '1000');
        }else{
            $top_menu.css('position', 'static');
            $top_menu.css('z-index', '1');
        }
    });
}

function getPositionY(element) {
    var yPosition = 0;

    while(element) {
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return yPosition;
}