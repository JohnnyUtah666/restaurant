const populateContact = () => {
     document.getElementById("subcontent").innerHTML = "";
    
    let contactUs = document.createElement('div');
    contactUs.setAttribute('id', 'contactUs');
    subcontent.appendChild(contactUs);
    contactUs.textContent = "Contact Us";

    let contactInfo = document.createElement('div');
    contactInfo.setAttribute('id', 'contactInfo');
    subcontent.appendChild(contactInfo);
    contactInfo.textContent = "Phone\n(555) 555-5555\n\nEmail\ngetBIFFED@Bmail.biff\n\nBiff loves to hear from you!";
    
}



export {populateContact};