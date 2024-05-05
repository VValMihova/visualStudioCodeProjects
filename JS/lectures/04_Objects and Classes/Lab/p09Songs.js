function songs(input) {
  class Song {
    constructor(type, name, time) {
      this.type = type;
      this.name = name;
      this.time = time;
    }
  }
  let numberOfSongs = input.shift();
  let typeList = input.pop();
  let playList = [];

  input.forEach((element) => {
    const [type, name, time] = element.split("_");
    const song = new Song(type, name, time);
    playList.push(song);
  });

  if (typeList === "all") {
    playList.forEach((el) => {
      console.log(el.name);
    });
  } else {
    let filtered = playList.filter((el) => el.type === typeList);
    filtered.forEach((el) => console.log(el.name));
  }
}

songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
