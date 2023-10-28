class Shift {
    constructor(selector, parent, media, position = 'last') {

        this.selector = document.querySelector(selector);
        this.parent = document.querySelector(parent);
        this.media = media;
        this.position = position;   
        
        this._originalParent = this.selector.parentElement;
        this._siblingElement = this.selector.nextElementSibling;

        this.resize()
        window.addEventListener('resize', () => {
            this.resize()          
        })        
    }
    
    resize() {
        if (window.innerWidth <= this.media) {
            if (this.position === 'first') {
                this.parent.prepend(this.selector)
            }    
            if (this.position === 'last') {
                this.parent.append(this.selector)
            }    
            if (typeof this.position === 'number') {    
                this.selector.remove()
                this.parent.insertBefore(this.selector, this.parent.children[this.position - 1])
            }            
        } else {
            this._originalParent.insertBefore(this.selector, this._siblingElement)
        }
    }

}


export default Shift;