const populateMenu = () => {
    document.getElementById("subcontent").innerHTML = "";
    let menuHeader = document.createElement('div');
    menuHeader.setAttribute('id', 'menuHeader');
    subcontent.appendChild(menuHeader);
    menuHeader.textContent = "MENU";

    let menuGrid = document.createElement('div');
    menuGrid.setAttribute('id', 'menuGrid');
    subcontent.appendChild(menuGrid);

    let grub = document.createElement('div');
    grub.setAttribute('id', 'grub');
    menuGrid.appendChild(grub);

    let grubHeader = document.createElement('div');
    grubHeader.setAttribute('id', 'grubHeader');
    grub.appendChild(grubHeader);
    grubHeader.textContent = "Grubs";

    let bub = document.createElement('div');
    bub.setAttribute('id', 'bub');
    menuGrid.appendChild(bub);

    let bubHeader = document.createElement('div');
    bubHeader.setAttribute('id', 'bubHeader');
    bub.appendChild(bubHeader);
    bubHeader.textContent = "Bubs";

    let grub1 = document.createElement('div');
    grub1.setAttribute('id', 'grub1');
    grub.appendChild(grub1);
    grub1.textContent = "Biff's Big Burger\n~\nA Biff's classic. Five big patties, nine big pieces of cheese, twelve big slaps of bacon, and a big squirt of BBQ sauce. Get BIFFED!\n$15.99";

    let grub2 = document.createElement('div');
    grub2.setAttribute('id', 'grub2');
    grub.appendChild(grub2);
    grub2.textContent = "Suskaloosa Slammer Shake\n~\n72 ounces of American Dairy. Once you try to finish one, you'll understand why it's listed in the same section as our meals.\n$11.99";

    let grub3 = document.createElement('div');
    grub3.setAttribute('id', 'grub3');
    grub.appendChild(grub3);
    grub3.textContent = "Bucket'a Chicken\n~\nYes, it's a bucket of chicken. Yes, it's fried. Yes, you want it.\n$13.99/lb";

    let bub1 = document.createElement('div');
    bub1.setAttribute('id', 'bub1');
    bub.appendChild(bub1);
    bub1.textContent = "Beer\n~\nIf you order this we will give you a beer, dealer's choice. No Whining.\n$4.99";

    let bub2 = document.createElement('div');
    bub2.setAttribute('id', 'bub2');
    bub.appendChild(bub2);
    bub2.textContent = "Whiskey\n~\nNothing fancy here, no bugs or snakes swimming in the bottle; just good ol' West Virginia Rye.\n$2.99/shot";
    
    let bub3 = document.createElement('div');
    bub3.setAttribute('id', 'bub3');
    bub.appendChild(bub3);
    bub3.textContent = "Suskaloosa Sucker Punch\n~\nThe bartender claims he made this stuff in his bathtub. He's a known liar, but there are chips of enamel floating in the bucket, so the final judgement is for ye to call.\n$3.99/shot";

    
}



export {populateMenu};