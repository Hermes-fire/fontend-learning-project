
/*const inputs = document.querySelectorAll('.controls input');

      function handleUpdate() {
        const suffix = this.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
      }
  
      inputs.forEach(input => input.addEventListener('change', handleUpdate));
      inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));   
*/

//js to jquery

var input; // declare variable out of function to check them in console
var suffix;

//$(element) return an object jQuery.fn.init(lenght)
// [input#spacing, input#blur, input#base, prevObject: jQuery.fn.init(1)]
function handleUpdate() { //arrow function won't work (this in regular function always refers to the context of the function being called. However, in the arrow function, this has nothing to do with the caller of the function.)
  suffix = this.dataset.sizing || '';
  //or affect the first value if true (blur don't have data-sizing)
  //dataset.name is where data-name attribute is stored check console
  $(':root').css('--' + $(this).attr('name'), this.value + suffix);
  //$(element).css(prop,value) change css propriety
  //$(element).attr(attribute) return attribute value
}

$(document).ready(function() { 
  //ready run JavaScript code as soon as the page's (DOM) becomes safe to manipulate.
  //won't work with js if we link the script in header, cause it runs script before html rendred(dom safe to manipulate/ready)
  input = $('.controls input');
  //$ return an object 

  //change whenever there is a change in the object
  //mouse move on range
  input.change(handleUpdate)  //No need to use .each. event already binds to all div occurrences.
  input.mousemove(handleUpdate)
})

/*const parent = {
  mom_name: "Samantha Quinn",
  mother: function () {
      return `${this.mom_name} is my mother`;
  },
};
console.log(parent.mother());*/
