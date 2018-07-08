function HtmlElement() {
  this.click = function() {
    console.log('Clicked!');
  }
};

htmlElement.prototype.focus = function() {
  console.log('Focussed');
};

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function(item) {
    this.items.push(item);
  };

  this.removeItem = function(item) {
    this.items.splice(this.items.indexOf(item),1);
  };

  this.render = function() {
    return `
      <select>${this.items.map(item => `
        <option>${item}</option>`).join('')}
      </select>`;
  }
};

HtmlSelectElement.prototype = new HtmlElement();


function HtmlImagePicker(src) {
  this.src = src;

  this.render = function() {
    return `<img src="${this.src}" />`
  }
}

HtmlImagePicker.prototype = new HtmlElement();
HtmlImagePicker.prototype.constructor = HtmlImagePicker;
