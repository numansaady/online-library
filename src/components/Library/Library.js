import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import './Library.css';


const Library = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect( ()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[]);
    
    const addToCart = book =>{
        const newCart = [...cart, book];
        setCart(newCart);
        if(newCart.length === 5) {
            setCart(cart);
            alert('You can not select more than 4 books.')
        }
    }

    const randomChoose = (randomCart) => {
        if(cart.length){
            const random = Math.floor(Math.random() * randomCart.length);
            const selectCart = [randomCart[random]]
            setCart(selectCart);
        }else {
            alert('Please Choose any book first')
        }
     }

    const resetCart = () => {
        const newCart = [];
        setCart(newCart);
    }
   
    return (
        <Container>
            <Row>
                <Col className='col-lg-9 order-lg-1 order-2'>
                    <div className="books-container row">
                        {
                            books.map(book => <Book 
                            key={book.ISBN}
                            book={book}
                            addToCart={addToCart}
                            ></Book> )
                        }
                    </div>
                </Col>
            <Col className='col-lg-3 order-lg-2 order-1'>
            <div className="cart-container">
                <h2>Selected Books</h2>
                {
                    cart.map(item => <Cart
                        key={item.ISBN}
                        cart={item}
                        ></Cart>)
                }
                <Button onClick={()=> randomChoose(cart)} className='mb-2 d-block'>Choose For Me</Button>
                <Button onClick={resetCart} className='mt-2 d-block'>Choose Again</Button>
            </div>
            </Col>
            </Row>
        </Container>
    );
};

export default Library;