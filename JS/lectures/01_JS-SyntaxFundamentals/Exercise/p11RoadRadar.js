function roadRadar(currentSpeed, area) {
  let difference = 0;
  let status = "";
  switch (area) {
    case "motorway":
      let motorwayMaxSpeed = 130;
      if (currentSpeed <= motorwayMaxSpeed) {
        console.log(
          `Driving ${currentSpeed} km/h in a ${motorwayMaxSpeed} zone`
        );
      } else {
        difference = currentSpeed - motorwayMaxSpeed;

        if (difference <= 20) {
          status = "speeding";
        } else if (difference > 20 && difference <= 40) {
          status = "excessive speeding";
        } else if (difference > 40) {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${motorwayMaxSpeed} - ${status}`
        );
      }

      break;
    case "interstate":
      let interstateMaxSpeed = 90;
      if (currentSpeed <= interstateMaxSpeed) {
        console.log(
          `Driving ${currentSpeed} km/h in a ${interstateMaxSpeed} zone`
        );
      } else {
        difference = currentSpeed - interstateMaxSpeed;

        if (difference <= 20) {
          status = "speeding";
        } else if (difference > 20 && difference <= 40) {
          status = "excessive speeding";
        } else if (difference > 40) {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${interstateMaxSpeed} - ${status}`
        );
      }
      break;
    case "city":
      let cityMaxSpeed = 50;
      if (currentSpeed <= cityMaxSpeed) {
        console.log(`Driving ${currentSpeed} km/h in a ${cityMaxSpeed} zone`);
      } else {
        difference = currentSpeed - cityMaxSpeed;

        if (difference <= 20) {
          status = "speeding";
        } else if (difference > 20 && difference <= 40) {
          status = "excessive speeding";
        } else if (difference > 40) {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${cityMaxSpeed} - ${status}`
        );
      }

      break;
    case "residential":
      let residentialMaxSpeed = 20;
      if (currentSpeed <= residentialMaxSpeed) {
        console.log(
          `Driving ${currentSpeed} km/h in a ${residentialMaxSpeed} zone`
        );
      } else {
        difference = currentSpeed - residentialMaxSpeed;

        if (difference <= 20) {
          status = "speeding";
        } else if (difference > 20 && difference <= 40) {
          status = "excessive speeding";
        } else if (difference > 40) {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${residentialMaxSpeed} - ${status}`
        );
      }
      break;
  }
}

roadRadar(200, 'motorway');
