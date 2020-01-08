let activeBtn = document.querySelector('.nav-el-active');
const buttons = document.querySelectorAll('.nav-el');

document.addEventListener('DOMContentLoaded', function() {
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            activeBtn.classList.remove('nav-el-active');
            if (this != activeBtn) {
                btn.classList.add('nav-el-active');
                activeBtn = this;
            }
        })
    });
})