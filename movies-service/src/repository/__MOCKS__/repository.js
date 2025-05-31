const movies = [
  {
    _id: "682dceac36858a95a1eeeff9",
    titulo: "Os Vingadores: Ultimato",
    sinopse: "Os heróis mais poderosos da Terra enfrentando o Thanos. De novo.",
    duracao: 181,
    dataLancamento: new Date("2019-04-25T00:00:00.000Z"),
    imagem:
      "https://raw.githubusercontent.com/tarciorodrigo/cinema_microservice/refs/heads/main/images/Vingadores-Ultimato.jpeg",
    categorias: ["Aventura", "Ação"],
  },
  {
    _id: "682dced836858a95a1eeeffa",
    titulo: "Os Vingadores: Guerra Infinita",
    sinopse: "Os heróis mais poderosos da Terra enfrentando o Thanos",
    duracao: 149,
    dataLancamento: new Date("2018-04-26T00:00:00.000Z"),
    imagem:
      "https://raw.githubusercontent.com/tarciorodrigo/cinema_microservice/refs/heads/main/images/Vingadores-Guerra_Infinita.jpeg",
    categorias: ["Aventura", "Ação"],
  },
  {
    _id: "682dcee936858a95a1eeeffb",
    titulo: "Os Vingadores: Era de Ultron",
    sinopse: "Os heróis mais poderosos da Terra enfrentando o Ultron",
    duracao: 141,
    dataLancamento: new Date("2015-04-23T00:00:00.000Z"),
    imagem:
      "https://raw.githubusercontent.com/tarciorodrigo/cinema_microservice/refs/heads/main/images/vingadores-Era_de_Ultron.jpeg",
    categorias: ["Aventura", "Ação"],
  },
  {
    _id: "682dcefb36858a95a1eeeffc",
    titulo: "Os Vingadores",
    sinopse: "Os heróis mais poderosos da Terra enfrentando o Loki",
    duracao: 143,
    dataLancamento: new Date("2012-04-27T00:00:00.000Z"),
    imagem:
      "https://raw.githubusercontent.com/tarciorodrigo/cinema_microservice/refs/heads/main/images/vingadores.jpeg",
    categorias: ["Aventura", "Ação"],
  },
  {
    _id: "682dd00236858a95a1eeeffd",
    titulo: "Os Vingadores: Doomsday",
    sinopse: "Guerras Secretas- Prelúdio",
    duracao: 195,
    dataLancamento: new Date("2025-05-21T00:00:00.000Z"),
    imagem:
      "https://raw.githubusercontent.com/tarciorodrigo/cinema_microservice/refs/heads/main/images/vingadores-doomsday.jpeg",
    categorias: ["Aventura", "Ação"],
  },
];

async function getAllMovies() {
  return movies;
}

async function getMovieById(id) {
  if (id == -1) return null;

  movies[0]._id = id;
  return movies[0];
}

async function getMoviePremieres() {
  movies[0].dataLancamento = new Date();
  return [movies[0]];
}

// async function addMovie(movie) {
//   const db = await database.connect();
//   const result = await db.collection("movies").insertOne(movie);
//   movie._id = result.insertedId;
//   return movie;
// }

// async function deleteMovie(id) {
//   const db = await database.connect();
//   //return db.collection('movies').deleteOne({ _id: ObjectId.createFromHexString(id) }); version >= 5
//   return db.collection("movies").deleteOne({ _id: new ObjectId(id) });
// }

module.exports = {
  getAllMovies,
  getMovieById,
  getMoviePremieres,
};
