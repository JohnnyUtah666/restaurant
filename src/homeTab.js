const populateHome = () => {
    document.getElementById("subcontent").innerHTML = "";
    let banner = document.createElement('div');
    banner.setAttribute('id', 'banner');
    subcontent.appendChild(banner);
    banner.textContent = "BIFF'S BURGER BaRN";

    let about = document.createElement('div');
    about.setAttribute('id', "about");
    subcontent.appendChild(about);
    about.textContent = "Crack into a burger! \nCrack into a shake! \nCrack into a bucket'a chicken or somethin' else we make! \nGet BIFFED!";

    let location = document.createElement('div');
    location.setAttribute('id', 'location');
    subcontent.appendChild(location);
    location.textContent = "86685 Sprong Boulevard, Little Suskaloosa, WV 25985";
}

export {populateHome}