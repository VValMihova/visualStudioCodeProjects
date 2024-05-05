function meetings(input) {
  // let meetingsObject = input.reduce((acc, current) => {
  //   const [weekday, name] = current.split(" ");
  //   if (acc.hasOwnProperty(weekday)) {
  //     console.log(`Conflict on ${weekday}!`);
  //   } else {
  //     acc[weekday] = name;
  //     console.log(`Scheduled for ${weekday}`);
  //   }

  //   return acc;
  // }, {});
  // Object.keys(meetingsObject).forEach((key) => {
  //   console.log(`${key} -> ${meetingsObject[key]}`);
  // });
  const meetingsObject = {};

  for (const line of input) {
    const [day, person] = line.split(" ");
    if (meetingsObject.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      meetingsObject[day] = person;
      console.log(`Scheduled for ${day}`);
    }
  }

  for (const day in meetingsObject) {
    console.log(`${day} -> ${meetingsObject[day]}`);
  }
}

meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
