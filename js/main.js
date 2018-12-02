var card = undefined;

$(function(){
    InitMobile(Number($(window).width()));
    InitUIEvents();
    card = new Card(document.getElementsByClassName('card-btn')[0]);
    let slider = new Slider($("#top-slider"));
    $("#open-search-btn").click(()=>{
        let show_search = $("#open-search-btn").data('toggle');
        if(!show_search || show_search == '0'){
            $("#open-search-btn").data('toggle', '1');
            $("#search-form").show();
        }else{
            $("#open-search-btn").data('toggle', '0');
            $("#search-form").hide();
        }
    })
});