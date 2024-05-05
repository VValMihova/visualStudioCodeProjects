function modernTimesHashtag(input) {
  const regex = /[#][A-Za-z]+/gm;
  let hashtags = input.match(regex);




  hashtags.forEach((element) => {
    console.log(element.substring(1, element.length));
  });
}

modernTimesHashtag(
  'The symbol # is known #variously in English-speaking #regions as the #number sign'
);
