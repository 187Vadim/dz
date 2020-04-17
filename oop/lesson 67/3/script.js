class Rectangle {
    constructor(width, height) {
        this.elem = document.createElement('div');
        this.setWidth(width);
        this.setHeight(height);
        this.elem.style.border = '1px solid red';
        document.body.appendChild(this.elem);
    }
    setWidth(width) {
        this.elem.style.width = width + 'px';
    }
    getWidth() {
        return parseInt(this.elem.style.width);
    }
    setHeight(height) {
        this.elem.style.height = height + 'px';
    }
    getHeight() {
        return parseInt(this.elem.style.height);
    }
    }

var elem1 = new Rectangle(550, 550)
alert(elem1.getWidth());
alert(elem1.getHeight());
var elem2 = new Rectangle(150, 100)