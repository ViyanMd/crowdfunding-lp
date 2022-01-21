//STATE MANAGMENT 
const bookmarked = false;

const stats = {
        generated: 89914,
        participants: 5007,
        deadline: 56
}

const availability = {
        bamboo: 101,
        blackEdition: 64,
        mahoganySpecial: 0
}

let generated = document.querySelector('.section_stat_goal_current');
let participants = document.querySelector('.section_stat_participants_current');
let deadline = document.querySelector('.section_stat_deadline_left');

generated.innerHTML = stats.generated.toLocaleString('en-IN');
participants.innerHTML = stats.participants.toLocaleString('en-IN');
deadline.innerHTML = 56;





//HAMBURGER MENU CLOSE - OPEN BUTTON 

const menu = document.querySelector('.nav_bar');
const menuBtn = document.querySelector('.nav_hamburger');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('nav_active');
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

//MODAL MENU ACTIVATION 


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

    target.closest('.option').classList.add("active");
    target.closest('.option').lastElementChild.classList.add('active');

};

radioBtn.forEach(item => {
    item.addEventListener('change', (e) => {
        selectedPledge(e.target);
    })
})

//COMPLETING FORM 

let modalStack = [];
let stackIsEmpty = () => !modalStack.length;

const openModal = modalId => {
    const modalWindow = document.getElementById(modalId);
    if(modalId === 'modal1') {
        modalWindow.classList.add('modal_active');
        modalStack.push(modalWindow);
    } else if(modalId === 'modal2') {
        modalStack.push(modalWindow);
        closeBottom();
        modalWindow.classList.add('modal_active');
    }
}

const closeBottom = () => {
    const bottomModal = document.getElementById('modal1');
    bottomModal.classList.remove('modal_active');
}


let btnModalTrigger = document.querySelectorAll('button');
btnModalTrigger.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let triggerBtn = e.target;
        let modalId = triggerBtn.getAttribute("data-modal-id");
        openModal(modalId);
    })
})

const completeModal = document.querySelectorAll('.modal_thanks_btn');
completeModal.forEach(btn => {
    btn.addEventListener('click', () => {
        document.getElementById('modal2').classList.remove('modal_active');
    })
})

const closeModalEx = () => {
    document.getElementById('modal1').classList.remove('modal_active');
}

document.querySelector('.close_modal').addEventListener('click', () => {
    closeModalEx();
})
















