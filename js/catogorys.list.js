$(()=>{
    $('.dropdown-content').click((i)=>{
        let $current = $(i.currentTarget);
        let $parent = $current.parent('li').first().parent('ul');

        if(!$parent.hasClass('root-list')){
            return true;
        } 
        
        let toggle = $current.data('toggle');
        if(!toggle) toggle = '0';

        let $ul = $current.parent('li').find('ul').first();
        if(!$ul) return;

        let $i = $current.find('i').first();

        if(toggle === '0'){
            if($i) $i.addClass('open');
            $current.data('toggle', '1');
            $ul.slideDown(200);
        }else{
            if($i) $i.removeClass('open');
            $current.data('toggle', '0');
            $ul.slideUp(200);
        }

        return false;
    });

    $('.mobile-categorys .box-header h3').click((i)=>{
        let $current = $(i.currentTarget);
        let $parent = $current.closest('.mobile-categorys').first();
        if(!$parent) return true;

        let toggle = $current.data('toggle');
        if(!toggle) toggle = '0';
        
        let $content = $parent.find('.box-list');
        if(!$content) return;

        let $i = $current.find('i');

        if(toggle === '0'){
            if($i){
                $i.removeClass('fa-angle-down');
                $i.addClass('fa-angle-up');
            }
            $current.data('toggle', '1');
            $content.slideDown(200);

        }else{
            if($i){
                $i.removeClass('fa-angle-up');
                $i.addClass('fa-angle-down');
            }
            $current.data('toggle', '0');
            $content.slideUp(200);
            
        }
    });
});