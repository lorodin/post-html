class Slider{
    constructor(selector){
        this.$selector = $(selector);
        this.$slides = this.$selector.find('.slide');
        this.count = this.$slides.length;
        this.$slider_content = this.$selector.find('.slider-content').first();

        this.current_slide = 0;
        this.slider_width = this.$selector.width();

        let slider_content_width = (this.slider_width + 10) * this.count;

        this.$slider_content.width(slider_content_width + 'px');

        this.arrow_left = document.createElement('div');
        this.arrow_left.setAttribute('class', 'arrow arrow-left');

        this.arrow_right = document.createElement('div');
        this.arrow_right.setAttribute('class', 'arrow arrow-right');

        this.$slider_content.before(this.arrow_left);
        this.$slider_content.after(this.arrow_right);

        this.slider_paginator = document.createElement('div');
        this.slider_paginator.setAttribute('class', 'slider-paginator');

        this.ul_points = document.createElement('ul');
        this.ul_points.setAttribute('class', 'points');

        this.slider_paginator.appendChild(this.ul_points);

        for(let i = 0; i < this.count; i++){
            let a = document.createElement('a');
            a.setAttribute('href', '#');
            let li = document.createElement('li');
            li.setAttribute('class', 'point');
            li.setAttribute('data-index', i);
            li.appendChild(a);
            this.ul_points.appendChild(li);
        }

        $(this.arrow_right).after(this.slider_paginator);

        $(window).resize(() => {

        });

        this.initEvents();
    }

    initSlider(){
        
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
        })
    }

    makePaginator(){

    }

    goNext(){
        let index = this.current_slide + 1;
        if(index >= this.count) index = 0;
        this.goTo(index);
    }

    goBack(){
        let index = this.current_slide - 1;
        if(index < 0) index = this.count - 1;
        this.goTo(index);
    }

    goTo(index){
        if(index < 0 || index >= this.count) return;
        this.current_slide = index;
        let scroll = this.current_slide * this.slider_width;
        this.$selector.animate({scrollLeft: scroll}, 800);
        console.log('Scroll to: ' + scroll);
    }
}