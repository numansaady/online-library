import React, { useEffect, useState } from 'react';

const Library = () => {
    const [books, setBooks] = useState([]);

    useEffect( ()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[]);
    
    return (
        <div className='library-container'>
            <div className="books-container">
                {
                    books.map(book => console.log(book))
                }
            </div>
            <div className="cart-containe">
                <h2>Added Books in Cart</h2>
            </div>
        </div>
    );
};

export default Library;