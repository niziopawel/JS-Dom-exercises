document.addEventListener('DOMContentLoaded', function() {
    const firstAttemt = document.querySelectorAll('.first-attempt');
    
    firstAttemt.forEach(elem => {
        elem.classList.add('active');
    });

    const dataBorder = document.querySelectorAll('.container > *[data-border]')
    console.log(dataBorder);
    // .filter(elem => elem.data-border == true);

    for(let i = 0; i< dataBorder.length; i++) {
        dataBorder[i].setAttribute('data-el-active',true);
    }

    const hackElem = document.querySelectorAll('.hack'); 

    hackElem.forEach(elem => {
        elem.setAttribute('title', 'hacking');
    });

    const hijackElem = document.querySelectorAll('.hijack');

    hijackElem.forEach(element => {
        element.removeAttribute('title');
    });

    const twoClasses = document.querySelectorAll('.st1.st2');
    console.log(twoClasses);
    twoClasses.forEach(elem => {
        elem.style.color = 'red';
        elem.style.fontSize = '15px'
    });

    const delElem = document.querySelectorAll('.del:not(.hijack)');

    delElem.forEach(elem => {
        elem.setAttribute('data-hack-active', true);
        elem.removeAttribute('data-hack-inactive');
    });

    const lastAttempt = document.querySelectorAll('.last-attempt');

    lastAttempt.forEach(elem => {
        elem.querySelector('span').style.display = 'none';
    })
})