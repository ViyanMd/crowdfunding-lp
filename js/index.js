//HAMBURGER MENU CLOSE - OPEN BUTTON 

const menu = document.querySelector('.nav_bar');
const menuBtn = document.querySelector('.nav_hamburger');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('nav_active');
});


const modalOpenBtn = document.querySelectorAll('.btn_select');
const modalCloseBtn = document.querySelector('.icon_close_modal');
const modalBg = document.querySelector('.modal_bg');

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
const bookmarkIcon = [bookmarkBtn, bookmarkCircle, bookmarkPath,bookmarkText];

bookmarkBtn.addEventListener('click', () => {
    bookmarkIcon.forEach(el => el.classList.toggle('marked'));
    if(bookmarkText.innerHTML === 'Bookmark') {
        bookmarkText.innerHTML = 'Bookmarked';
    } else {
        bookmarkText.innerHTML = "Bookmark";
    }
});

//MODAL SECTION OPTIONS ANIMATIONS 







