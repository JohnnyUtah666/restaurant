const populateHome = () => {
    document.getElementById("subcontent").innerHTML = "";
    let banner = document.createElement('div');
    banner.setAttribute('id', 'banner');
    subcontent.appendChild(banner);
    banner.textContent = "Glorkulon's Space Bar";

    let about = document.createElement('div');
    about.setAttribute('id', "about");
    subcontent.appendChild(about);
    about.textContent = "Serving the West Glorkulucian Asteroid Belt since 15.678 A.D.! Specialists in mimicking the flesh and fibers coveted in the dishes of yesteryear. It may all be soy, but you'll eat it and you'll like it!";

    let location = document.createElement('div');
    location.setAttribute('id', 'location');
    subcontent.appendChild(location);
    location.textContent = "86685 Sprong Byway, Lil' Hrinkling PA, West G.A.B.";
}

export {populateHome}