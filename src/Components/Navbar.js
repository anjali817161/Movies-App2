import { Component } from "react";
import styled from "styled-components";

const Nav = styled.div`
width: 100%;
height: 60px;
justify-content: space-between;
display: flex;
background: linear-gradient(490deg, rgb(4, 72, 75),rgb(5, 60, 77));
padding: 4px;
`;

const Title = styled.div`
color: #fff;
font-weight: 600;
font-family: sans-serif;
font-size: 30px;
padding: 15px;
cursor:pointer;
&:hover{color: cadetblue};
`;

const Cart = styled.img`
height: 40px;
width: 40px;
padding: 16px;
margin-bottom: 12px;
&:hover{transition: 1sec ease-in-out};

`;

const Container= styled.div`
position: relative;
cursor: pointer;
`;

const Count=styled.span`
        position: absolute;
        top: 9px;
        right: 75px;
        border-radius: 50%;
        background-color: red;
        color: white;
        width: 20px;
        height: 20px;
        text-align: center;
        font-size: 12px;
        line-height: 20px;
        visibility:${(props) => props.show? "visible" : "hidden"}
`;

const Favourite = styled.img`
height: 50px;
width: 50px;
padding: 20px;
&:hover{transition: 1sec ease-in-out}
`;

const FavCount = styled.span`
position: absolute;
top: 18px;
right: 165px;
border-radius: 50%;
background-color: orange;
color: white;
width: 20px;
height: 20px;
text-align: center;
font-size: 12px;
line-height: 20px;
visibility:${(props) => props.show? "visible" : "hidden"}
`;

// const List = styled.img`
// padding:12px;
// margin-bottom:10px;
// `;


class Navbar extends Component{
    render(){
        const {cartCount,favCount} = this.props;
        return(
            <>
                     { /*<div style={styles.nav}>  styles through internal css*/}               
                 <Nav> 
                 <Title>Movie App</Title>
                    <Container>
                        <Favourite alt="fav icon" src="https://cdn-icons-png.flaticon.com/128/6320/6320733.png" />
                        <FavCount color="orange" show={true}>{favCount} </FavCount>
                        <Cart  alt="cart icon" src="https://cdn-icons-png.flaticon.com/128/3737/3737151.png"/>
                        <Count color="red" show={true}>{cartCount}</Count>
                        <img  style={styles.list} alt="list" src="https://cdn-icons-png.flaticon.com/128/8456/8456305.png" />
                        {/* <span></span> */}
                    </Container>
                     </Nav> 
                    { /*  </div>*/}
            </>
        )
    }
}

export default Navbar;

const styles ={
    nav: {
        width: "100%",
        height: "60px",
        justifyContent: "space-between",
        display: "flex",
        background: "cadetblue",
        padding: "4px"
    },

    title: {
        color: "#fff",
        fontWeight: "600",
        fontFamily: "sans-serif",
        fontSize: "30px",
        padding: "15px"
    },

    cart: {
        height: "40px",
        width: "40px",
        padding: "15px"
    },

    list: {
        height: "40px",
        width: "40px",
        padding: "15px",
        marginBottom:"10px"

    },

    count: {
        position: "absolute",
        top: "5px",
        right: "70px",
        borderRadius: "50%",
        backgroundColor: "red",
        color: "white",
        width: "20px",
        height: "20px",
        textAlign: "center",
        fontSize: "12px",
        lineHeight: "20px"
    },

    cartContainer: {
        position: "relative",
        cursor: "pointer"
    }
}
