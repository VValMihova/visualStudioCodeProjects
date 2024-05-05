function pascalCaseSplitter(input) {
console.log(input.split(/(?=[A-Z])/gm).join(", "));

}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')