import MovieCard from "./movieCard";

function MovieList (props){
    
//const {title,plot,price,rating,stars,fav,cart,poster} = state.movies;
const {movies,addStars,decStars,handleCart,handleFav} = props;   
return(
    <>

    {movies.map((movie) =>  <MovieCard movies= {movie} 
                                       addStars = {addStars} 
                                       decStars = {decStars}
                                       handleFav = {handleFav}
                                       handleCart = {handleCart}
                                       />)}
    
    </>
    )
}

// function Student(props){
//     const{name,marks} = props;
//     return(
//         <>
//         <h1>Hello,{props.name}</h1>
//         <p>You have secured {marks} %</p>
//         <hr/>
//         </>
//     )
// }

export default MovieList;