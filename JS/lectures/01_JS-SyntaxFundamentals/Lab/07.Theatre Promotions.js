function ticketPrice(weekday, years) {
  let finalPrice;

      if(weekday === "Weekday"){
        if(years >= 0 && years <= 18 ){
            finalPrice = 12;
            console.log(finalPrice + "$");

        } else if (years>=19&&years<=64) {
            finalPrice = 18;
            console.log(finalPrice + "$");
            
        } else if (years>=65&&years<=122) {
            finalPrice = 12;
            console.log(finalPrice + "$");

        } else {
            console.log("Error!");
        }


      } else if (weekday === "Weekend") {

        if(years >= 0 && years <= 18 ){
            finalPrice = 15;
            console.log(finalPrice + "$");

        } else if (years>=19&&years<=64) {
            finalPrice = 20;
            console.log(finalPrice + "$");
            
        } else if (years>=65&&years<=122) {
            finalPrice = 15;
            console.log(finalPrice + "$");
        } else {
            console.log("Error!");
        }
        
      } else if (weekday === "Holiday") {

         if(years >= 0 && years <= 18 ){
            finalPrice = 5;
            console.log(finalPrice + "$");
            
        } else if (years>=19&&years<=64) {
            finalPrice = 12;
            console.log(finalPrice + "$");
            
        } else if (years>=65&&years<=122) {
            finalPrice = 10;
            console.log(finalPrice + "$");
        } else {
            console.log("Error!");
        }
      }
  }

  ticketPrice("Weekday", -12);

