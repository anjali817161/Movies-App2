import './index.css';
import MovieList from "./Components/movieList";
import Navbar from './Components/Navbar';
import { Component } from 'react';
import { movies } from './Components/moviesData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movies, // Array of movie objects
      cartCount: 0,   // Counter for items in the cart
      favCount: 0     // Counter for favorite items
    };
  }

  // Handle star increment
  handleIncStar = (movie) => {
    const { movies } = this.state;

    const mid = movies.indexOf(movie);

    if (movies[mid].stars >= 5) {
      return;
    }
    movies[mid].stars += 0.5;

    this.setState({ movies });
  };

  // Handle star decrement
  handleDecStar = (movie) => {
    const { movies } = this.state;

    const mid = movies.indexOf(movie);

    if (movies[mid].stars <= 0) {
      return;
    }
    movies[mid].stars -= 0.5;

    this.setState({ movies });
  };

  // Toggle favorite status
  handleToggleFav = (movie) => {
    let { movies, favCount } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;

    // Update favorite count based on the new status
    favCount = movies[mid].fav ? favCount + 1 : favCount - 1;

    this.setState({ movies, favCount });
  };

  // Toggle cart status
  handleToggleInCart = (movie) => {
    let { movies, cartCount } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].cart = !movies[mid].cart;

    // Update cart count based on the new status
    cartCount = movies[mid].cart ? cartCount + 1 : cartCount - 1;

    this.setState({ movies, cartCount });
  };

  render() {
    const { movies, cartCount, favCount } = this.state;

    return (
      <>
        {/* Pass the cart and favorite counts to the Navbar */}
        <Navbar cartCount={cartCount} favCount={favCount} />

        {/* Pass movies and handlers to MovieList */}
        <MovieList
          movies={movies}
          decStars={this.handleDecStar}
          addStars={this.handleIncStar}
          handleFav={this.handleToggleFav}
          handleCart={this.handleToggleInCart}
        />
      </>
    );
  }
}

export default App;
