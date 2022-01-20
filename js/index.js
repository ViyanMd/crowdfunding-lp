

//HAMBURGER MENU CLOSE - OPEN BUTTON 

const menu = document.querySelector('.nav_bar');
const menuBtn = document.querySelector('.nav_hamburger');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('nav_active');
});

//MODAL MENU ACTIVATION 

const modalOpenBtn = document.querySelectorAll('.btn_select');
const modalCloseBtn = document.querySelector('.icon_close_modal');
const modalBg = document.querySelector('.modal_bg');
const modalThank = document.querySelector('.modal_thanks_bg');
const submitBtn = document.querySelectorAll('.btn_form');

modalOpenBtn.forEach(button => button.addEventListener('click', () => {
    modalBg.classList.add('modal_active');
}));

modalCloseBtn.addEventListener('click', () => {
    modalBg.classList.remove('modal_active');
});




//BOOKMARK BTN ACTIVE

const bookmarkBtn = document.querySelector('.btn_bookmark');
const bookmarkCircle = document.querySelector('.btn_bookmark_circle');
const bookmarkPath = document.querySelector('.btn_bookmark_path');
const bookmarkText = document.querySelector('.btn_bookmark_text');
const bookmarkIcon = [bookmarkBtn, bookmarkCircle, bookmarkPath, bookmarkText];

function bookmark(arr) {
 bookmarkIcon.forEach(el => el.classList.toggle('marked'));
    if(bookmarkText.innerHTML === 'Bookmark') {
        bookmarkText.innerHTML = 'Bookmarked';
    } else {
        bookmarkText.innerHTML = "Bookmark";
    }
}


bookmarkBtn.addEventListener('click', () => {
   bookmark(bookmarkIcon);
});

//MODAL SECTION OPTIONS ANIMATIONS 

const radioBtn = document.querySelectorAll("input[type='radio']");
const pledges = document.querySelectorAll('.options > *');


function selectedPledge(target) {
    pledges.forEach(item => {
        if(item.classList.contains('active')) {
            item.classList.remove('active');
        } 
        if(item.lastElementChild.classList.contains('active')) {
            item.lastElementChild.classList.remove('active');
        }
    });

    target.scrollIntoView({block: "center", behavior: "smooth"});
    target.closest('.option').classList.add("active");
    target.closest('.option').lastElementChild.classList.add('active');
};

radioBtn.forEach(item => {
    item.addEventListener('change', (e) => {
        selectedPledge(e.target);
    })
})









