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
})