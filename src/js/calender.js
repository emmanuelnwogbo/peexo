const calenderBody = document.getElementById('calender-body');
const calenderNavLeft = document.getElementById('calender-nav-left');
const calenderNavRight = document.getElementById('calender-nav-right');
/*const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
]*/
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const daysNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

let beginning = 0;
let limit = 3;

calenderNavLeft.addEventListener('click', e => {
  if (beginning > 0) {
    beginning -=3;
    limit -=3
  }

  calenderBody.innerHTML = ``;
  appendMonths();
});

calenderNavRight.addEventListener('click', e => {
  if (beginning < 9) {
    beginning +=3;
    limit +=3
  }

  calenderBody.innerHTML = ``;
  appendMonths();
});

appendMonths();

function appendMonths() {
  months.forEach(month => {
    if (months.indexOf(month) < limit && months.indexOf(month) >= beginning) {
      calenderBody.insertAdjacentHTML('beforeend', `
      <div class='month'>
        <div class="month__name"><div>${month}</div></div>
        <div class="month__days">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>
    `);
    }
  });
}
