// Prototypical Inheritance Exercise

// function HtmlElement() {
//     this.click = function() {
//         console.log('clicked');
//     }
// }

// HtmlElement.prototype.focus = function() {
//     console.log('focued');
// }

// function HtmlSelectElement(items = []) {
//     this.items = items;

//     this.addItem = function(item) {
//         this.items.push(item);
//     }

//     this.removeItem = function(item) {
//         this.items.splice(this.items.indexOf(item), 1);
//     }
// }

// HtmlSelectElement.prototype = new HtmlElement(); // usamos new para poder heredar las propiedades del elemento y su metodo guardado en el proto
// HtmlSelectElement.prototype.constructor = HtmlSelectElement;

// Exercise Polymorphism

function HtmlSelectElement(items = []) {
    this.items = items;

    this.addItem = function(item) {
        this.items.push(item);
    }

    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    this.render = function() {
        return `
            <select>${this.items.map(item => `
                <option>${item}</option>`).join('')}
            </select>
        `;
    }
}

HtmlSelectElement.prototype = HTMLElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
    this.src = src;

    this.render = function() {
        return `<img src="${this.src}" />`
    }
}

HtmlImageElement.prototype = new HTMLElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;