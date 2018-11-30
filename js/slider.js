class Slider{
    constructor(selector){
        let _this = this;
        this.$selector = $(selector);
        this.$slides = this.$selector.find('.slide');
        this.count = this.$slides.length;
        this.$slider_content = this.$selector.find('.slider-content').first();
        this.old_width = $(window).width();
        this.is_mobile = Number($(window).width()) <= 800;

        $(window).resize(() => {
            let new_width = $(window).width();
            if(new_width === _this.old_width) return;
            _this.old_width = new_width;
            this.is_mobile = new_width <= 800;
            _this.initSlider();
            this.initEvents();
        });
        
        this.initSlider();
        this.initEvents();
    }

    initSlider(){
        let point_width = 21;

        this.slider_width = this.$selector.width();

        let slider_content_width = 0;

        for(let i = 0; i < this.count; i++) {
            let $slide = $(this.$slides[i]);

            let s_width = this.is_mobile ? 
                               this.makeMobileColWidth($slide, this.slider_width) : 
                               this.makeDesctopColWidth($slide, this.slider_width);
            
            $slide.width(s_width + 'px');

            slider_content_width += s_width;
        }
        
        this.slider_content_width = slider_content_width;
        this.$slider_content.width(slider_content_width + 'px');

        $(this.slider_paginator).remove();
        $(this.arrow_left).remove();
        $(this.arrow_right).remove();

        this.current_slide = 0;

        this.arrow_left = document.createElement('div');
        this.arrow_left.setAttribute('class', 'arrow arrow-left');

        this.arrow_right = document.createElement('div');
        this.arrow_right.setAttribute('class', 'arrow arrow-right');

        this.$slider_content.before(this.arrow_left);
        this.$slider_content.after(this.arrow_right);


        this.slider_paginator = document.createElement('div');
        this.slider_paginator.setAttribute('class', 'slider-paginator');

        $(this.arrow_right).after(this.slider_paginator);

        this.ul_points = document.createElement('ul');
        this.ul_points.setAttribute('class', 'points');

        this.slider_paginator.appendChild(this.ul_points);

        this.count_scrolls = (slider_content_width - slider_content_width %  this.slider_width) /  this.slider_width;
       
        for(let i = 0; i < this.count_scrolls; i++) this.ul_points.appendChild(this.makePoint(i));
        
        let ul_points_width = 0;

        if(this.count_scrolls != 0) ul_points_width = this.count_scrolls * point_width;
        
        $(this.ul_points).css('width', ul_points_width);

        this.goTo(0);
    }

    makePoint(index){
        let a = document.createElement('a');
        let li = document.createElement('li');
        li.setAttribute('class', 'point');
        li.setAttribute('data-index', index);
        li.appendChild(a);
        return li;
    }

    makeMobileColWidth($slide, parent_width){
        return  this.makeAbsoluteColWidth($slide, parent_width, 'sm');
    }

    makeDesctopColWidth($slide, parent_width){
        return this.makeAbsoluteColWidth($slide, parent_width, 'lg');
    }

    makeAbsoluteColWidth($slide, parent_width, type){
        for(let i = 1; i < 30; i ++) if($slide.hasClass('col-' + type + '-' + i)) return i * parent_width / 12;
        return parent_width;
    }

    initEvents(){
        let _this = this;
        
        $(this.arrow_left).click(()=>{
            _this.goBack();
        });
        
        $(this.arrow_right).click(()=>{
            _this.goNext();
        });

        $(this.$selector).find('.point').click((item) => {
            let index = $(item.currentTarget).data('index');
            _this.goTo(index);
        });
    }


    goNext(){
        let index = this.current_slide + 1;
        if(index >= this.count_scrolls) index = 0;
        this.goTo(index);
    }

    goBack(){
        let index = this.current_slide - 1;
        if(index < 0) index = this.count_scrolls - 1;
        this.goTo(index);
    }

    goTo(index){
        if(index < 0 || index >= this.count_scrolls) return;
        this.current_slide = index;
        let scroll = this.current_slide * this.slider_width;
        this.$selector.animate({scrollLeft: scroll}, 800);
        this.$selector.find('.active-point').removeClass('active-point');
        let new_active = this.$selector.find('li[data-index=' + this.current_slide + ']');
        if(new_active) $(new_active).addClass('active-point');
    }
}