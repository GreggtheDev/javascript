// Declare a variable called isWeekend and assign it a boolean value
let isWeekend = true; // or false, depending on the current day

// Declare a variable called isHoliday and assign it a boolean value
let isHoliday = false; // or true, if it is a holiday

// Declare a variable called currentTime and assign it a number between 0 and 23
let currentTime = 14; // assuming it's 2:00 pm

// Conditional statement to check if it's a weekend or a holiday
if (isWeekend || isHoliday) {
  console.log("The store is closed");
} else {
  // Check if the time is between store hours of 8:00 am (8) and 6:00 pm (18) inclusive
  if (currentTime >= 8 && currentTime <= 18) {
    console.log("The store is open for business");
  } else {
    console.log("The store is closed");
  }
}
