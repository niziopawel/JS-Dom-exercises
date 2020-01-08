let userList;
let form;

function addUser(name, phone) {
    const userElem = document.createElement('li');
    userElem.classList.add('user');

    const userData = document.createElement('div');
    userData.classList.add('user-data');

    const userName = document.createElement('div');
    userName.classList.add('user-name');
    userName.innerText = name.value;


    const userPhone = document.createElement('div');
    userPhone.classList.add('user-phone');
    userPhone.innerText = phone.value;


    const delBtn = document.createElement('button');
    delBtn.classList.add('btn');
    delBtn.classList.add('user-delete');
    delBtn.innerText = 'Usuń';

    userElem.appendChild(userData);
    userElem.appendChild(delBtn);

    userData.appendChild(userName);
    userData.appendChild(userPhone);

    userList.append(userElem);
}

function deleteUser(e) {
    e.preventDefault();

    if (e.target.closest('.btn.user-delete') !== null) {
        e.target.closest('.user').remove();
    }
}

function formSubmitCallback(e) {
    e.preventDefault();

    const name = this.querySelector('input#name');
    const phone = this.querySelector('input#phone');

    if (validateForm(name.value, phone.value)) {
        addUser(name, phone);
    } else {
        alert('Wypelnij wszystkie pola');
    }
}

function validateForm(name, phone) {
    if (name != '' && phone != '') {
        return true;
    } else {
        return false;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    userList = document.querySelector('.user-list');
    form = document.querySelector('.form');

    form.addEventListener('submit', formSubmitCallback.bind(this));
    
    userList.addEventListener('click', deleteUser.bind(this));
})