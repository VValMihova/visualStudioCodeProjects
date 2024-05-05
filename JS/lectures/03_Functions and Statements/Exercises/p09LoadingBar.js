function loadingBarVisualisation(percents) {
  if (percents < 100) {
    let timesToRepeat = percents / 10;
    let firstPartOutput = "%".repeat(timesToRepeat);
    let secondPartOutput = ".".repeat(10 - timesToRepeat);
    console.log(`${percents}% [${firstPartOutput}${secondPartOutput}]`);
    console.log("Still loading...");
  } else {
    console.log("100% Complete!");
    console.log("[%%%%%%%%%%]");
  }
}

loadingBarVisualisation(100);
loadingBarVisualisation(30);
