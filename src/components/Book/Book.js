import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import './Book.css';

const Book = ({book, addToCart}) => {
    const {image, title, price} = book;
    return (
        <div className='book col-lg-4'>
            <img src={image} alt="" />
            <div className="book-info">
                <h4>{title}</h4>
                <p>Price: $ {price.value}</p>
            </div>
            <Button onClick={()=> addToCart(book)}>Add to Cart  
            <FontAwesomeIcon className='ms-2' icon={faShoppingCart}/>
            </Button>
            
        </div>
    );
};

export default Book;