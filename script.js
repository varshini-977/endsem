
let clicks = 0;
let imageNumber = 1;

function trackEvent(name) {

    clicks++;

    document.getElementById("count").innerHTML =
        "Total Clicks: " + clicks;

    document.getElementById("event").innerHTML =
        "Last Event: " + name;
}

function changeImage() {

    let photo = document.getElementById("profile");

    if (imageNumber === 1) {

        photo.src =
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300";

        imageNumber = 2;

    } else {

        photo.src =
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300";

        imageNumber = 1;
    }

    trackEvent("Profile Image Changed");
}

function toggleAbout() {

    let about = document.getElementById("about");

    if (about.style.display === "none") {

        about.style.display = "block";

    } else {

        about.style.display = "none";
    }

    trackEvent("About Section Toggled");
}

function resetEvents() {

    clicks = 0;

    document.getElementById("count").innerHTML =
        "Total Clicks: 0";

    document.getElementById("event").innerHTML =
        "Events Reset";
}
