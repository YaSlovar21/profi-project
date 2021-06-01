
  let mob_menu_link = document.querySelector('.nav-mobile-logo');
  let menu = document.querySelector('.nav');

  mob_menu_link.addEventListener('click', function () {
    if (menu.classList.contains('nav_mobile_active')) {
      menu.classList.remove('nav_mobile_active');
      mob_menu_link.setAttribute("src", "images/menu-link-mobile.svg");
    }
    else {
      menu.classList.add('nav_mobile_active');
      mob_menu_link.setAttribute("src", "images/dngb_ballotx.svg");
    }
    console.log(menu.classList)
  });
