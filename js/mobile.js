var InitMobile = function(width){
    let _this = this;
    let $menu_toggle_btn = $('#menu-toggle-btn');
    let $menu_drop_down_items = $(".dropdown-link");
    let $top_menu = $("#top-menu");
    let events_seting = false;
    _this.is_mobile = width <= 800;
    $(window).resize(()=>{
        _this.is_mobile = Number($(window).width()) <= 800;
        if(_this.is_mobile) {
            if(events_seting) return;
            events_seting = true;
            _this.set_mobile_events();   
        }
        else {
            events_seting = false;
            _this.remove_mobile_events();
        }
    });

    $(window).on( "orientationchange", () => {
        _this.is_mobile = Number($(window).width()) <= 800;
        if(_this.is_mobile) {
            if(events_seting) return;
            events_seting = true;
            _this.set_mobile_events();   
        }
        else {
            events_seting = false;
            _this.remove_mobile_events();
        }
    });
    
    _this.remove_mobile_events = () => {   
        $menu_toggle_btn.off('click', menu_toggle_btn_click);
        $menu_drop_down_items.off('click', drop_down_click);
        $top_menu.css('display', 'block');
        clear_drop_down_list($menu_drop_down_items);
    };

    _this.set_mobile_events = () => {
        $menu_toggle_btn.on('click', menu_toggle_btn_click);
        $menu_drop_down_items.on('click', drop_down_click);
        $top_menu.css('display', 'none');
    }

    if(_this.is_mobile) _this.set_mobile_events();
}

let clear_drop_down_list = (drop_link) => {
    let item = $(drop_link).next("ul");
    if(!item) return;
    item.removeAttr('style');
}

let menu_toggle_btn_click = () => {
    console.log('Set mobile actions');
    if($('.toggle-btn').data('toggle') == '0'){
        $('.toggle-btn').data('toggle', '1');
        $("#top-menu").slideDown(300);
    }else{
        $('.toggle-btn').data('toggle', '0');
        $("#top-menu").slideUp(300);
    }
}

let drop_down_click = (current) => {
    console.log('Remove mobile actions');
    let item = $(current.currentTarget).next("ul");
    let show = $(current.currentTarget).data('toggle');
    if(!item) return;
    if(!show || show == '0'){
        $(current.currentTarget).data('toggle', '1');
        $(item).slideDown(300);
    }else{
        $(current.currentTarget).data('toggle', '0');
        $(item).slideUp(300);
    }
}