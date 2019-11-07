const calenderBody = document.getElementById('calender-body');
const calenderNavLeft = document.getElementById('calender-nav-left');
const calenderNavRight = document.getElementById('calender-nav-right');
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
const today = new Date();
const g_currentYear = today.getFullYear();
const g_currentMonth = today.getMonth();
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let beginning = 9;
let limit = 12;

calenderNavLeft.addEventListener('click', e => {
  if (beginning === 0) {
    return;
  }

  if (beginning > 0) {
    beginning -=3;
    limit -=3
  }

  calenderBody.innerHTML = ``;
  appendMonths();
});

calenderNavRight.addEventListener('click', e => {
  if (beginning === 9) {
    return;
  }

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
        <div class='month__dates' id=${month}>
        </div>
      </div>
    `);

    insertDates(daysInMonth[months.indexOf(month)], month);
    }
  });
}

function insertDates(numOfDays, month) {
  const mon = document.getElementById(month);
  let num = 0;

  while (num < numOfDays) {
    num +=1;

    if (num === getCurrentDay() && month === 'November') {
      mon.insertAdjacentHTML('beforeend', `
        <button class="today">
          <time>${num}</time>
        </button>
      `)
    }

    mon.insertAdjacentHTML('beforeend', `
      <button>
        <time>${num}</time>
      </button>
    `)
  }
}

function getCurrentDay() {
  let today = new Date();
  let thisMonth = today.getMonth();
  let thisYear = today.getFullYear();
  if (thisMonth === g_currentMonth && thisYear === g_currentYear) {
    //console.log(today.getDate())
  	return today.getDate();
  }  
}