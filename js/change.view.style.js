$(()=>{
    let old_width = $(window).width();
    $(window).resize(()=>{
        let width = $(window).width();
        if(width == old_width) return;
        old_width = width;
        is_mobile();
    });

    let is_mobile = () => {
        if(old_width <= 800) {
            $('.list-style').removeClass('list-style');
            $('.view-btns .btn-active').removeClass('btn-active');
            $('.view-btns .btn-grid').addClass('btn-active');
        }
    };

    $('.view-btns .btn-grid').click((i) => {
        let $current = $(i.currentTarget);
        if($current.hasClass('btn-active')) return;

        $('.product-item').removeClass('list-style');
        $('.view-btns .btn-active').removeClass('btn-active');
        $('.view-btns .btn-grid').addClass('btn-active');
    });

    $('.view-btns .btn-list').click((i) => {
        let $current = $(i.currentTarget);
        if($current.hasClass('btn-active')) return;

        $('.product-item').addClass('list-style');
        $('.view-btns .btn-active').removeClass('btn-active');
        $('.view-btns .btn-list').addClass('btn-active');
    })
});