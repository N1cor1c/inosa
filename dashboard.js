// fill Actions in table
Guild.forEach(guilddata => {
    const guilds = document.createElement('div');
    guilds.classList.add('guild')
    if (guilddata.join === 'false') {
        if (guilddata.permission === 'admin') {var buttons =  `<a href='#' class='invitation primary'>Invitation</a>`}
        else {var buttons =  ""}
        
    }
    else {
        if (guilddata.permission === 'admin') {
            var buttons =  `<div>
                <a href='./${guilddata.name}.html' class='statistics success'>Open statistics</a>
                <a href='#' class='settings danger'>Settings</a>
            </div>`
        }
        else {
            var buttons =  `<div>
                <a href='./${guilddata.name}.html' class='statistics success'>Open statistics</a>
                <a href='#' class='settings text-muted'>Settings</a>
            </div>`
        }
    }
    const guild = `
        <span class="material-symbols-sharp">dns</span>
        <div class="middle">
            <div class="lef bg">
                <h3>${guilddata.name}</h3>
                <h1 id="members">${guilddata.members} members</h1>
                ${buttons}
            </div>
        </div>
        <small class="text-muted">Last 24 hours</small>
    `;
    guilds.innerHTML = guild;
    document.querySelector('main [class="insights"]').appendChild(guilds);
})