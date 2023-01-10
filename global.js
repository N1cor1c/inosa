const sideMenu = document.querySelector('aside')
const formReport = document.querySelector('#reports')
const menuBtn = document.querySelector('#menu-btn')
const closeBtn = document.querySelector('#close-btn')
const closeBtnFrm = document.querySelector('#close-btn-form')
const themeToggler = document.querySelector('.theme-toggler')

var today  = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var filename = window.location.pathname.split("/").pop().split(".").shift()

// show Sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

// close Sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

closeBtnFrm.addEventListener('click', () => {
    formReport.style.display = 'none';
})

// change theme
themeToggler.addEventListener('click', () => {
    
    document.body.classList.toggle('dark-theme-variables')
    if (document.body.classList.contains('dark-theme-variables')) {
        window.localStorage.setItem('data-theme', 'dark');
    }
    else {
        window.localStorage.setItem('data-theme', 'white');
    }
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

User.forEach(user => {
    if (filename === "index") {document.getElementById('username').textContent='Welcome, '+user.username;}
    if (filename === "news") {document.getElementById('date').textContent=today.toLocaleDateString("en-US", options);}
    
    if (filename === "profile") {
        document.getElementById('username-get').textContent="Name: "+user.username;
        document.getElementById('profile-photo-get').src=user.avatar;
        document.getElementById('permission-get').textContent="Permission: "+user.permission;
        document.getElementById('userid-get').textContent="ID: "+user.id;
    }
    document.getElementById('profile-photo').src=user.avatar;
    document.getElementById('username-info').textContent=user.username;
    document.getElementById('permission').textContent=user.permission;
})

if (window.localStorage.getItem('data-theme') === 'dark') {
    document.body.classList.toggle('dark-theme-variables')
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
}

// PRELOAD
setTimeout(() => {
  document.querySelectorAll('.bg').forEach((elBg) => elBg.classList.remove('bg'));
}, 500);

function reports() {
    if (document.getElementById("reports").style.display==='none') {
        document.getElementById("reports").style.display = 'block'
    } else {
        document.getElementById("reports").style.display = 'none'
    }
}