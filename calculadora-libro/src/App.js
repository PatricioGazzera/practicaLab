import Books from "./components/Books";
import Calculadora from "./components/Calculadora";
import Movies from "./components/Movies";

function App() {
  const books = [
    { title: "El Quijote de la Mancha", rating: 7.9 },
    { title: "El señor de los anillos", rating: 8.1 }, 
    { title: "Dune", rating: 7.8 },
    { title: "Martín Fierro", rating: 9.2 }
   ]

   const booksMoreRating = books.filter(
    (book) => book.rating >= 8
   )

    const booksList = booksMoreRating.map((i) =>{
      return <Books title= {i.title} rating= {i.rating}/>
    })

    const movies = [
      {movieTitle: "Drive", movieRating: 10},
      {movieTitle: "BladeRunner", movieRating: 9.5},
      {movieTitle: "Lalaland", movieRating: 7.2},
      {movieTitle: "Barbie", movieRating: 7.3}
    ]

    const moviesMoreRating = movies.filter(
      (movie) => movie.movieRating >= 8
    )

    const moviesList = moviesMoreRating.map((e) =>{
      return <Movies movieTitle = {e.movieTitle} movieRating= {e.movieRating}/>
    }) 

  return (
    <div className="App">
      {booksList}
      <Calculadora/>
      {moviesList}
    </div>
  );
}

export default App;
