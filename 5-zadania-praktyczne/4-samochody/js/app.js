const buttons = document.querySelectorAll('button[type=button]');


function showDetail(btn) {
    const carElem = btn.parentElement.parentElement.parentElement;
    const detailDiv = carElem.lastElementChild;

    if (detailDiv.style.display == 'none') {
        detailDiv.style.display = 'flex';
        btn.innerText = 'Schowaj detale';
        carElem.classList.add('car-show-detail');
    } else {
        btn.innerText = 'Pokaż detale'
        detailDiv.style.display = 'none';
        carElem.classList.remove('car-show-detail');

    }
}

document.addEventListener('DOMContentLoaded', function() {
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showDetail(this);
        })
    });
})