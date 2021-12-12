/*var inputs = document.querySelectorAll('input');


const handleChange = (e, item) => {
    const unite = item.dataset.unite;
    document.documentElement.style.setProperty(`--${item.name}`, `${item.value}${unite}`);
}

const applyEvent = (item) => {
    
    item.onchange = (e) => handleChange(e, item);
    item.onmousemove = (e) => handleChange(e, item);


}



inputs.forEach(item => applyEvent(item) ); */

const handleChange = (item) => {
    const unite = item[0].dataset.unite;
    $(':root').css(`--${item[0].name}`, `${item[0].value}${unite}`);
}

const applyEvent = (item) => {
    item.change(() => handleChange(item));
    item.mousemove(() => handleChange(item) );
}

var inputs; 
$(document).ready(function() { 
    inputs = $('input');
    inputs.each(
        (index_unused, item) => {
            console.log(item);
            applyEvent($(item));
        }
    ); 
})
