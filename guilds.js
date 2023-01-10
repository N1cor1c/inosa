var today  = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var filename = window.location.pathname.split("/").pop().split(".").shift()
// fill Actions in table
Guild.forEach(guild => {
    if (guild.name === filename) {
        document.getElementById("members").textContent=guild.members;
        document.getElementById("experiences").textContent=guild.experiences;
        document.getElementById("cash").textContent=guild.cash;
        document.getElementById("guild-name").textContent="Dashboard - "+guild.name;

        guild.updates.forEach(message => {
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
        guild.updates.forEach(order => {
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
    }
})