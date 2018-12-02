var InitMobile = function(width){
    let _this = this;
    
    let $top_static_menu = $("#top-static-menu");
    let $top_menu = $("#top-menu");

    let $menu_toggle_btn = $top_menu.find(".menu-toggle-btn").first();
    let $menu_static_toggle_btn = $top_static_menu.find(".menu-toggle-btn").first();

    let $nav_static_menu = $top_static_menu.find('nav').first();
    let $nav_menu = $top_menu.find('nav').first();

    let $menu_drop_down_items = $(".dropdown-link");
    
    _this.is_mobile = width <= 800;
    
    $(window).resize(()=>{
        _this.is_mobile = Number($(window).width()) <= 800;
        if(!_this.is_mobile){
            $nav_menu.css('display', 'block');
        }
    });

    $menu_toggle_btn.click(()=>{
        let toggle = $menu_toggle_btn.data('toggle');
        if(!toggle) toggle = '0';
        if(toggle === '0'){
            $menu_toggle_btn.data('toggle', '1');
            $nav_menu.slideDown(300);
        }else{
            $menu_toggle_btn.data('toggle', '0');
            $nav_menu.slideUp(300);
        }
    });

    $menu_static_toggle_btn.click(() => {
        let toggle = $menu_static_toggle_btn.data('toggle');
        if(!toggle) toggle = '0';
        if(toggle === '0'){
            $menu_static_toggle_btn.data('toggle', '1');
            $nav_static_menu.slideDown(300);
        }else{
            $menu_static_toggle_btn.data('toggle', '0');
            $nav_static_menu.slideUp(300);
        }
    })

    $menu_drop_down_items.click((i) => {
        if(!_this.is_mobile) return false;
        let $current = $(i.currentTarget);
        let toggle = $current.data('toggle');
        if(!toggle) toggle = '0';
        let $ul = $current.next('ul').first();
        if(toggle === '0'){
            $current.data('toggle', '1');
            $ul.slideDown(300);
        }else{
            $current.data('toggle', '0');
            $ul.slideUp(300);
        }
    });

    // $menu_drop_down_items.hover(
    // //hover
    // (i)=>{

    // },
    // //out
    // (i)=>{

    // });
}
