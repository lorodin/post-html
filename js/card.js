class Card{
    constructor(selector){
        this.$card_icon = $(selector);
        this.total_count = 0;
        this.updateIcon();
    }

    updateIcon(){
        console.log('Update icon');
        this.$card_icon.html("<b>" + this.total_count + "</b>");
    }

    addToCard(count){
        this.total_count += count;
        this.updateIcon();
    }
}