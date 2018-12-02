$(()=>{
    $('.quick-view-btn').click((i) => {
        let $current = $(i.currentTarget);
        let productId = $current.data('product-id');
        if(!productId) return;
        $("#hidden-fast-view").show();
    });
    $("#close-hidden-fast-view").click(()=>{
        $("#hidden-fast-view").hide();
    })
})