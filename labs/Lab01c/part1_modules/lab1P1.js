/*
1. Create list of holiday objects with name and date [i.e:
Christmas, Canada Day, New Years etc]
1. Iterate over array of holidays and print number of days until
each holiday from today
2. Use Lodash library to output name and date of a random
holiday
3. Use Lodash library to output indexes of “Christmas” and
“Canada Day” holidays
*/

const holidays = [
  { name: "Christmas", date: new Date("2024-12-25") },
  { name: "Canada Day", date: new Date("2025-07-01") },
  { name: "New Years", date: new Date("2025-01-01") },
];

console.log(holidays)

// step 2
const today = new Date();
holidays.forEach((holidays) => {
  console.log((holidays.date - today) / (1000 * 60 * 60 * 24));
});

// step 3
const lodash = require("lodash");

console.log(lodash.sample(holidays));

// step 4
console.log(lodash.findIndex(holidays, { name: "Canada Day" }));
