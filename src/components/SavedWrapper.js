import React from 'react';
import BookCard from './BookCard';

// contains books prop data from state, map over that array and output for every object in that array, create a BookCard
const SavedWrapper = (props) => {

return (

<div className="saved-wrapper">
    
    {/* render out all the individual book card components */}
    {
    // props.books.map((books, i) => {
    //     return <div>
    //             <BookCard
    //                 key={books.id}
    //                 title={books.volumeInfo.title}
    //                 author={books.volumeInfo.authors.join(", ") ? books.volumeInfo.authors.join(", ") : ["No author available"]}
    //                 category={books.volumeInfo.categories ? books.volumeInfo.categories : ["No category available"]}
    //                 image={books.volumeInfo.imageLinks.thumbnail}
    //                 link={books.volumeInfo.canonicalVolumeLink}
    //                 description={books.volumeInfo.description ? books.volumeInfo.description : ["No description available"]}
    //             /> 
    //         </div>
    // })
    }
</div>
)
}

export default SavedWrapper;
