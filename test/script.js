var div = document.querySelector('div')
var p = div.querySelector('p')

var nouveau = document.createTextNode("Paragrapheeeee 3")
var ancien = p.childNodes[0]

p.replaceChild(nouveau,ancien)