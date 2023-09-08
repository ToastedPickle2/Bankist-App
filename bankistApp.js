"use strict";

const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

let inputLoginUsername = document.querySelector(".login__input--user");
let inputLoginPin = document.querySelector(".login__input--pin");
let inputTransferTo = document.querySelector(".form__input--to");
let inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2020-07-28T23:36:17.929Z",
    "2020-08-01T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT",
};
const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -20],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2023-09-05T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};
const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -450],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2023-09-05T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};
const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2023-09-05T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2, account3, account4];

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `  
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${
      i + 1
    }${type}</div>
            <div class='movements__date'>${displayDate}</div>
            <div class="movements__value">${formattedMov}</div>
        </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
// displayMovements(account1.movements);

// Display Balance
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((a, b) => a + b);

  labelBalance.textContent = `${formatCur(
    acc.balance,
    acc.locale,
    acc.currency
  )}`;
};
// calcDisplayBalance(account1.movements);

// Creating a username for each owner and adding them to each account object
const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((x) => x[0])
      .join("");
  });
};
createUsername(accounts);
console.log(accounts);

// Converting USD to EURO
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const max = Math.max(...movements);
console.log(max);

const euroToUsd = movements.map((x) => Math.round(x * 1.1));
console.log(euroToUsd);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

//
const deposits = movements.filter((x) => x > 0);
console.log(deposits);

const withdrawals = movements.filter((x) => x < 0);
console.log(withdrawals);

//
const totalDepositsUSD = movements
  .filter((x) => x > 0)
  .map((x) => x * 1.1)
  .reduce((a, b) => a + b);
console.log(totalDepositsUSD);

//
console.log("DisplaySummary");
const calcDisplaySummary = function (acc) {
  const sumValIn = acc.movements.filter((x) => x > 0).reduce((a, b) => a + b);
  const sumValOut = Math.abs(
    acc.movements.filter((x) => x < 0).reduce((a, b) => a + b, 0)
  );
  const interest = acc.movements
    .filter((x) => x > 0)
    .map((x) => x * (acc.interestRate / 100))
    .filter((x) => x >= 1)
    .reduce((a, b) => a + b)
    .toFixed(2);

  labelSumIn.innerHTML = `${formatCur(sumValIn, acc.locale, acc.currency)}`;
  labelSumOut.innerHTML = `${formatCur(sumValOut, acc.locale, acc.currency)}`;
  labelSumInterest.innerHTML = `${formatCur(
    interest,
    acc.locale,
    acc.currency
  )}`;
};

//
const account =
  accounts.find((x) => x.owner === "Jessica Davis") || "User not found";

//
const updateUI = function (acc) {
  displayMovements(acc);

  calcDisplayBalance(acc);

  calcDisplaySummary(acc);

  btnSort.classList.toggle("clicked");
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When timer is at 0 seconds, stop timer and log user
    if (time === 0) {
      clearInterval(timer);
      containerApp.style.opacity = "0";
      labelWelcome.textContent = "Log in to get started";
    }

    // Decrease 1 second
    time--;
  };

  // Set time to 5 minutes
  let time = 300;

  // Immediately call the tick function so that once the user logs in again the timer immediately starts at 5 minutes and not the end of the time
  tick();

  // Call the timer every second
  const timer = setInterval(tick, 1000);
  return timer;
};

let currentAccount, timer;
let currentAccountPin;

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();

  currentAccount = accounts.find(
    (x) => x.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;

    containerApp.style.opacity = "100";

    // Create current date and time

    setInterval(function () {
      const now = new Date();
      (labelDate.textContent = new Intl.DateTimeFormat(
        currentAccount.locale,
        options
      ).format(now)),
        `${now.getHours()}:${now.getMinutes()}`;
    }, 1000);

    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric", // long shows the month so September, there's also 2-digit, numeric
      year: "numeric",
      // weekday: "long",
    };

    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);

    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear Input Fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur(); // makes input field lose focus

    // Eliminate multiple timers
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    updateUI(currentAccount);
  }
});
// console.log(currentAccount);

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";
  console.log(amount, receiverAcc);

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    console.log("Transfer Valid");
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    setTimeout(() => updateUI(currentAccount), 4000);

    // Reset Timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

//
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some((x) => x >= amount * 0.1)) {
    currentAccount.movements.push(amount);

    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    setTimeout(() => updateUI(currentAccount), 4000);
    // updateUI(currentAccount);
  }
  inputLoanAmount.value = "";

  // Reset Timer
  clearInterval(timer);
  timer = startLogOutTimer();
});

// Close Account
btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const response = confirm("Are you sure?");
    console.log(response);
    if (response === true) {
      const index = accounts.findIndex(
        (x) => x.username === currentAccount.username
      );
      accounts.splice(index, 1);

      containerApp.style.opacity = 0;
      console.log(accounts);
    } else {
      //   window.open("https://www.google.com"); // opens new window
      window.location.href = "homepage.html";
    }
  }
  inputCloseUsername.value = inputClosePin.value = "";
  inputClosePin.blur();
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
  console.log("clik");
  if (sorted) {
    btnSort.innerHTML = "UNSORT";
  } else {
    btnSort.innerHTML = "&downarrow; SORT";
  }
});

labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (x) => Number(x.textContent.replace("€", ""))
  );

  console.log(movementsUI);
});

labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
    if (i % 2 === 0) {
      row.style.backgroundColor = "orangered";
    }
  });
});

console.log(new Date(account1.movementsDates[0]));
