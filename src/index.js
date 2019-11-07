import './scss/main.scss';
import './js/calender';

const mastMenuItems = Array.from(document.getElementsByClassName('mast__bottom--menuitem'))
mastMenuItems.forEach(item => {
  item.addEventListener('click', function(e) {
    item.classList.add('mast__bottom--menuitem-active');
    mastMenuItems.forEach(item => {
      if (item.id !== this.id) {
        item.classList.remove('mast__bottom--menuitem-active');
      }
    })
  })
});

const menuBtn = document.getElementById('menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', function() {
  if (menuOpen) {
    menuOpen = false;
    return this.parentElement.style.transform = `translateX(-100%)`;
  }

  menuOpen = true;
  return this.parentElement.style.transform = `translateX(0)`;
})