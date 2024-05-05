function moviesInfo(input) {
  let movies = [];
  input.forEach((command) => {
    if (command.includes("addMovie")) {
      const [_, name] = command.split("addMovie ");
      movies.push({
        name,
      });
    } else if (command.includes("directedBy")) {
      const [movieName, directorName] = command.split(" directedBy ");
      const movie = movies.find((movie) => movie.name === movieName);

      if (movie) {
        movie.director = directorName;
      }
    } else if (command.includes("onDate")) {
      const [movieName, date] = command.split(" onDate ");
      const movie = movies.find((movie) => movie.name === movieName);

      if (movie) {
        movie.date = date;
      }
    }
  });

  movies
    .filter((movie) => movie.name && movie.date && movie.director)
    .forEach((movie) => console.log(JSON.stringify(movie)));
}

moviesInfo([
  "addMovie The Avengers",
  "addMovie Superman",
  "The Avengers directedBy Anthony Russo",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
]);
