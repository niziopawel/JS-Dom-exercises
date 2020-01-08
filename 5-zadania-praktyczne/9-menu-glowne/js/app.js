function expandElementTransitionEnd(e, elem) {
    e.preventDefault();
    e.stopPropagation();
    this.removeEventListener('transitionend', expandElementTransitionEnd);
    
    const button = document.createElement('button');
    button.classList.add('close');
    button.innerText = 'Zamknij';
    elem.appendChild(button);

    button.addEventListener('click', handleCloseButton)
}

function handleCloseButton(e) {
    e.stopPropagation();
    this.parentElement.parentElement.classList.remove('expand');
    const liElements = document.querySelectorAll('li'); 
    const li = this.parentElement;

    liElements.forEach(elem => {
        elem.classList.remove('collapsed');
    });

    li.removeChild(this);
}

document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('#menu');
    menu.classList.add('menu');

    const aElements = menu.querySelectorAll('a');
    const liElements = menu.querySelectorAll('li')

    liElements.forEach(elem => {
        elem.addEventListener('mouseover', function() {
            if (!elem.classList.contains('active')) {
                liElements.forEach(elem => {
                    elem.classList.remove('active');
                });
                elem.classList.add('active');
            }      
        });

        elem.addEventListener('click', function(e) {
            e.preventDefault();
            
            liElements.forEach(elem => {
                if (this !== elem) {
                    elem.classList.add('collapsed');
                }    
            });
            elem.parentElement.classList.add('expand');
            elem.parentElement.addEventListener('transitionend', expandElementTransitionEnd(e, elem));
        })
    });
});