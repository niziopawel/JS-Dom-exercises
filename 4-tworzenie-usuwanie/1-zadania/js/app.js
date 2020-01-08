/*
Za pomocą JS stwórz nowy element, który będzie miał:

- wymiary 300px x 300px
- losowy kolor tła
- wyświetlanie typu inline-flex
- zaokrąglenie rogów o wielkości 5px
- wycentrowany tekst na środku "Element nr ...." który wyliczysz
- font powinien być sans-serif

Po stworzeniu elementu dodaj go do body

Powyższe czynności spróbuj zrobić w intervale ustawionym na 1000ms.
*/

document.addEventListener('DOMContentLoaded', function() {
    const interval = 1000;
    var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    const body = document.querySelector('body');
    
    function createElement(count) {
        const elem = document.createElement('div');
        elem.classList.add('element');
        elem.style.setProperty('background-color', randomColor);
        elem.innerText = `Element nr: ${count}` 
        body.appendChild(elem);
    }
})