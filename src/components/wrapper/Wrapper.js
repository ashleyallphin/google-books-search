import React from 'react';
import './Wrapper.css';
import BookCard from '../bookcard/BookCard.js';

// contains books prop data from state, map over that array and output for every object in that array, create a BookCard
const Wrapper = (props) => {

  return (

    <div className="card-wrapper">
      
      {/* render out all the individual book card components */}
      {
        props.books.map((books, i) => {
          return <BookCard
                    title={books.volumeInfo.title}
                    author={books.volumeInfo.authors}
                    category={books.volumeInfo.categories}
                    image={books.volumeInfo.imageLinks.thumbnail}
                    link={books.volumeInfo.canonicalVolumeLink}
                    snippet={books.volumeInfo.description}
                  />
        })
      }

    </div>

  )

}

export default Wrapper;
