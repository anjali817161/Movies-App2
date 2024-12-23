import styled from "styled-components";

function MovieCard (props) {
  
// removeStars=() =>{
// //     this.setState((prevState) =>{
// // return{
// //     stars:prevState.stars-0.5
// // }
// //     })
// if(this.state.stars <=0){
//     return;
// }

// this.setState ({
//     stars: this.state.stars-0.5
// }, () => console.log("stars are increase"))//this call back function for showing the exact result as on UI

// }



// handleFav = () =>{
//     this.setState({
//         fav: !this.state.fav
//     })
// }

// handleCart = () =>{
//     this.setState({
//         cart: !this.state.cart
//     })
// }

        console.log(props);
        // const {movies: data} = this.props;
        const {movies,addStars,decStars,handleCart,handleFav} = props;
        const {title,price,plot,rating,stars,fav,cart,image} = props.movies;
        return (
            <Body>
            <div className="body">
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster" src={image}/>
                    </div>

                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/43/43625.png" 
                                onClick={()=> {decStars(movies)}} />
                                <img className="star" alt="star" src="https://cdn-icons-png.flaticon.com/128/1040/1040230.png" />
                                <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                                onClick={() => {addStars(movies)}} />
                                <span className="starCount">{stars}</span>
                            </div>
                            <button className={fav?"unfavourite-btn": "favourite-btn"} onClick={() => {handleFav(movies)}}>{fav?"Un-favourite": "Favourite"}</button>
                            <button className={cart? "remove-cart-btn":"cart-btn"} onClick={() => {handleCart(movies)}}>{cart? "Remove from Cart":"Add to Cart"}</button>
                        </div>

                    </div>

                </div>

            </div>
            </div>
            </Body>
        )
    }



// class Student extends Component{
//     constructor(){
//         super();
//         render(){
//             return(
//                 <h1>Hello,{name}</h1>
//             )
//         }
    
        
// }
// }

export default MovieCard;
// export default Student;


const Body = styled.div`
height:100%;
width:100%;
background:;
overflow: hidden;
background: linear-gradient( 820deg, #b8f4ff ,rgba(168, 162, 231, 0.5) );

`;