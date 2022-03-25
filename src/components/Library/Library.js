import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
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
    }
    return (
        <div className='library-container'>
            <div className="books-container">
                {
                    books.map(book => <Book 
                    key={book.ISBN}
                    book={book}
                    addToCart={addToCart}
                    ></Book> )
                }
            </div>
            <div className="cart-containe">
                <h2>{cart.length}</h2>
            </div>
        </div>
    );
};

export default Library;