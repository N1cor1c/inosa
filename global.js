const sideMenu = document.querySelector('aside')
const menuBtn = document.querySelector('#menu-btn')
const closeBtn = document.querySelector('#close-btn')
const themeToggler = document.querySelector('.theme-toggler')

var today  = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

// show Sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

// close Sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
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

// fill Actions in table
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                        <td >${order.username}</td>
                        <td >${order.userid}</td>
                        <td >${order.date}</td>
                        <td class="${order.shipping === 'Sell' ? 'danger' : 'primary'}">${order.shipping}</td>
                        <td class="primary">${order.roleName}</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);

});
// fill Actions in table
Updates.forEach(message => {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('update')
    const messages = `
    
        <div class="profile-photo">
            <img loading="lazy" id='update-img' src="${message.avatar}">
        </div>
        <div class="message">
            <p><b>${message.username}</b> ${message.content}</p>
            <small class="text-muted">${today.toLocaleDateString("en-US", options)}</small>
        </div>
    `;
    messageDiv.innerHTML = messages;
    document.querySelector('[class="recent-updates"] [class="updates bg"]').appendChild(messageDiv);
});



User.forEach(user => {
    document.getElementById('username-info').textContent=user.username;
    document.getElementById('profile-photo').src=user.avatar;
    document.getElementById('permission').textContent=user.permission;
})

if (window.localStorage.getItem('data-theme') === 'dark') {
    document.body.classList.toggle('dark-theme-variables')
}

Guild.forEach(guild => {
    document.getElementById("members").textContent=guild.members;
    document.getElementById("experiences").textContent=guild.experiences;
    document.getElementById("cash").textContent=guild.cash;
    document.getElementById("guild-name").textContent="Dashboard - "+guild.name;
})
// PRELOAD
setTimeout(() => {
  document.querySelectorAll('.bg').forEach((elBg) => elBg.classList.remove('bg'));
}, 3000);