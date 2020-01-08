let list;

function addNewElem(elemCount) {
    const element = document.createElement('div');
    element.classList.add('element');

    const title = document.createElement('h3');
    title.classList.add('element-title');
    title.innerHTML = `Element numer <span class="nr">${elemCount + 1}</span>`;


    const cloneBtn = document.createElement('button');
    cloneBtn.classList.add('clone');
    cloneBtn.innerText = 'Clone';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerText = 'Delete';


    element.appendChild(title);
    element.appendChild(cloneBtn);
    element.appendChild(deleteBtn);

    list.append(element); 
}



document.addEventListener('DOMContentLoaded', function() {
    const addBtn = document.querySelector('#add');  
    list = document.querySelector('.list');
    
    addBtn.addEventListener('click', function(e) {
        const elemCount = document.querySelectorAll('.element').length;
        e.preventDefault();
        addNewElem(elemCount);
    });

    list.addEventListener('click', function(e) {
        e.preventDefault();
        
        if(e.target.closest('.delete') !== null) {
            e.target.closest('.element').remove();
        }

        if(e.target.closest('.clone') !== null) {
            const elementNr = Number.parseInt(e.target.previousElementSibling.firstElementChild.innerText) - 1;
            addNewElem(Number.parseInt(elementNr));s
        }
    });
})