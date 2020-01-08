const tabs = document.querySelectorAll('.tab-el');
let activeTab = document.querySelector('.tab-el.tab-el-active');
let activeContent = document.querySelector('.tab-content-active');


function removeActiveClass(element, aClass) {
    element.classList.remove(aClass);
}

function displayTabContent(tab) {
    const id = tab.firstElementChild.getAttribute('href');
    const tabContent = document.querySelector(id);
    
    if (tabContent != activeContent) {
        removeActiveClass(activeContent, 'tab-content-active');
        tabContent.classList.add('tab-content-active');
        activeContent = tabContent;
    }
}

function changeTabOnActive(tab) {
    
    if (tab != activeTab) {
        removeActiveClass(activeTab, 'tab-el-active');
        tab.classList.add('tab-el-active');
        activeTab = tab;
    }
    displayTabContent(tab);
}

document.addEventListener('DOMContentLoaded', function() {

   tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            changeTabOnActive(this);
        }); 
   }); 
})