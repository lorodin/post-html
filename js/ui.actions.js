var InitUIEvents = () => {
    let _this = this;
    let $static_menu = $('#top-static-menu');
    _this.startYMenu = getPositionY(document.getElementById('top-menu'));

    $(window).scroll(()=>{
        let show = $static_menu.data('show');
        if(!show) show = '0';
        showOrHideStaticMenu(show);
    });

    let showOrHideStaticMenu = (show) => {
        let scrollY = window.scrollY;
        if(scrollY > _this.startYMenu){
            if(show === '0'){
                $static_menu.data('show', '1');
                $static_menu.slideDown(200);
            }
        }else{
            if(show === '1'){
                $static_menu.data('show', '0');
                $static_menu.slideUp(200);
            }
        }
    }

    let show = $static_menu.data('show');
    if(!show) show = '0';
    showOrHideStaticMenu(show);
}

function getPositionY(element) {
    var yPosition = 0;

    while(element) {
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return yPosition;
}