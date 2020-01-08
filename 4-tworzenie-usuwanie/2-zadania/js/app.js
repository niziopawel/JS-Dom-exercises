document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.delete').addEventListener('click', function() {
        const list = document.querySelector('.list');
        
        // list.innerHTML = ''; //duzo wolniejsze, nie uzywac
        
        while(list.firstChild) {
            list.removeChild(list.firstChild);
            // list.firstChild.remove(); rownoważne
        }
    })
})