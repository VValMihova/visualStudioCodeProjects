
function vacationTickets(numberOfPeople, typeOfGroup, dayOfWeek) {
  let price;
  let discount;
  let totalPrice;

  switch (typeOfGroup) {
    case "Students":
      if (dayOfWeek === "Friday") {
        price = numberOfPeople * 8.45;
      } else if (dayOfWeek === "Saturday") {
        price = numberOfPeople * 9.8;
      } else if (dayOfWeek === "Sunday") {
        price = numberOfPeople * 10.46;
      }

      if (numberOfPeople >= 30) {
        discount = price * 0.15;
        totalPrice = price - discount;
      } else {
        totalPrice = price;
      }
      break;
    case "Business":
      if (dayOfWeek === "Friday") {
        price = numberOfPeople * 10.9;
      } else if (dayOfWeek === "Saturday") {
        price = numberOfPeople * 15.6;
      } else if (dayOfWeek === "Sunday") {
        price = numberOfPeople * 16;
      }

      if (numberOfPeople >= 100) {
        discount = (price / numberOfPeople) * 10;
        totalPrice = price - discount;
      } else {
        totalPrice = price;
      }

      break;
    case "Regular":
    case "Students":
      if (dayOfWeek === "Friday") {
        price = numberOfPeople * 15;
      } else if (dayOfWeek === "Saturday") {
        price = numberOfPeople * 20;
      } else if (dayOfWeek === "Sunday") {
        price = numberOfPeople * 22.5;
      }

      if (numberOfPeople >= 10 && numberOfPeople <= 20) {
        discount = price * 0.05;
        totalPrice = price - discount;
      } else {
        totalPrice = price;
      }
      break;
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacationTickets(40,
  "Regular",
  "Saturday"
  );
