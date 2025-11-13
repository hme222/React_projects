import Greeting from './components/Movie'
import './App.css'
import Actor from './components/Actor'
import Movie from './components/Movie'

function App() {
const movie1 = "Inception";
const movie2 = "The Matrix";
const movie3 = "Interstellar";

const actor1 = { id: 1, name: "Leonardo DiCaprio", age: 46 };
const actor2 = { id: 2, name: "Keanu Reeves", age: 57 };
const actor3 = { id: 3, name: "Matthew McConaughey", age: 52 };

  return (
    <>
     <div>
      <h1> Favorite Movies and Actors </h1>
      <Movie title={movie1} />
      <Movie title={movie2} />
      <Movie title={movie3} />
      <Actor actor={actor1} />
      <Actor actor={actor2} />
      <Actor actor={actor3} />
     </div>
    </>
  )
}

export default App
