document.addEventListener('DOMContentLoaded', function() {
    const navElements = document.querySelectorAll('.nav-el');

    navElements.forEach(elem => {
        elem.addEventListener('click', function(e) {
            e.preventDefault();

            if(!elem.classList.contains('nav-el-active')) {
                navElements.forEach(element => {
                    element.classList.remove('nav-el-active');
                });
                elem.classList.add('nav-el-active');
                const target = document.querySelector((elem.firstElementChild.getAttribute('href')));
                target.scrollIntoView({ behavior: 'smooth', block: 'start'});
            }
        })
    });
})