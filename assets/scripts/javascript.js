function requiredTrophies() {
    return fetch('https://api.brawlapi.com/v1/clublog/2R8QP0C9C')
        .then(resp => resp.json())
        .then(data =>
            document.getElementById("requiredTrophies").innerHTML = 'A <span class="font-bold">minimum</span> of <span class="font-bold">' + data.club.requiredTrophies + '</span> trophies.');
};

function joinAvailability() {
    return fetch('https://api.brawlapi.com/v1/clublog/2R8QP0C9C')
        .then(resp => resp.json())
        .then(data => data.history.find(x => x.type === "settings").data.new)
        .then(resp => {
            if (resp == "Open") {
                document.getElementById("joinAvailability").innerHTML = 'The club is currently Open, so feel free to join!';
            } else if (resp == "Closed") {
                document.getElementById("joinAvailability").innerHTML = 'The club is currently unfortunately Closed, please check back later.';
            } else if (resp == "Invite Only") {
                document.getElementById("joinAvailability").innerHTML = 'The club is currently set to Invite Only, join the discord server to get an invite!';
            }
        })
};

function memberCount() {
    return fetch('https://api.brawlapi.com/v1/clublog/2R8QP0C9C')
        .then(resp => resp.json())
        .then(data => {
            if (data.club.memberCount < 30) {
                document.getElementById("members").innerHTML = 'The current amount of members is ' + data.club.memberCount + ' out of 30. <br><br> So you can join the club!';
            } else {
                document.getElementById("members").innerHTML = 'The current amount of members is ' + data.club.memberCount + ' out of 30. <br><br> Unfortunately, you cannot join the club at this point of time. Please check later if a spot is open for you to join!';
            }
        });
};

function promotion() {
    return fetch('https://api.brawlapi.com/v1/clublog/2R8QP0C9C')
        .then(resp => resp.json())
        .then(data => data.club.requiredTrophies)
        .then(resp => document.getElementById("promotion").innerHTML = 'To get promoted to Senior you need to have 5k more trophies than the required amount of trophies. <br><br> The current required trophies is ' + resp + '. So, you need to have ' + (resp + 5000) + ' trophies to get promoted to Senior.');
};

function loadAPIData() {
    requiredTrophies();
    joinAvailability();
    memberCount();
    promotion();
}

function startTour() {
    var element = document.querySelector("#tour");
    // smooth scroll to element and align it at the start
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function mobileNavbar() {
    var x = document.getElementById("mobileNav");
    if (x.classList.contains("hidden")) {
        x.classList.remove("hidden");
    } else {
        x.classList.add("hidden");
    }
}