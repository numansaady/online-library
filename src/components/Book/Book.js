import React from 'react';
import './Book.css';

const Book = ({book, addToCart}) => {
    const {image, title, price} = book;
    return (
        <div className='book'>
            <img src={image} alt="" />
            <div className="book-info">
                <h2>{title}</h2>
                <p>Price: $ {price.value}</p>
            </div>
            <button onClick={()=> addToCart(book)}>Add to Cart</button>
        </div>
    );
};

export default Book;